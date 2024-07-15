---
sidebar_label: csv_to_npy
title: vame.util.csv_to_npy
---

Variational Animal Motion Embedding 1.0-alpha Toolbox
© K. Luxem &amp; P. Bauer, Department of Cellular Neuroscience
Leibniz Institute for Neurobiology, Magdeburg, Germany

https://github.com/LINCellularNeuroscience/VAME
Licensed under GNU General Public License v3.0

#### csv\_to\_numpy

```python
@save_state(model=CsvToNumpyFunctionSchema)
def csv_to_numpy(config: str, save_logs=False) -> None
```

Converts a pose-estimation.csv file to a numpy array. Note that this code is only useful for data which is a priori egocentric, i.e. head-fixed
or otherwise restrained animals.

**Raises**:

- `ValueError` - If the config.yaml file indicates that the data is not egocentric.

