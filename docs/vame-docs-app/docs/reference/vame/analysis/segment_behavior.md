---
sidebar_label: segment_behavior
title: vame.analysis.segment_behavior
---

Variational Animal Motion Embedding 0.1 Toolbox
© K. Luxem &amp; P. Bauer, Department of Cellular Neuroscience
Leibniz Institute for Neurobiology, Magdeburg, Germany

https://github.com/LINCellularNeuroscience/VAME
Licensed under GNU General Public License v3.0

#### load\_data

```python
def load_data(PROJECT_PATH: str, file: str, data: str) -> np.ndarray
```

Load data for the given file.

**Arguments**:

- `PROJECT_PATH` _str_ - Path to the project directory.
- `file` _str_ - Name of the file.
- `data` _str_ - Data to load.
  

**Returns**:

- `np.ndarray` - Loaded data.

#### kmeans\_clustering

```python
def kmeans_clustering(context: np.ndarray, n_clusters: int) -> np.ndarray
```

Perform k-Means clustering.

**Arguments**:

- `context` _np.ndarray_ - Input data for clustering.
- `n_clusters` _int_ - Number of clusters.
  

**Returns**:

- `np.ndarray` - Cluster labels.

#### gmm\_clustering

```python
def gmm_clustering(context: np.ndarray, n_components: int) -> np.ndarray
```

Perform Gaussian Mixture Model (GMM) clustering.

**Arguments**:

- `context` _np.ndarray_ - Input data for clustering.
- `n_components` _int_ - Number of components.
  

**Returns**:

- `np.ndarray` - Cluster labels.

#### behavior\_segmentation

```python
def behavior_segmentation(config: str,
                          model_name: str = None,
                          cluster_method: str = 'kmeans',
                          n_cluster: List[int] = [30]) -> None
```

Perform behavior segmentation.

**Arguments**:

- `config` _str_ - Path to the configuration file.
- `model_name` _str, optional_ - Name of the model. Defaults to None.
- `cluster_method` _str, optional_ - Clustering method. Defaults to &#x27;kmeans&#x27;.
- `n_cluster` _List[int], optional_ - List of number of clusters. Defaults to [30].
  

**Returns**:

- `None` - Save data to the results directory.

#### temporal\_quant

```python
def temporal_quant(cfg: dict, model_name: str, files: List[str],
                   use_gpu: bool) -> Tuple
```

Quantify the temporal latent space.

**Arguments**:

- `cfg` _dict_ - Configuration dictionary.
- `model_name` _str_ - Name of the model.
- `files` _List[str]_ - List of file names.
- `use_gpu` _bool_ - Whether to use GPU.
  

**Returns**:

- `Tuple` - Tuple of latent space array and logger.

#### cluster\_latent\_space

```python
def cluster_latent_space(cfg: dict, files: List[str], z_data: np.ndarray,
                         z_logger: List[int], cluster_method: str,
                         n_cluster: List[int], model_name: str) -> None
```

Cluster the latent space.

**Arguments**:

- `cfg` _dict_ - Configuration dictionary.
- `files` _List[str]_ - List of file names.
- `z_data` _np.ndarray_ - Latent space data.
- `z_logger` _List[int]_ - Logger for the latent space.
- `cluster_method` _str_ - Clustering method.
- `n_cluster` _List[int]_ - List of number of clusters.
- `model_name` _str_ - Name of the model.
  

**Returns**:

  None -&gt; Save data to the results directory.

