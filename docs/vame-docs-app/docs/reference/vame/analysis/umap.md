---
sidebar_label: umap
title: vame.analysis.umap
---

Variational Animal Motion Embedding 1.0-alpha Toolbox
© K. Luxem &amp; P. Bauer, Department of Cellular Neuroscience
Leibniz Institute for Neurobiology, Magdeburg, Germany

https://github.com/LINCellularNeuroscience/VAME
Licensed under GNU General Public License v3.0

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

#### umap\_vis\_community\_labels

```python
def umap_vis_community_labels(cfg: dict, embed: np.ndarray,
                              community_labels_all: np.ndarray,
                              save_path: str | None) -> None
```

Create plotly visualizaton of UMAP embedding with community labels.

**Arguments**:

- `cfg` _dict_ - Configuration parameters.
- `embed` _np.ndarray_ - UMAP embedding.
- `community_labels_all` _np.ndarray_ - Community labels.
- `save_path` - Path to save the plot. If None it will not save the plot.
  

**Returns**:

  None

#### umap\_vis

```python
def umap_vis(embed: np.ndarray, num_points: int) -> None
```

Visualize UMAP embedding without labels.

**Arguments**:

- `embed` _np.ndarray_ - UMAP embedding.
- `num_points` _int_ - Number of data points to visualize.
  

**Returns**:

  None - Plot Visualization of UMAP embedding.

#### umap\_label\_vis

```python
def umap_label_vis(embed: np.ndarray, label: np.ndarray, n_cluster: int,
                   num_points: int) -> None
```

Visualize UMAP embedding with motif labels.

**Arguments**:

- `embed` _np.ndarray_ - UMAP embedding.
- `label` _np.ndarray_ - Motif labels.
- `n_cluster` _int_ - Number of clusters.
- `num_points` _int_ - Number of data points to visualize.
  

**Returns**:

  fig - Plot figure of UMAP visualization embedding with motif labels.

#### umap\_vis\_comm

```python
def umap_vis_comm(embed: np.ndarray, community_label: np.ndarray,
                  num_points: int) -> None
```

Visualize UMAP embedding with community labels.

**Arguments**:

- `embed` _np.ndarray_ - UMAP embedding.
- `community_label` _np.ndarray_ - Community labels.
- `num_points` _int_ - Number of data points to visualize.
  

**Returns**:

  fig - Plot figure of UMAP visualization embedding with community labels.

#### visualization

```python
@save_state(model=VisualizationFunctionSchema)
def visualization(config: Union[str, Path],
                  label: Optional[str] = None,
                  save_logs: bool = False) -> None
```

Visualize UMAP embeddings based on configuration settings.

**Arguments**:

- `config` _Union[str, Path]_ - Path to the configuration file.
- `label` _str, optional_ - Type of labels to visualize. Default is None.
  

**Returns**:

  None - Plot Visualization of UMAP embeddings.

