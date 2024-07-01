---
sidebar_label: community_analysis
title: vame.analysis.community_analysis
---

Variational Animal Motion Embedding 1.0-alpha Toolbox
Â© K. Luxem &amp; P. Bauer, Department of Cellular Neuroscience
Leibniz Institute for Neurobiology, Magdeburg, Germany

https://github.com/LINCellularNeuroscience/VAME
Licensed under GNU General Public License v3.0

Updated 5/11/2022 with PH edits

#### get\_adjacency\_matrix

```python
def get_adjacency_matrix(
        labels: np.ndarray,
        n_cluster: int) -> Tuple[np.ndarray, np.ndarray, np.ndarray]
```

Calculate the adjacency matrix, transition matrix, and temporal matrix.

**Arguments**:

- `labels` _np.ndarray_ - Array of cluster labels.
- `n_cluster` _int_ - Number of clusters.
  

**Returns**:

  Tuple[np.ndarray, np.ndarray, np.ndarray]: Tuple containing adjacency matrix, transition matrix, and temporal matrix.

#### get\_transition\_matrix

```python
def get_transition_matrix(adjacency_matrix: np.ndarray,
                          threshold: float = 0.0) -> np.ndarray
```

Compute the transition matrix from the adjacency matrix.

**Arguments**:

- `adjacency_matrix` _np.ndarray_ - Adjacency matrix.
- `threshold` _float, optional_ - Threshold for considering transitions. Defaults to 0.0.
  

**Returns**:

- `np.ndarray` - Transition matrix.

#### consecutive

```python
def consecutive(data: np.ndarray, stepsize: int = 1) -> List[np.ndarray]
```

Identifies location of missing motif finding consecutive elements in an array and returns array(s) at the split.

**Arguments**:

- `data` _np.ndarray_ - Input array.
- `stepsize` _int, optional_ - Step size. Defaults to 1.
  

**Returns**:

- `List[np.ndarray]` - List of arrays containing consecutive elements.

#### find\_zero\_labels

```python
def find_zero_labels(motif_usage: Tuple[np.ndarray, np.ndarray],
                     n_cluster: int) -> np.ndarray
```

Find zero labels in motif usage and fill them.

**Arguments**:

- `motif_usage` _Tuple[np.ndarray, np.ndarray]_ - 2D list where the first index is a unique list of motif used and the second index is the motif usage in frames.
- `n_cluster` _int_ - Number of clusters.
  

**Returns**:

- `np.ndarray` - List of motif usage frames with 0&#x27;s where motifs weren&#x27;t used (array with zero labels filled).

#### augment\_motif\_timeseries

```python
def augment_motif_timeseries(label: np.ndarray,
                             n_cluster: int) -> Tuple[np.ndarray, np.ndarray]
```

Augment motif time series by filling zero motifs.

**Arguments**:

- `label` _np.ndarray_ - Original label array.
- `n_cluster` _int_ - Number of clusters.
  

**Returns**:

  Tuple[np.ndarray, np.ndarray]: Augmented label array and indices of zero motifs.

#### get\_labels

```python
def get_labels(cfg: dict, files: List[str], model_name: str, n_cluster: int,
               parametrization: str) -> List[np.ndarray]
```

Get cluster labels for given videos files.

**Arguments**:

- `cfg` _dict_ - Configuration parameters.
- `files` _List[str]_ - List of video files paths.
- `model_name` _str_ - Model name.
- `n_cluster` _int_ - Number of clusters.
- `parametrization` _str_ - parametrization.
  

**Returns**:

- `List[np.ndarray]` - List of cluster labels for each file.

#### get\_community\_label

```python
def get_community_label(cfg: dict, files: List[str], model_name: str,
                        n_cluster: int, parametrization: str) -> np.ndarray
```

Get community labels for given files.

**Arguments**:

- `cfg` _dict_ - Configuration parameters.
- `files` _List[str]_ - List of files paths.
- `model_name` _str_ - Model name.
- `n_cluster` _int_ - Number of clusters.
- `parametrization` _str_ - parametrization.
  

**Returns**:

- `np.ndarray` - Array of community labels.

#### compute\_transition\_matrices

```python
def compute_transition_matrices(files: List[str], labels: List[np.ndarray],
                                n_cluster: int) -> List[np.ndarray]
```

Compute transition matrices for given files and labels.

**Arguments**:

- `files` _List[str]_ - List of file paths.
- `labels` _List[np.ndarray]_ - List of label arrays.
- `n_cluster` _int_ - Number of clusters.
  

