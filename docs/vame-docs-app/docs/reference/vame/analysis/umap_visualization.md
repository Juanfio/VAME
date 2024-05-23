---
sidebar_label: umap_visualization
title: vame.analysis.umap_visualization
---

Variational Animal Motion Embedding 1.0-alpha Toolbox
© K. Luxem &amp; P. Bauer, Department of Cellular Neuroscience
Leibniz Institute for Neurobiology, Magdeburg, Germany

https://github.com/LINCellularNeuroscience/VAME
Licensed under GNU General Public License v3.0

#### umap\_vis

```python
def umap_vis(file: str, embed: np.ndarray, num_points: int) -> None
```

Visualize UMAP embedding without labels.

**Arguments**:

- `file` _str_ - Name of the file (deprecated).
- `embed` _np.ndarray_ - UMAP embedding.
- `num_points` _int_ - Number of data points to visualize.
  

**Returns**:

  None - Plot Visualization of UMAP embedding.

#### umap\_label\_vis

```python
def umap_label_vis(file: str, embed: np.ndarray, label: np.ndarray,
                   n_cluster: int, num_points: int) -> None
```

Visualize UMAP embedding with motif labels.

**Arguments**:

- `file` _str_ - Name of the file (deprecated).
- `embed` _np.ndarray_ - UMAP embedding.
- `label` _np.ndarray_ - Motif labels.
- `n_cluster` _int_ - Number of clusters.
- `num_points` _int_ - Number of data points to visualize.
  

**Returns**:

  fig - Plot figure of UMAP visualization embedding with motif labels.

#### umap\_vis\_comm

```python
def umap_vis_comm(file: str, embed: np.ndarray, community_label: np.ndarray,
                  num_points: int) -> None
```

Visualize UMAP embedding with community labels.

**Arguments**:

- `file` _str_ - Name of the file (deprecated).
- `embed` _np.ndarray_ - UMAP embedding.
- `community_label` _np.ndarray_ - Community labels.
- `num_points` _int_ - Number of data points to visualize.
  

**Returns**:

  fig - Plot figure of UMAP visualization embedding with community labels.

#### visualization

```python
def visualization(config: Union[str, Path],
                  label: Optional[str] = None) -> None
```

Visualize UMAP embeddings based on configuration settings.

**Arguments**:

- `config` _Union[str, Path]_ - Path to the configuration file.
- `label` _str, optional_ - Type of labels to visualize. Default is None.
  

**Returns**:

  None - Plot Visualization of UMAP embeddings.

