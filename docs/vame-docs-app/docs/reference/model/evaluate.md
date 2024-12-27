---
sidebar_label: evaluate
title: model.evaluate
---

#### logger\_config

#### logger

#### use\_gpu

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
Saves the plot to:
- project_name/
    - model/
        - evaluate/
            - Reconstruction_model_name.png

**Arguments**

* **filepath** (`str`): Path to save the plot.
* **test_loader** (`Data.DataLoader`): DataLoader for the test dataset.
* **seq_len_half** (`int`): Half of the temporal window size.
* **model** (`RNN_VAE`): Trained VAE model.
* **model_name** (`str`): Name of the model.
* **FUTURE_DECODER** (`bool`): Flag indicating whether the model has a future prediction decoder.
* **FUTURE_STEPS** (`int`): Number of future steps to predict.
* **suffix** (`str, optional`): Suffix for the saved plot filename. Defaults to None.

**Returns**

* `None`

#### plot\_loss

```python
def plot_loss(cfg: dict, filepath: str, model_name: str) -> None
```

Plot the losses of the trained model.
Saves the plot to:
- project_name/
    - model/
        - evaluate/
            - MSE-and-KL-Loss_model_name.png

**Arguments**

* **cfg** (`dict`): Configuration dictionary.
* **filepath** (`str`): Path to save the plot.
* **model_name** (`str`): Name of the model.

**Returns**

* `None`

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

**Arguments**

* **cfg** (`dict`): Configuration dictionary.
* **use_gpu** (`bool`): Flag indicating whether to use GPU for evaluation.
* **model_name** (`str`): Name of the model.
* **fixed** (`bool`): Flag indicating whether the data is fixed or not.
* **snapshot** (`str, optional`): Path to the model snapshot. Defaults to None.
* **suffix** (`str, optional`): Suffix for the saved plot filename. Defaults to None.

**Returns**

* `None`

#### evaluate\_model

```python
@save_state(model=EvaluateModelFunctionSchema)
def evaluate_model(config: dict,
                   use_snapshots: bool = False,
                   save_logs: bool = False) -> None
```

Evaluate the trained model.
Fills in the values in the &quot;evaluate_model&quot; key of the states.json file.
Saves the evaluation results to:
- project_name/
    - model/
        - evaluate/

**Arguments**

* **config** (`dict`): Configuration dictionary.
* **use_snapshots** (`bool, optional`): Whether to plot for all snapshots or only the best model. Defaults to False.
* **save_logs** (`bool, optional`): Flag indicating whether to save logs. Defaults to False.

**Returns**

* `None`