**Returns**:

- `List[np.ndarray]` - List of transition matrices.

#### create\_community\_bag

```python
def create_community_bag(files: List[str], labels: List[np.ndarray],
                         transition_matrices: List[np.ndarray], cut_tree: int,
                         n_cluster: int) -> Tuple
```

Create community bag for given files and labels (Markov chain to tree -&gt; community detection).

**Arguments**:

- `files` _List[str]_ - List of file paths.
- `labels` _List[np.ndarray]_ - List of label arrays.
- `transition_matrices` _List[np.ndarray]_ - List of transition matrices.
- `cut_tree` _int_ - Cut line for tree.
- `n_cluster` _int_ - Number of clusters.
  

**Returns**:

- `Tuple` - Tuple containing list of community bags and list of trees.

#### create\_cohort\_community\_bag

```python
def create_cohort_community_bag(files: List[str], labels: List[np.ndarray],
                                trans_mat_full: np.ndarray, cut_tree: int,
                                n_cluster: int) -> Tuple
```

Create cohort community bag for given labels, transition matrix, cut tree, and number of clusters.
(markov chain to tree -&gt; community detection)

**Arguments**:

- `files` _List[str]_ - List of files paths (deprecated).
- `labels` _List[np.ndarray]_ - List of label arrays.
- `trans_mat_full` _np.ndarray_ - Full transition matrix.
- `cut_tree` _int_ - Cut line for tree.
- `n_cluster` _int_ - Number of clusters.
  

**Returns**:

- `Tuple` - Tuple containing list of community bags and list of trees.

#### get\_community\_labels

```python
def get_community_labels(
        files: List[str], labels: List[np.ndarray],
        communities_all: List[List[List[int]]]) -> List[np.ndarray]
```

Transform kmeans parameterized latent vector into communities. Get community labels for given files and community bags.

**Arguments**:

- `files` _List[str]_ - List of file paths.
- `labels` _List[np.ndarray]_ - List of label arrays.
- `communities_all` _List[List[List[int]]]_ - List of community bags.
  

**Returns**:

- `List[np.ndarray]` - List of community labels for each file.

#### get\_cohort\_community\_labels

```python
def get_cohort_community_labels(
        files: List[str], labels: List[np.ndarray],
        communities_all: List[List[List[int]]]) -> List[np.ndarray]
```

Transform kmeans parameterized latent vector into communities. Get cohort community labels for given labels, and community bags.

**Arguments**:

- `files` _List[str], deprecated_ - List of file paths.
- `labels` _List[np.ndarray]_ - List of label arrays.
- `communities_all` _List[List[List[int]]]_ - List of community bags.
  

**Returns**:

- `List[np.ndarray]` - List of cohort community labels for each file.

#### umap\_embedding

```python
def umap_embedding(cfg: dict, file: str, model_name: str, n_cluster: int,
                   parametrization: str) -> np.ndarray
```

Perform UMAP embedding for given file and parameters.

**Arguments**:

- `cfg` _dict_ - Configuration parameters.
- `file` _str_ - File path.
- `model_name` _str_ - Model name.
- `n_cluster` _int_ - Number of clusters.
- `parametrization` _str_ - parametrization.
  

**Returns**:

- `np.ndarray` - UMAP embedding.

#### umap\_vis

```python
def umap_vis(cfg: dict, file: str, embed: np.ndarray,
             community_labels_all: np.ndarray, save_path: str | None) -> None
```

Create plotly visualizaton of UMAP embedding.

**Arguments**:

- `cfg` _dict_ - Configuration parameters.
- `file` _str_ - File path.
- `embed` _np.ndarray_ - UMAP embedding.
- `community_labels_all` _np.ndarray_ - Community labels.
- `save_path` - Path to save the plot. If None it will not save the plot.
  

**Returns**:

  None

#### community

```python
@save_state(model=CommunityFunctionSchema)
def community(config: str,
              cohort: bool = True,
              show_umap: bool = False,
              cut_tree: int | None = None,
              save_umap_figure: bool = True,
              save_logs: bool = False) -> None
```

Perform community analysis.

**Arguments**:

- `config` _str_ - Path to the configuration file.
- `cohort` _bool, optional_ - Flag indicating cohort analysis. Defaults to True.
- `show_umap` _bool, optional_ - Flag indicating weather to show UMAP visualization. Defaults to False.
- `cut_tree` _int, optional_ - Cut line for tree. Defaults to None.
  

**Returns**:

  None

