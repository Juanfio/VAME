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
import umap
import scipy
import pickle
import numpy as np
from pathlib import Path
import matplotlib.pyplot as plt
import networkx as nx

from vame.util.auxiliary import read_config
from vame.analysis.tree_hierarchy import graph_to_tree, draw_tree, traverse_tree_cutline


def get_adjacency_matrix(labels, n_cluster):
    temp_matrix = np.zeros((n_cluster,n_cluster), dtype=np.float64)
    adjacency_matrix = np.zeros((n_cluster,n_cluster), dtype=np.float64)
    cntMat = np.zeros((n_cluster))
    steps = len(labels)
    
    for i in range(n_cluster):
        for k in range(steps-1):
            idx = labels[k]
            if idx == i:
                idx2 = labels[k+1]
                if idx == idx2:
                    continue
                else:
                    cntMat[idx2] = cntMat[idx2] +1
        temp_matrix[i] = cntMat
        cntMat = np.zeros((n_cluster))
    
    for k in range(steps-1):
        idx = labels[k]
        idx2 = labels[k+1]
        if idx == idx2:
            continue
        adjacency_matrix[idx,idx2] = 1
        adjacency_matrix[idx2,idx] = 1
        
    transition_matrix = get_transition_matrix(temp_matrix)
    
    return adjacency_matrix, transition_matrix, temp_matrix


def get_transition_matrix(adjacency_matrix, threshold = 0.0):
    row_sum=adjacency_matrix.sum(axis=1)
    transition_matrix = adjacency_matrix/row_sum[:,np.newaxis]
    transition_matrix[transition_matrix <= threshold] = 0
    if np.any(np.isnan(transition_matrix)):
            transition_matrix=np.nan_to_num(transition_matrix)
    return transition_matrix

def consecutive(data, stepsize=1):
    data = data[:]
    return np.split(data, np.where(np.diff(data) != stepsize)[0]+1)

# def find_zero_labels(motif_usage, n_cluster):
#     cons = consecutive(motif_usage[0])
#     if len(cons) != 1:
#         usage_list = list(motif_usage[1])
        
#         if 0 not in cons[0]:
#             first_id = cons[0][0]
#             for k in range(first_id):
#                 usage_list.insert(k,0)
        
#         for i in range(len(cons)-1):
#             a = cons[i+1][0]
#             b = cons[i][-1]
#             d = (a-b)-1
#             for j in range(1,d+1):
#                 index = cons[i][-1]+j
#                 usage_list.insert(index,0)
#         if len(usage_list) < n_cluster:
#             usage_list.insert(n_cluster,0)
            
#     elif cons[0][-1] != n_cluster:
#         # diff = n_cluster - cons[0][-1]
#         usage_list = list(motif_usage[1])
#         usage_list.insert(n_cluster-1,0)
    
#     if len(usage_list) < n_cluster:
#         for k in range(len(usage_list), n_cluster):
#             usage_list.insert(k,0)
            
#     usage = np.array(usage_list)
#     return usage

# New find_zero_labels 8/8/2022 KL
def find_zero_labels(motif_usage, n_cluster):
    cons = consecutive(motif_usage[0])
    usage_list = list(motif_usage[1])
    if len(cons) != 1:
        print("Go")
        if 0 not in cons[0]:
            first_id = cons[0][0]
            for k in range(first_id):
                usage_list.insert(k,0)
        
        for i in range(len(cons)-1):
            a = cons[i+1][0]
            b = cons[i][-1]
            d = (a-b)-1
            for j in range(1,d+1):
                index = cons[i][-1]+j
                usage_list.insert(index,0)
        if len(usage_list) < n_cluster:
            usage_list.insert(n_cluster,0)
            
    elif len(cons[0]) != n_cluster:
        # diff = n_cluster - cons[0][-1]
        usage_list = list(motif_usage[1])
        usage_list.insert(n_cluster-1,0)
    
    if len(usage_list) < n_cluster:
        for k in range(len(usage_list), n_cluster):
            usage_list.insert(k,0)
            
    usage = np.array(usage_list)
    return usage
    
def augment_motif_timeseries(label, n_cluster):
    augmented_label = label.copy()
    
    motif_usage = np.unique(augmented_label, return_counts=True)
    augmented_usage = find_zero_labels(motif_usage, n_cluster)
    zero_motifs = np.where(augmented_usage == 0)[0]
    print("Zero motifs: ", zero_motifs)
    
    idx = -1
    for i in range(len(zero_motifs)):
        for j in range(20):
            x = np.random.choice(zero_motifs)
            augmented_label[idx] = x
            idx -= 1
        
    return augmented_label, zero_motifs

def get_labels(cfg, files, model_name, n_cluster):
    shapes = []
    for file in files:
        path_to_file = os.path.join(cfg['project_path'],"results",file,'VAME', 'kmeans-'+str(n_cluster),"")
        label = np.load(os.path.join(path_to_file,str(n_cluster)+'_km_label_'+file+'.npy'))
        shape = len(label)
        shapes.append(shape)
    shapes = np.array(shapes)
    min_frames = min(shapes)
    
    labels = []
    for file in files:
        path_to_file = os.path.join(cfg['project_path'],"results",file,model_name,'kmeans-'+str(n_cluster),"")
        label = np.load(os.path.join(path_to_file,str(n_cluster)+'_km_label_'+file+'.npy'))
        label = label[:min_frames]
        augmented_label,zero_motifs = augment_motif_timeseries(label, n_cluster)
        labels.append(augmented_label)
    return labels

