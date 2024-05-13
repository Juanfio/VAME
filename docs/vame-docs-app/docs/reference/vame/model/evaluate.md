---
sidebar_label: evaluate
title: vame.model.evaluate
---

Variational Animal Motion Embedding 0.1 Toolbox
© K. Luxem &amp; P. Bauer, Department of Cellular Neuroscience
Leibniz Institute for Neurobiology, Magdeburg, Germany

https://github.com/LINCellularNeuroscience/VAME
Licensed under GNU General Public License v3.0

#### evaluate\_model

```python
def evaluate_model(config, use_snapshots=False)
```

Evaluation of testset.

Parameters
----------
config : str
    Path to config file.
model_name : str
    name of model (same as in config.yaml)
use_snapshots : bool
    Whether to plot for all snapshots or only the best model.

