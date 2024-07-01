---
sidebar_label: generative_functions
title: vame.analysis.generative_functions
---

Variational Animal Motion Embedding 1.0-alpha Toolbox
© K. Luxem &amp; P. Bauer, Department of Cellular Neuroscience
Leibniz Institute for Neurobiology, Magdeburg, Germany

https://github.com/LINCellularNeuroscience/VAME
Licensed under GNU General Public License v3.0

#### random\_generative\_samples\_motif

```python
def random_generative_samples_motif(cfg: dict, model: torch.nn.Module,
                                    latent_vector: np.ndarray,
                                    labels: np.ndarray,
                                    n_cluster: int) -> None
```

Generate random samples for motifs.

**Arguments**:

- `cfg` _dict_ - Configuration dictionary.
- `model` _torch.nn.Module_ - PyTorch model.
- `latent_vector` _np.ndarray_ - Latent vectors.
- `labels` _np.ndarray_ - Labels.
- `n_cluster` _int_ - Number of clusters.
  

**Returns**:

- `None` - Plot of generated samples.

#### random\_generative\_samples

```python
def random_generative_samples(cfg: dict, model: torch.nn.Module,
                              latent_vector: np.ndarray) -> None
```

Generate random generative samples.

**Arguments**:

- `cfg` _dict_ - Configuration dictionary.
- `model` _torch.nn.Module_ - PyTorch model.
- `latent_vector` _np.ndarray_ - Latent vectors.
  

**Returns**:

  None

#### random\_reconstruction\_samples

```python
def random_reconstruction_samples(cfg: dict, model: torch.nn.Module,
                                  latent_vector: np.ndarray) -> None
```

Generate random reconstruction samples.

**Arguments**:

- `cfg` _dict_ - Configuration dictionary.
- `model` _torch.nn.Module_ - PyTorch model to use.
- `latent_vector` _np.ndarray_ - Latent vectors.
  

**Returns**:

  None

#### visualize\_cluster\_center

```python
def visualize_cluster_center(cfg: dict, model: torch.nn.Module,
                             cluster_center: np.ndarray) -> None
```

Visualize cluster centers.

**Arguments**:

- `cfg` _dict_ - Configuration dictionary.
- `model` _torch.nn.Module_ - PyTorch model.
- `cluster_center` _np.ndarray_ - Cluster centers.
  

**Returns**:

  None

#### load\_model

```python
def load_model(cfg: dict, model_name: str) -> torch.nn.Module
```

Load PyTorch model.

**Arguments**:

- `cfg` _dict_ - Configuration dictionary.
- `model_name` _str_ - Name of the model.
  

**Returns**:

- `torch.nn.Module` - Loaded PyTorch model.

#### generative\_model

```python
@save_state(model=GenerativeModelFunctionSchema)
def generative_model(config: str,
                     mode: str = "sampling",
                     save_logs: bool = False) -> plt.Figure
```

Generative model.

**Arguments**:

- `config` _str_ - Path to the configuration file.
- `mode` _str, optional_ - Mode for generating samples. Defaults to &quot;sampling&quot;.
  

**Returns**:

- `plt.Figure` - Plot of generated samples.

