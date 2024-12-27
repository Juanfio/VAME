---
sidebar_label: data_manipulation
title: vame.util.data_manipulation
---

#### get\_pose\_data\_from\_nwb\_file

```python
def get_pose_data_from_nwb_file(
        nwbfile: NWBFile, path_to_pose_nwb_series_data: str) -> LabelledDict
```

Get pose data from nwb file using a inside path to the nwb data.

**Arguments**:

- `nwbfile` _NWBFile_ - NWB file object.
- `path_to_pose_nwb_series_data` _str_ - Path to the pose data inside the nwb file.
  

**Returns**:

- `LabelledDict` - Pose data.

#### consecutive

```python
def consecutive(data: np.ndarray, stepsize: int = 1) -> List[np.ndarray]
```

Find consecutive sequences in the data array.

**Arguments**:

- `data` _np.ndarray_ - Input array.
- `stepsize` _int, optional_ - Step size. Defaults to 1.
  

**Returns**:

- `List[np.ndarray]` - List of consecutive sequences.

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

#### interpol\_all\_nans

```python
def interpol_all_nans(arr: np.ndarray) -> np.ndarray
```

Interpolates all NaN values in the given array.

**Arguments**:

- `arr` _np.ndarray_ - Input array containing NaN values.
  

**Returns**:

- `np.ndarray` - Array with NaN values replaced by interpolated values.

#### interpol\_first\_rows\_nans

```python
def interpol_first_rows_nans(arr: np.ndarray) -> np.ndarray
```

Interpolates NaN values in the given array.

**Arguments**:

- `arr` _np.ndarray_ - Input array with NaN values.
  

**Returns**:

- `np.ndarray` - Array with interpolated NaN values.

#### crop\_and\_flip

```python
def crop_and_flip(
        rect: Tuple, src: np.ndarray, points: List[np.ndarray],
        ref_index: Tuple[int, int]) -> Tuple[np.ndarray, List[np.ndarray]]
```

Crop and flip the image based on the given rectangle and points.

**Arguments**:

- `rect` _Tuple_ - Rectangle coordinates (center, size, theta).
- `src` _np.ndarray_ - Source image.
- `points` _List[np.ndarray]_ - List of points.
- `ref_index` _Tuple[int, int]_ - Reference indices for alignment.
  

**Returns**:

  Tuple[np.ndarray, List[np.ndarray]]: Cropped and flipped image, and shifted points.

#### background

```python
def background(path_to_file: str,
               filename: str,
               file_format: str = '.mp4',
               num_frames: int = 1000,
               save_background: bool = True) -> np.ndarray
```

Compute background image from fixed camera.

**Arguments**:

- `path_to_file` _str_ - Path to the directory containing the video files.
- `filename` _str_ - Name of the video file.
- `file_format` _str, optional_ - Format of the video file. Defaults to &#x27;.mp4&#x27;.
- `num_frames` _int, optional_ - Number of frames to use for background computation. Defaults to 1000.
  

**Returns**:

- `np.ndarray` - Background image.

