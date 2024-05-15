---
sidebar_label: csv_to_npy
title: vame.util.csv_to_npy
---

Variational Animal Motion Embedding 1.0-alpha Toolbox
© K. Luxem &amp; P. Bauer, Department of Cellular Neuroscience
Leibniz Institute for Neurobiology, Magdeburg, Germany

https://github.com/LINCellularNeuroscience/VAME
Licensed under GNU General Public License v3.0

#### nan\_helper

```python
def nan_helper(y: np.ndarray) -> Tuple
```

Identifies indices of NaN values in an array and provides a function to convert them to non-NaN indices.

**Arguments**:

- `y` _np.ndarray_ - Input array containing NaN values.
  

**Returns**:

  Tuple[np.ndarray, Union[np.ndarray, None]]: A tuple containing two elements:
  - An array of boolean values indicating the positions of NaN values.
  - A lambda function to convert NaN indices to non-NaN indices.

#### interpol

```python
def interpol(arr: np.ndarray) -> np.ndarray
```

Interpolates all NaN values of a given array.

**Arguments**:

- `arr` _np.ndarray_ - A numpy array with NaN values.
  

**Returns**:

- `np.ndarray` - A numpy array with interpolated NaN values.

#### csv\_to\_numpy

```python
def csv_to_numpy(config: str) -> None
```

Converts a pose-estimation.csv file to a numpy array. Note that this code is only useful for data which is a priori egocentric, i.e. head-fixed
or otherwise restrained animals.

**Raises**:

- `ValueError` - If the config.yaml file indicates that the data is not egocentric.

