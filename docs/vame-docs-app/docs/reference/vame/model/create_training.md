---
sidebar_label: create_training
title: vame.model.create_training
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

Interpolates all NaN values in the given array.

**Arguments**:

- `arr` _np.ndarray_ - Input array containing NaN values.
  

**Returns**:

- `np.ndarray` - Array with NaN values replaced by interpolated values.

#### create\_trainset

```python
def create_trainset(config: str,
                    pose_ref_index: Optional[List] = None,
                    check_parameter: bool = False) -> None
```

Creates a training dataset for the VAME model.

**Arguments**:

- `config` _str_ - Path to the config file.
- `pose_ref_index` _Optional[List], optional_ - List of reference coordinate indices for alignment. Defaults to None.
- `check_parameter` _bool, optional_ - If True, the function will plot the z-scored data and the filtered data. Defaults to False.