def get_community_label(cfg, files, model_name, n_cluster):
    shapes = []
    for file in files:
        path_to_file = os.path.join(cfg['project_path'],"results",file,'VAME', 'kmeans-'+str(n_cluster),"")
        label = np.load(os.path.join(path_to_file,str(n_cluster)+'_km_label_'+file+'.npy'))
        shape = len(label)
        shapes.append(shape)
    shapes = np.array(shapes)
    min_frames = min(shapes)
    
    community_label = []
    for file in files:
        path_to_file = os.path.join(cfg['project_path'],"results",file,'VAME', 'kmeans-'+str(n_cluster),"")
        label = np.load(os.path.join(path_to_file,str(n_cluster)+'_km_label_'+file+'.npy'))[:min_frames]
        community_label.extend(label)
    community_label = np.array(community_label)
    return community_label

def compute_transition_matrices(files, labels, n_cluster):
    transition_matrices = []
    for i, file in enumerate(files):
        adj, trans, mat = get_adjacency_matrix(labels[i], n_cluster)
        transition_matrices.append(trans)    
    return transition_matrices

def create_community_bag(files, labels, transition_matrices, cut_tree, n_cluster):
    # markov chain to tree -> community detection
    trees = []
    communities_all = []
    for i, file in enumerate(files):
        _, usage = np.unique(labels[i], return_counts=True)
        T = graph_to_tree(usage, transition_matrices[i], n_cluster, merge_sel=1) 
        trees.append(T)
        
        if cut_tree != None:
            community_bag =  traverse_tree_cutline(T,cutline=cut_tree)
            communities_all.append(community_bag)
            draw_tree(T,usage)
        else:
            draw_tree(T,usage)
            plt.pause(0.5)
            flag_1 = 'no'
            while flag_1 == 'no':
                cutline = int(input("Where do you want to cut the Tree? 0/1/2/3/..."))
                community_bag =  traverse_tree_cutline(T,cutline=cutline)
                print(community_bag)
                flag_2 = input('\nAre all motifs in the list? (yes/no/restart)')
                if flag_2 == 'no':
                    while flag_2 == 'no':
                        add = input('Extend list or add in the end? (ext/end)')
                        if add == "ext":
                            motif_idx = int(input('Which motif number? '))
                            list_idx = int(input('At which position in the list? (pythonic indexing starts at 0) '))
                            community_bag[list_idx].append(motif_idx)
                        if add == "end":
                            motif_idx = int(input('Which motif number? '))
                            community_bag.append([motif_idx])
                        print(community_bag)
                        flag_2 = input('\nAre all motifs in the list? (yes/no/restart)')
                if flag_2 == "restart":
                    continue
                if flag_2 == 'yes':
                    communities_all.append(community_bag)
                    flag_1 = 'yes'
            
    return communities_all, trees

def create_cohort_community_bag(files, labels, trans_mat_full, cut_tree, n_cluster):
    # markov chain to tree -> community detection
    trees = []
    communities_all = []
    #for i, file in enumerate(files):
    _, usage_full = np.unique(labels, return_counts=True)
    T = graph_to_tree(usage_full, trans_mat_full, n_cluster, merge_sel=1) 
    # nx.write_gpickle(T, 'T.gpickle')
    trees.append(T)
    
    if cut_tree != None:
        community_bag =  traverse_tree_cutline(T,cutline=cut_tree)
        communities_all.append(community_bag)
        draw_tree(T,usage_full)
    else:
        draw_tree(T,usage_full)
        plt.pause(0.5)
        flag_1 = 'no'
        while flag_1 == 'no':
            cutline = int(input("Where do you want to cut the Tree? 0/1/2/3/..."))
            community_bag =  traverse_tree_cutline(T,cutline=cutline)
            print(community_bag)
            flag_2 = input('\nAre all motifs in the list? (yes/no/restart)')
            if flag_2 == 'no':
                while flag_2 == 'no':
                    add = input('Extend list or add in the end? (ext/end)')
                    if add == "ext":
                        motif_idx = int(input('Which motif number? '))
                        list_idx = int(input('At which position in the list? (pythonic indexing starts at 0) '))
                        community_bag[list_idx].append(motif_idx)
                    if add == "end":
                        motif_idx = int(input('Which motif number? '))
                        community_bag.append([motif_idx])
                        print(community_bag)
                    flag_2 = input('\nAre all motifs in the list? (yes/no/restart)')
            if flag_2 == "restart":
                continue
            if flag_2 == 'yes':
                communities_all=community_bag
                flag_1 = 'yes'
    return communities_all, trees

def get_community_labels(files, labels, communities_all):
    # transform kmeans parameterized latent vector into communities
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

def get_cohort_community_labels(files, labels, communities_all):
    # transform kmeans parameterized latent vector into communities
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


