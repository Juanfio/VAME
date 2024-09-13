#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Variational Animal Motion Embedding 1.0-alpha Toolbox
Â© K. Luxem & P. Bauer, Department of Cellular Neuroscience
Leibniz Institute for Neurobiology, Magdeburg, Germany

https://github.com/LINCellularNeuroscience/VAME
Licensed under GNU General Public License v3.0

Updated 5/11/2022 with PH edits
"""

import os
import scipy
import pickle
import numpy as np
from pathlib import Path
import matplotlib.pyplot as plt
from vame.util.auxiliary import read_config
from vame.analysis.tree_hierarchy import graph_to_tree, draw_tree, traverse_tree_cutline
from vame.util.data_manipulation import consecutive
from typing import List, Tuple
from vame.schemas.states import save_state, CommunityFunctionSchema
from vame.logging.logger import VameLogger
from vame.schemas.project import Parametrizations


logger_config = VameLogger(__name__)
logger = logger_config.logger


def get_adjacency_matrix(
    labels: np.ndarray,
    n_cluster: int,
) -> Tuple[np.ndarray, np.ndarray, np.ndarray]:
    """
    Calculate the adjacency matrix, transition matrix, and temporal matrix.

    Parameters
    ----------
    labels : np.ndarray
        Array of cluster labels.
    n_cluster : int
        Number of clusters.

    Returns
    -------
    Tuple[np.ndarray, np.ndarray, np.ndarray]
        Tuple containing: adjacency matrix, transition matrix, and temporal matrix.
    """
    temp_matrix = np.zeros((n_cluster, n_cluster), dtype=np.float64)
    adjacency_matrix = np.zeros((n_cluster, n_cluster), dtype=np.float64)
    cntMat = np.zeros((n_cluster))
    steps = len(labels)

    for i in range(n_cluster):
        for k in range(steps - 1):
            idx = labels[k]
            if idx == i:
                idx2 = labels[k + 1]
                if idx == idx2:
                    continue
                else:
                    cntMat[idx2] = cntMat[idx2] + 1
        temp_matrix[i] = cntMat
        cntMat = np.zeros((n_cluster))

    for k in range(steps - 1):
        idx = labels[k]
        idx2 = labels[k + 1]
        if idx == idx2:
            continue
        adjacency_matrix[idx, idx2] = 1
        adjacency_matrix[idx2, idx] = 1

    transition_matrix = get_transition_matrix(temp_matrix)
    return adjacency_matrix, transition_matrix, temp_matrix


def get_transition_matrix(
    adjacency_matrix: np.ndarray,
    threshold: float = 0.0,
) -> np.ndarray:
    """
    Compute the transition matrix from the adjacency matrix.

    Parameters
    ----------
    adjacency_matrix : np.ndarray
        Adjacency matrix.
    threshold : float, optional
        Threshold for considering transitions. Defaults to 0.0.

    Returns
    -------
    np.ndarray
        Transition matrix.
    """
    row_sum = adjacency_matrix.sum(axis=1)
    transition_matrix = adjacency_matrix / row_sum[:, np.newaxis]
    transition_matrix[transition_matrix <= threshold] = 0
    if np.any(np.isnan(transition_matrix)):
        transition_matrix = np.nan_to_num(transition_matrix)
    return transition_matrix


def fill_motifs_with_zero_counts(
    unique_motif_labels: np.ndarray,
    motif_counts: np.ndarray,
    n_clusters: int,
) -> np.ndarray:
    """
    Find motifs that never occur in the dataset, and fill the motif_counts array with zeros for those motifs.
    Example 1:
        - unique_motif_labels = [0, 1, 3, 4]
        - motif_counts = [10, 20, 30, 40],
        - n_clusters = 5
        - the function will return [10, 20, 0, 30, 40].
    Example 2:
        - unique_motif_labels = [0, 1, 3, 4]
        - motif_counts = [10, 20, 30, 40],
        - n_clusters = 6
        - the function will return [10, 20, 0, 30, 40, 0].

    Parameters
    ----------
    unique_motif_labels : np.ndarray
        Array of unique motif labels.
    motif_counts : np.ndarray
        Array of motif counts (in number of frames).
    n_clusters : int
        Number of clusters.

    Returns
    -------
    np.ndarray
        List of motif counts (in number of frame) with 0's for motifs that never happened.
    """
    cons = consecutive(unique_motif_labels)
    usage_list = list(motif_counts)
    if len(cons) != 1:  # if missing motif is in the middle of the list
        logger.info("Go")
        if 0 not in cons[0]:
            first_id = cons[0][0]
            for k in range(first_id):
                usage_list.insert(k, 0)

        for i in range(len(cons) - 1):
            a = cons[i + 1][0]
            b = cons[i][-1]
            d = (a - b) - 1
            for j in range(1, d + 1):
                index = cons[i][-1] + j
                usage_list.insert(index, 0)
        if len(usage_list) < n_clusters:
            usage_list.insert(n_clusters, 0)

    elif len(cons[0]) != n_clusters:  # if missing motif is at the front or end of list
        # diff = n_cluster - cons[0][-1]
        usage_list = list(motif_counts)
        if cons[0][0] != 0:  # missing motif at front of list
            usage_list.insert(0, 0)
        else:  # missing motif at end of list
            usage_list.insert(n_clusters - 1, 0)

    if len(usage_list) < n_clusters:  # if there's more than one motif missing
        for k in range(len(usage_list), n_clusters):
            usage_list.insert(k, 0)

    usage = np.array(usage_list)
    return usage


def augment_motif_timeseries(
    labels: np.ndarray,
    n_clusters: int,
) -> Tuple[np.ndarray, np.ndarray]:
    """
    Augment motif time series by filling zero motifs.

    Parameters
    ----------
    labels : np.ndarray
        Original array of labels.
    n_clusters : int
        Number of clusters.

    Returns
    -------
    Tuple[np.ndarray, np.ndarray]
        Tuple with:
            - Array of labels augmented with motifs that never occurred, artificially inputed at the end of the labels array
            - Indices of the motifs that never occurred.
    """
    augmented_labels = labels.copy()
    unique_motif_labels, motif_counts = np.unique(augmented_labels, return_counts=True)
    augmented_motif_counts = fill_motifs_with_zero_counts(
        unique_motif_labels=unique_motif_labels,
        motif_counts=motif_counts,
        n_clusters=n_clusters,
    )
    motifs_with_zero_counts = np.where(augmented_motif_counts == 0)[0]
    logger.info(f"Zero motifs: {motifs_with_zero_counts}")
    # TODO - this seems to be filling the labels array with random motifs that have zero counts
    # is this intended? and why?
    idx = -1
    for i in range(len(motifs_with_zero_counts)):
        for j in range(20):
            x = np.random.choice(motifs_with_zero_counts)
            augmented_labels[idx] = x
            idx -= 1
    return augmented_labels, motifs_with_zero_counts


def get_labels(
    cfg: dict,
    files: List[str],
    model_name: str,
    n_cluster: int,
    parametrization: str,
) -> List[np.ndarray]:
    """
    Get cluster labels for given videos files.

    Parameters
    ----------
    cfg : dict
        Configuration parameters.
    files : List[str]
        List of video files paths.
    model_name : str
        Model name.
    n_cluster : int
        Number of clusters.
    parametrization : str
        Which parametrization to use. Options are 'hmm' or 'kmeans'.

    Returns
    -------
    List[np.ndarray]
        List of cluster labels for each file.
    """
    # TODO  - this is limiting the number of frames to the minimum number of frames in all files
    # Is this intended behavior? and why?
    shapes = []
    for file in files:
        path_to_file = os.path.join(
            cfg["project_path"],
            "results",
            file,
            model_name,
            parametrization + "-" + str(n_cluster),
            "",
        )
        label = np.load(
            os.path.join(
                path_to_file,
                str(n_cluster) + "_" + parametrization + "_label_" + file + ".npy",
            )
        )
        shape = len(label)
        shapes.append(shape)
    shapes = np.array(shapes)
    min_frames = min(shapes)

    labels = []
    for file in files:
        path_to_file = os.path.join(
            cfg["project_path"],
            "results",
            file,
            model_name,
            parametrization + "-" + str(n_cluster),
            "",
        )
        label = np.load(
            os.path.join(
                path_to_file,
                str(n_cluster) + "_" + parametrization + "_label_" + file + ".npy",
            )
        )
        label = label[:min_frames]
        augmented_label, motifs_with_zero_counts = augment_motif_timeseries(
            labels=label,
            n_clusters=n_cluster,
        )
        labels.append(augmented_label)
    return labels


def get_community_labels(
    cfg: dict,
    files: List[str],
    model_name: str,
    n_cluster: int,
    parametrization: str,
) -> np.ndarray:
    """
    Get community labels for given files.

    Parameters
    ----------
    cfg : dict
        Configuration parameters.
    files : List[str]
        List of files paths.
    model_name : str
        Model name.
    n_cluster : int
        Number of clusters.
    parametrization : str
        Which parametrization to use. Options are 'hmm' or 'kmeans'.

    Returns
    -------
    np.ndarray
        Array of community labels (integers).
    """
    # TODO  - this is limiting the number of frames to the minimum number of frames in all files
    # Is this intended behavior? and why?
    shapes = []
    for file in files:
        path_to_dir = os.path.join(
            cfg["project_path"],
            "results",
            file,
            model_name,
            parametrization + "-" + str(n_cluster),
            "",
        )
        file_labels = np.load(
            os.path.join(
                path_to_dir,
                str(n_cluster) + "_" + parametrization + "_label_" + file + ".npy",
            )
        )
        shape = len(file_labels)
        shapes.append(shape)
    shapes = np.array(shapes)
    min_frames = min(shapes)

    community_label = []
    for file in files:
        path_to_dir = os.path.join(
            cfg["project_path"],
            "results",
            file,
            model_name,
            parametrization + "-" + str(n_cluster),
            "",
        )
        file_labels = np.load(
            os.path.join(
                path_to_dir,
                str(n_cluster) + "_" + parametrization + "_label_" + file + ".npy",
            )
        )[:min_frames]
        community_label.extend(file_labels)
    community_label = np.array(community_label)
    return community_label


def compute_transition_matrices(
    files: List[str],
    labels: List[np.ndarray],
    n_cluster: int,
) -> List[np.ndarray]:
    """
    Compute transition matrices for given files and labels.

    Args:
        files (List[str]): List of file paths.
        labels (List[np.ndarray]): List of label arrays.
        n_cluster (int): Number of clusters.

    Returns:
        List[np.ndarray]: List of transition matrices.
    """
    transition_matrices = []
    for i, file in enumerate(files):
        adj, trans, mat = get_adjacency_matrix(labels[i], n_cluster)
        transition_matrices.append(trans)
    return transition_matrices


def create_community_bag(
    files: List[str],
    labels: List[np.ndarray],
    transition_matrices: List[np.ndarray],
    cut_tree: int,
    n_cluster: int,
) -> Tuple:
    """Create community bag for given files and labels (Markov chain to tree -> community detection).
    Args:
        files (List[str]): List of file paths.
        labels (List[np.ndarray]): List of label arrays.
        transition_matrices (List[np.ndarray]): List of transition matrices.
        cut_tree (int): Cut line for tree.
        n_cluster (int): Number of clusters.

    Returns:
        Tuple: Tuple containing list of community bags and list of trees.
    """
    trees = []
    communities_all = []
    for i, file in enumerate(files):
        _, usage = np.unique(labels[i], return_counts=True)
        T = graph_to_tree(usage, transition_matrices[i], n_cluster, merge_sel=1)
        trees.append(T)

        if cut_tree is not None:
            community_bag = traverse_tree_cutline(T, cutline=cut_tree)
            communities_all.append(community_bag)
            draw_tree(T)
        else:
            draw_tree(T)
            plt.pause(0.5)
            flag_1 = "no"
            while flag_1 == "no":
                cutline = int(input("Where do you want to cut the Tree? 0/1/2/3/..."))
                community_bag = traverse_tree_cutline(T, cutline=cutline)
                logger.info(community_bag)
                flag_2 = input("\nAre all motifs in the list? (yes/no/restart)")
                if flag_2 == "no":
                    while flag_2 == "no":
                        add = input("Extend list or add in the end? (ext/end)")
                        if add == "ext":
                            motif_idx = int(input("Which motif number? "))
                            list_idx = int(
                                input(
                                    "At which position in the list? (pythonic indexing starts at 0) "
                                )
                            )
                            community_bag[list_idx].append(motif_idx)
                        if add == "end":
                            motif_idx = int(input("Which motif number? "))
                            community_bag.append([motif_idx])
                        logger.info(community_bag)
                        flag_2 = input("\nAre all motifs in the list? (yes/no/restart)")
                if flag_2 == "restart":
                    continue
                if flag_2 == "yes":
                    communities_all.append(community_bag)
                    flag_1 = "yes"

    return communities_all, trees


def create_cohort_community_bag(
    labels: List[np.ndarray],
    trans_mat_full: np.ndarray,
    cut_tree: int,
    n_cluster: int,
) -> Tuple:
    """Create cohort community bag for given labels, transition matrix, cut tree, and number of clusters.
    (markov chain to tree -> community detection)

    Args:
        labels (List[np.ndarray]): List of label arrays.
        trans_mat_full (np.ndarray): Full transition matrix.
        cut_tree (int): Cut line for tree.
        n_cluster (int): Number of clusters.

    Returns:
        Tuple: Tuple containing list of community bags and list of trees.
    """

    trees = []
    communities_all = []
    # for i, file in enumerate(files):
    _, usage_full = np.unique(labels, return_counts=True)
    T = graph_to_tree(usage_full, trans_mat_full, n_cluster, merge_sel=1)
    # nx.write_gpickle(T, 'T.gpickle')
    trees.append(T)

    if cut_tree is not None:
        community_bag = traverse_tree_cutline(T, cutline=cut_tree)
        communities_all = community_bag
        draw_tree(T)
    else:
        draw_tree(T)
        plt.pause(0.5)
        flag_1 = "no"
        while flag_1 == "no":
            cutline = int(input("Where do you want to cut the Tree? 0/1/2/3/..."))
            community_bag = traverse_tree_cutline(T, cutline=cutline)
            logger.info(community_bag)
            flag_2 = input("\nAre all motifs in the list? (yes/no/restart)")
            if flag_2 == "no":
                while flag_2 == "no":
                    add = input("Extend list or add in the end? (ext/end)")
                    if add == "ext":
                        motif_idx = int(input("Which motif number? "))
                        list_idx = int(
                            input(
                                "At which position in the list? (pythonic indexing starts at 0) "
                            )
                        )
                        community_bag[list_idx].append(motif_idx)
                    if add == "end":
                        motif_idx = int(input("Which motif number? "))
                        community_bag.append([motif_idx])
                        logger.info(community_bag)
                    flag_2 = input("\nAre all motifs in the list? (yes/no/restart)")
            if flag_2 == "restart":
                continue
            if flag_2 == "yes":
                communities_all = community_bag
                flag_1 = "yes"
    return communities_all, trees


def get_community_labels_2(
    files: List[str],
    labels: List[np.ndarray],
    communities_all: List[List[List[int]]],
) -> List[np.ndarray]:
    """
    Transform kmeans parameterized latent vector into communities.
    Get community labels for given files and community bags.

    Args:
        files (List[str]): List of file paths.
        labels (List[np.ndarray]): List of label arrays.
        communities_all (List[List[List[int]]]): List of community bags.

    Returns:
        List[np.ndarray]: List of community labels for each file.
    """
    community_labels_all = []
    for k, file in enumerate(files):
        num_comm = len(communities_all[k])
        community_labels = np.zeros_like(labels[k])
        for i in range(num_comm):
            clust = np.array(communities_all[k][i])
            for j in range(len(clust)):
                find_clust = np.where(labels[k] == clust[j])[0]
                community_labels[find_clust] = i
        community_labels = np.int64(scipy.signal.medfilt(community_labels, 7))
        community_labels_all.append(community_labels)
    return community_labels_all


def get_cohort_community_labels(
    labels: List[np.ndarray],
    communities_all: List[List[List[int]]],
) -> List[np.ndarray]:
    """
    Transform kmeans/hmm parameterized latent vector into communities.
    Get cohort community labels for given labels, and community bags.

    Parameters
    ----------
    labels : List[np.ndarray]
        List of label arrays.
    communities_all : List[List[List[int]]]
        List of community bags. Dimensions: (n_communities, n_clusters, n_motifs)

    Returns
    -------
    List[np.ndarray]
        List of cohort community labels for each file.
    """
    community_labels_all = []
    num_comm = len(communities_all)
    community_labels = np.zeros_like(labels)
    for i in range(num_comm):
        clust = np.asarray(communities_all[i])
        for j in range(len(clust)):
            find_clust = np.where(labels == clust[j])[0]
            community_labels[find_clust] = i
    community_labels = np.int64(scipy.signal.medfilt(community_labels, 7))
    community_labels_all.append(community_labels)
    return community_labels_all


@save_state(model=CommunityFunctionSchema)
def community(
    config: str,
    parametrization: Parametrizations,
    cohort: bool = True,
    cut_tree: int | None = None,
    save_logs: bool = False,
) -> None:
    """
    Perform community analysis.
    Fills in the values in the "community" key of the states.json file.
    Saves results files at:
    - project_name/
        - results/
            - community_cohort/
                - parametrization-n_cluster/
                    - cohort_community_bag.npy
                    - cohort_community_label.npy
                    - cohort_parametrization_label.npy
                    - cohort_transition_matrix.npy
                    - hierarchy.pkl

    Parameters
    ----------
    config : str
        Path to the configuration file.
    parametrization : Parametrizations
        Which parametrization to use. Options are 'hmm' or 'kmeans'.
    cohort : bool, optional
        Flag indicating cohort analysis. Defaults to True.
    cut_tree : int, optional
        Cut line for tree. Defaults to None.
    save_logs : bool, optional
        Flag indicating whether to save logs. Defaults to False.

    Returns
    -------
    None
    """
    try:
        config_file = Path(config).resolve()
        cfg = read_config(str(config_file))
        # parametrizations = cfg["parametrizations"]

        if save_logs:
            log_path = Path(cfg["project_path"]) / "logs" / "community.log"
            logger_config.add_file_handler(str(log_path))

        model_name = cfg["model_name"]
        n_cluster = cfg["n_cluster"]

        files = []
        if cfg["all_data"] == "No":
            all_flag = input(
                "Do you want to write motif videos for your entire dataset? \n"
                "If you only want to use a specific dataset type filename: \n"
                "yes/no/filename "
            )
        else:
            all_flag = "yes"

        if all_flag == "yes" or all_flag == "Yes":
            for file in cfg["video_sets"]:
                files.append(file)
        elif all_flag == "no" or all_flag == "No":
            for file in cfg["video_sets"]:
                use_file = input("Do you want to quantify " + file + "? yes/no: ")
                if use_file == "yes":
                    files.append(file)
                if use_file == "no":
                    continue
        # else:
        #     files.append(all_flag)

        if cohort:
            path_to_dir = Path(
                os.path.join(
                    cfg["project_path"],
                    "results",
                    "community_cohort",
                    parametrization + "-" + str(n_cluster),
                )
            )

            if not path_to_dir.exists():
                path_to_dir.mkdir(parents=True, exist_ok=True)

            labels = get_community_labels(
                cfg,
                files,
                model_name,
                n_cluster,
                parametrization,
            )
            augmented_labels, motifs_with_zero_counts = augment_motif_timeseries(
                labels=labels,
                n_clusters=n_cluster,
            )
            _, trans_mat_full, _ = get_adjacency_matrix(
                augmented_labels,
                n_cluster=n_cluster,
            )
            _, usage_full = np.unique(augmented_labels, return_counts=True)
            communities_all, trees = create_cohort_community_bag(
                labels,
                trans_mat_full,
                cut_tree,
                n_cluster,
            )
            community_labels_all = get_cohort_community_labels(
                files,
                labels,
                communities_all,
            )
            # community_bag = traverse_tree_cutline(trees, cutline=cut_tree)

            # convert communities_all to dtype object numpy array because communities_all is an inhomogeneous list
            communities_all = np.array(communities_all, dtype=object)

            np.save(
                os.path.join(path_to_dir, "cohort_transition_matrix" + ".npy"),
                trans_mat_full,
            )
            np.save(
                os.path.join(path_to_dir, "cohort_community_label" + ".npy"),
                community_labels_all,
            )
            np.save(
                os.path.join(
                    path_to_dir, "cohort_" + parametrization + "_label" + ".npy"
                ),
                labels,
            )
            np.save(
                os.path.join(path_to_dir, "cohort_community_bag" + ".npy"),
                communities_all,
            )

            with open(
                os.path.join(path_to_dir, "hierarchy" + ".pkl"), "wb"
            ) as fp:  # Pickling
                pickle.dump(communities_all, fp)

        # Work in Progress
        elif not cohort:
            labels = get_labels(cfg, files, model_name, n_cluster, parametrization)
            transition_matrices = compute_transition_matrices(files, labels, n_cluster)
            communities_all, trees = create_community_bag(
                files, labels, transition_matrices, cut_tree, n_cluster
            )
            community_labels_all = get_community_labels_2(files, labels, communities_all)

            for idx, file in enumerate(files):
                path_to_dir = os.path.join(
                    cfg["project_path"],
                    "results",
                    file,
                    model_name,
                    parametrization + "-" + str(n_cluster),
                    "",
                )
                if not os.path.exists(os.path.join(path_to_dir, "community")):
                    os.mkdir(os.path.join(path_to_dir, "community"))

                np.save(
                    os.path.join(
                        path_to_dir, "community", "transition_matrix_" + file + ".npy"
                    ),
                    transition_matrices[idx],
                )
                np.save(
                    os.path.join(
                        path_to_dir, "community", "community_label_" + file + ".npy"
                    ),
                    community_labels_all[idx],
                )

                with open(
                    os.path.join(path_to_dir, "community", "hierarchy" + file + ".pkl"),
                    "wb",
                ) as fp:  # Pickling
                    pickle.dump(communities_all[idx], fp)

    except Exception as e:
        logger.exception(f"Error in community_analysis: {e}")
        raise e
    finally:
        logger_config.remove_file_handler()
