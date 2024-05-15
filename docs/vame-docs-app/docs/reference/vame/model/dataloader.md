---
sidebar_label: dataloader
title: vame.model.dataloader
---

Variational Animal Motion Embedding 0.1 Toolbox
© K. Luxem &amp; P. Bauer, Department of Cellular Neuroscience
Leibniz Institute for Neurobiology, Magdeburg, Germany

https://github.com/LINCellularNeuroscience/VAME
Licensed under GNU General Public License v3.0

## SEQUENCE\_DATASET Objects

```python
class SEQUENCE_DATASET(Dataset)
```

#### \_\_init\_\_

```python
def __init__(path_to_file: str, data: str, train: bool,
             temporal_window: int) -> None
```

Initialize the Sequence Dataset.

**Arguments**:

- `path_to_file` _str_ - Path to the dataset files.
- `data` _str_ - Name of the data file.
- `train` _bool_ - Flag indicating whether it&#x27;s training data.
- `temporal_window` _int_ - Size of the temporal window.
  

**Returns**:

  None

#### \_\_len\_\_

```python
def __len__() -> int
```

Return the number of data points.

**Returns**:

- `int` - Number of data points.

#### \_\_getitem\_\_

```python
def __getitem__(index: int) -> torch.Tensor
```

Get a normalized sequence at the specified index.

**Arguments**:

- `index` _int_ - Index of the item.
  

**Returns**:

- `torch.Tensor` - Normalized sequence data at the specified index.