def umap_embedding(cfg, file, model_name, n_cluster):
    reducer = umap.UMAP(n_components=2, min_dist=cfg['min_dist'], n_neighbors=cfg['n_neighbors'], 
                        random_state=cfg['random_state']) 
    
    print("UMAP calculation for file %s" %file)
    
    folder = os.path.join(cfg['project_path'],"results",file,model_name,'kmeans-'+str(n_cluster),"")
    latent_vector = np.load(os.path.join(folder,'latent_vector_'+file+'.npy'))
    
    num_points = cfg['num_points']
    if num_points > latent_vector.shape[0]:
        num_points = latent_vector.shape[0]
    print("Embedding %d data points.." %num_points)
    
    embed = reducer.fit_transform(latent_vector[:num_points,:])
    
    return embed


def umap_vis(cfg, file, embed, community_labels_all):
    num_points = cfg['num_points']
    community_labels_all = np.asarray(community_labels_all)
    if num_points > community_labels_all.shape[0]:
        num_points = community_labels_all.shape[0]
    print("Embedding %d data points.." %num_points)
    
    num = np.unique(community_labels_all)
    
    fig = plt.figure(1)
    plt.scatter(embed[:,0], embed[:,1],  c=community_labels_all[0, :num_points], cmap='Spectral', s=2, alpha=1)
    plt.colorbar(boundaries=np.arange(np.max(num)+2)-0.5).set_ticks(np.arange(np.max(num)+1))
    plt.gca().set_aspect('equal', 'datalim')
    plt.grid(False)


def community(config, cohort=True, show_umap=False, cut_tree=None):
    config_file = Path(config).resolve()
    cfg = read_config(config_file)
    model_name = cfg['model_name']
    n_cluster = cfg['n_cluster']
    
    files = []
    if cfg['all_data'] == 'No':
        all_flag = input("Do you want to write motif videos for your entire dataset? \n"
                     "If you only want to use a specific dataset type filename: \n"
                     "yes/no/filename ")
    else:
        all_flag = 'yes'

    if all_flag == 'yes' or all_flag == 'Yes':
        for file in cfg['video_sets']:
            files.append(file)

    elif all_flag == 'no' or all_flag == 'No':
        for file in cfg['video_sets']:
            use_file = input("Do you want to quantify " + file + "? yes/no: ")
            if use_file == 'yes':
                files.append(file)
            if use_file == 'no':
                continue
    else:
        files.append(all_flag)
    
    if cohort==True:
        labels = get_community_label(cfg, files, model_name, n_cluster)
        augmented_label, zero_motifs = augment_motif_timeseries(labels, n_cluster)
        _, trans_mat_full,_ = get_adjacency_matrix(augmented_label, n_cluster=n_cluster)
        _, usage_full = np.unique(augmented_label, return_counts=True)
        communities_all, trees = create_cohort_community_bag(files, labels, trans_mat_full, cut_tree, n_cluster)
        community_labels_all = get_cohort_community_labels(files, labels, communities_all)
        # community_bag = traverse_tree_cutline(trees, cutline=cut_tree)
        
        np.save(os.path.join(cfg['project_path'],"cohort_transition_matrix"+'.npy'),trans_mat_full)
        np.save(os.path.join(cfg['project_path'],"cohort_community_label"+'.npy'), community_labels_all)
        np.save(os.path.join(cfg['project_path'],"cohort_km_label"+'.npy'), labels)
        np.save(os.path.join(cfg['project_path'],"cohort_community_bag"+'.npy'), communities_all)
        
        with open(os.path.join(cfg['project_path'],"hierarchy"+".pkl"), "wb") as fp:   #Pickling
            pickle.dump(communities_all, fp)
    
        if show_umap == True:
            embed = umap_embedding(cfg, files, model_name, n_cluster)
            umap_vis(cfg, files, embed, community_labels_all)
    
    # Work in Progress
    elif cohort == False:
        labels = get_labels(cfg, files, model_name, n_cluster)
        transition_matrices = compute_transition_matrices(files, labels, n_cluster)
        communities_all, trees = create_community_bag(files, labels, transition_matrices, cut_tree, n_cluster)
        community_labels_all = get_community_labels(files, labels, communities_all)

        for idx, file in enumerate(files):
            path_to_file=os.path.join(cfg['project_path'],"results",file,model_name,'kmeans-'+str(n_cluster),"")
            if not os.path.exists(os.path.join(path_to_file,"community")):
                os.mkdir(os.path.join(path_to_file,"community"))
            
            np.save(os.path.join(path_to_file,"community","transition_matrix_"+file+'.npy'),transition_matrices[idx])
            np.save(os.path.join(path_to_file,"community","community_label_"+file+'.npy'), community_labels_all[idx])
            
            with open(os.path.join(path_to_file,"community","hierarchy"+file+".pkl"), "wb") as fp:   #Pickling
                pickle.dump(communities_all[idx], fp)
        
            if show_umap == True:
                embed = umap_embedding(cfg, file, model_name, n_cluster)
                umap_vis(cfg, files, embed, community_labels_all[idx])






