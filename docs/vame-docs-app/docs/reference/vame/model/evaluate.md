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
def evaluate_model(config: str, use_snapshots: bool = False) -> None
```

Evaluate the trained model.

**Arguments**:

- `config` _str_ - Path to config file.
- `use_snapshots` _bool, optional_ - Whether to plot for all snapshots or only the best model. Defaults to False.

