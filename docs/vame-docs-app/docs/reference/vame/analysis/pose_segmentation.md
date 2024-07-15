---
sidebar_label: pose_segmentation
title: vame.analysis.pose_segmentation
---

Variational Animal Motion Embedding 1.0-alpha Toolbox
© K. Luxem &amp; P. Bauer, Department of Cellular Neuroscience
Leibniz Institute for Neurobiology, Magdeburg, Germany

https://github.com/LINCellularNeuroscience/VAME
Licensed under GNU General Public License v3.0

#### embedd\_latent\_vectors

```python
def embedd_latent_vectors(
        cfg: dict, files: List[str], model: RNN_VAE, fixed: bool,
        tqdm_stream: TqdmToLogger | None) -> List[np.ndarray]
```

Embed latent vectors for the given files using the VAME model.

**Arguments**:

- `cfg` _dict_ - Configuration dictionary.
- `files` _List[str]_ - List of files names.
- `model` _RNN_VAE_ - VAME model.
- `fixed` _bool_ - Whether the model is fixed.
- `tqdm_stream` _TqdmToLogger_ - TQDM Stream to redirect the tqdm output to logger.
  

**Returns**:

- `List[np.ndarray]` - List of latent vectors for each file.

#### get\_motif\_usage

```python
def get_motif_usage(label: np.ndarray) -> np.ndarray
```

Compute motif usage from the label array.

**Arguments**:

- `label` _np.ndarray_ - Label array.
  

**Returns**:

- `np.ndarray` - Array of motif usage counts.

#### same\_parametrization

```python
def same_parametrization(
    cfg: dict, files: List[str], latent_vector_files: List[np.ndarray],
    states: int, parametrization: str
) -> Tuple[List[np.ndarray], List[np.ndarray], List[np.ndarray]]
```

Apply the same parametrization to all animals.

**Arguments**:

- `cfg` _dict_ - Configuration dictionary.
- `files` _List[str]_ - List of file names.
- `latent_vector_files` _List[np.ndarray]_ - List of latent vector arrays.
- `states` _int_ - Number of states.
- `parametrization` _str_ - parametrization method.
  

**Returns**:

- `Tuple` - Tuple of labels, cluster centers, and motif usages.

#### individual\_parametrization

```python
def individual_parametrization(cfg: dict, files: List[str],
                               latent_vector_files: List[np.ndarray],
                               cluster: int) -> Tuple
```

Apply individual parametrization to each animal.

**Arguments**:

- `cfg` _dict_ - Configuration dictionary.
- `files` _List[str]_ - List of file names.
- `latent_vector_files` _List[np.ndarray]_ - List of latent vector arrays.
- `cluster` _int_ - Number of clusters.
  

**Returns**:

- `Tuple` - Tuple of labels, cluster centers, and motif usages.

#### pose\_segmentation

```python
@save_state(model=PoseSegmentationFunctionSchema)
def pose_segmentation(config: str, save_logs: bool = False) -> None
```

Perform pose segmentation using the VAME model.

**Arguments**:

- `config` _str_ - Path to the configuration file.
  

**Returns**:

  None

