---
sidebar_label: create_training
title: vame.model.create_training
---

Variational Animal Motion Embedding 1.0-alpha Toolbox
© K. Luxem &amp; P. Bauer, Department of Cellular Neuroscience
Leibniz Institute for Neurobiology, Magdeburg, Germany

https://github.com/LINCellularNeuroscience/VAME
Licensed under GNU General Public License v3.0

#### plot\_check\_parameter

```python
def plot_check_parameter(cfg: dict, iqr_val: float, num_frames: int,
                         X_true: List[np.ndarray], X_med: np.ndarray) -> None
```

Plot the check parameter - z-scored data and the filtered data.

**Arguments**:

- `cfg` _dict_ - Configuration parameters.
- `iqr_val` _float_ - IQR value.
- `num_frames` _int_ - Number of frames.
- `X_true` _List[np.ndarray]_ - List of true data.
- `X_med` _np.ndarray_ - Filtered data.
- `anchor_1` _int_ - Index of the first anchor point (deprecated).
- `anchor_2` _int_ - Index of the second anchor point (deprecated).
  

**Returns**:

  None - Plot the z-scored data and the filtered data.

#### traindata\_aligned

```python
def traindata_aligned(cfg: dict, files: List[str], testfraction: float,
                      savgol_filter: bool, check_parameter: bool) -> None
```

Create training dataset for aligned data.

**Arguments**:

- `cfg` _dict_ - Configuration parameters.
- `files` _List[str]_ - List of files.
- `testfraction` _float_ - Fraction of data to use as test data.
- `num_features` _int_ - Number of features (deprecated).
- `savgol_filter` _bool_ - Flag indicating whether to apply Savitzky-Golay filter.
- `check_parameter` _bool_ - If True, the function will plot the z-scored data and the filtered data.
  

**Returns**:

  None - Save numpy arrays with the test/train info to the project folder.

#### traindata\_fixed

```python
def traindata_fixed(cfg: dict, files: List[str], testfraction: float,
                    num_features: int, savgol_filter: bool,
                    check_parameter: bool,
                    pose_ref_index: Optional[List[int]]) -> None
```

Create training dataset for fixed data.

**Arguments**:

- `cfg` _dict_ - Configuration parameters.
- `files` _List[str]_ - List of files.
- `testfraction` _float_ - Fraction of data to use as test data.
- `num_features` _int_ - Number of features.
- `savgol_filter` _bool_ - Flag indicating whether to apply Savitzky-Golay filter.
- `check_parameter` _bool_ - If True, the function will plot the z-scored data and the filtered data.
- `pose_ref_index` _Optional[List[int]]_ - List of reference coordinate indices for alignment.
  

**Returns**:

  None - Save numpy arrays with the test/train info to the project folder.

#### create\_trainset

```python
@save_state(model=CreateTrainsetFunctionSchema)
def create_trainset(config: str,
                    pose_ref_index: Optional[List] = None,
                    check_parameter: bool = False,
                    save_logs: bool = False) -> None
```

Creates a training dataset for the VAME model.

**Arguments**:

- `config` _str_ - Path to the config file.
- `pose_ref_index` _Optional[List], optional_ - List of reference coordinate indices for alignment. Defaults to None.
- `check_parameter` _bool, optional_ - If True, the function will plot the z-scored data and the filtered data. Defaults to False.

