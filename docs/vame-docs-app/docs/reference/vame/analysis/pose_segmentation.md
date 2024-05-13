---
sidebar_label: pose_segmentation
title: vame.analysis.pose_segmentation
---

Variational Animal Motion Embedding 1.0-alpha Toolbox
© K. Luxem &amp; P. Bauer, Department of Cellular Neuroscience
Leibniz Institute for Neurobiology, Magdeburg, Germany

https://github.com/LINCellularNeuroscience/VAME
Licensed under GNU General Public License v3.0

#### load\_model

```python
def load_model(cfg: dict, model_name: str, fixed: bool) -> RNN_VAE
```

Load the VAME model.

**Arguments**:

- `cfg` _dict_ - Configuration dictionary.
- `model_name` _str_ - Name of the model.
- `fixed` _bool_ - Fixed or variable length sequences.
  

**Returns**:

- `RNN_VAE` - Loaded VAME model.

#### embedd\_latent\_vectors

```python
def embedd_latent_vectors(cfg: dict, files: List[str], model: RNN_VAE,
                          fixed: bool) -> List[np.ndarray]
```

Embed latent vectors for the given files using the VAME model.

**Arguments**:

- `cfg` _dict_ - Configuration dictionary.
- `files` _List[str]_ - List of files names.
- `model` _RNN_VAE_ - VAME model.
- `fixed` _bool_ - Whether the model is fixed.
  

**Returns**:

- `List[np.ndarray]` - List of latent vectors for each file.

#### consecutive

```python
def consecutive(data: np.ndarray, stepsize: int = 1) -> List[np.ndarray]
```

Find consecutive sequences in the data array.

**Arguments**:

- `data` _np.ndarray_ - Input array.
- `stepsize` _int, optional_ - Step size. Defaults to 1.
  

**Returns**:

- `List[np.ndarray]` - List of consecutive sequences.

#### get\_motif\_usage

```python
def get_motif_usage(label: np.ndarray) -> np.ndarray
```

Compute motif usage from the label array.

**Arguments**:

- `label` _np.ndarray_ - Label array.
  

**Returns**:

- `np.ndarray` - Array of motif usage counts.

#### same\_parameterization

```python
def same_parameterization(
    cfg: dict, files: List[str], latent_vector_files: List[np.ndarray],
    states: int, parameterization: str
) -> Tuple[List[np.ndarray], List[np.ndarray], List[np.ndarray]]
```

Apply the same parameterization to all animals.

**Arguments**:

- `cfg` _dict_ - Configuration dictionary.
- `files` _List[str]_ - List of file names.
- `latent_vector_files` _List[np.ndarray]_ - List of latent vector arrays.
- `states` _int_ - Number of states.
- `parameterization` _str_ - Parameterization method.
  

**Returns**:

- `Tuple` - Tuple of labels, cluster centers, and motif usages.

#### individual\_parameterization

```python
def individual_parameterization(cfg: dict, files: List[str],
                                latent_vector_files: List[np.ndarray],
                                cluster: int) -> Tuple
```

Apply individual parameterization to each animal.

**Arguments**:

- `cfg` _dict_ - Configuration dictionary.
- `files` _List[str]_ - List of file names.
- `latent_vector_files` _List[np.ndarray]_ - List of latent vector arrays.
- `cluster` _int_ - Number of clusters.
  

**Returns**:

- `Tuple` - Tuple of labels, cluster centers, and motif usages.

#### pose\_segmentation

```python
def pose_segmentation(config: str) -> None
```

Perform pose segmentation using the VAME model.

**Arguments**:

- `config` _str_ - Path to the configuration file.
  

**Returns**:

  None
