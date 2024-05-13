---
sidebar_label: evaluate
title: vame.model.evaluate
---

Variational Animal Motion Embedding 0.1 Toolbox
© K. Luxem &amp; P. Bauer, Department of Cellular Neuroscience
Leibniz Institute for Neurobiology, Magdeburg, Germany

https://github.com/LINCellularNeuroscience/VAME
Licensed under GNU General Public License v3.0

#### plot\_reconstruction

```python
def plot_reconstruction(filepath: str,
                        test_loader: Data.DataLoader,
                        seq_len_half: int,
                        model: RNN_VAE,
                        model_name: str,
                        FUTURE_DECODER: bool,
                        FUTURE_STEPS: int,
                        suffix: Optional[str] = None) -> None
```

Plot the reconstruction and future prediction of the input sequence.

**Arguments**:

- `filepath` _str_ - Path to save the plot.
- `test_loader` _Data.DataLoader_ - DataLoader for the test dataset.
- `seq_len_half` _int_ - Half of the temporal window size.
- `model` _RNN_VAE_ - Trained VAE model.
- `model_name` _str_ - Name of the model.
- `FUTURE_DECODER` _bool_ - Flag indicating whether the model has a future prediction decoder.
- `FUTURE_STEPS` _int_ - Number of future steps to predict.
- `suffix` _Optional[str], optional_ - Suffix for the saved plot filename. Defaults to None.

#### plot\_loss

```python
def plot_loss(cfg: dict, filepath: str, model_name: str) -> None
```

Plot the losses of the trained model.

**Arguments**:

- `cfg` _dict_ - Configuration dictionary.
- `filepath` _str_ - Path to save the plot.
- `model_name` _str_ - Name of the model.

#### eval\_temporal

```python
def eval_temporal(cfg: dict,
                  use_gpu: bool,
                  model_name: str,
                  fixed: bool,
                  snapshot: Optional[str] = None,
                  suffix: Optional[str] = None) -> None
```

Evaluate the temporal aspects of the trained model.

**Arguments**:

- `cfg` _dict_ - Configuration dictionary.
- `use_gpu` _bool_ - Flag indicating whether to use GPU for evaluation.
- `model_name` _str_ - Name of the model.
- `fixed` _bool_ - Flag indicating whether the data is fixed or not.
- `snapshot` _Optional[str], optional_ - Path to the model snapshot. Defaults to None.
- `suffix` _Optional[str], optional_ - Suffix for the saved plot filename. Defaults to None.

#### evaluate\_model

```python
def evaluate_model(config: str, use_snapshots: bool = False) -> None
```

Evaluate the trained model.

**Arguments**:

- `config` _str_ - Path to config file.
- `use_snapshots` _bool, optional_ - Whether to plot for all snapshots or only the best model. Defaults to False.

