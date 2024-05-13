---
sidebar_label: gif_pose_helper
title: vame.util.gif_pose_helper
---

Variational Animal Motion Embedding 1.0-alpha Toolbox
© K. Luxem &amp; P. Bauer, Department of Cellular Neuroscience
Leibniz Institute for Neurobiology, Magdeburg, Germany

https://github.com/LINCellularNeuroscience/VAME
Licensed under GNU General Public License v3.0

#### crop\_and\_flip

```python
def crop_and_flip(rect: tuple, src: np.ndarray, points: list,
                  ref_index: list) -> tuple
```

Crop and flip an image based on a rectangle and reference points.

**Arguments**:

- `rect` _tuple_ - Tuple containing rectangle information (center, size, angle).
- `src` _np.ndarray_ - Source image to crop and flip.
- `points` _list_ - List of points to be aligned.
- `ref_index` _list_ - Reference indices for alignment.
  

**Returns**:

- `tuple` - Cropped and flipped image, shifted points.

#### background

```python
def background(path_to_file: str,
               filename: str,
               file_format: str = '.mp4',
               num_frames: int = 1000) -> np.ndarray
```

Compute background image from fixed camera.

**Arguments**:

- `path_to_file` _str_ - Path to the directory containing the video files.
- `filename` _str_ - Name of the video file.
- `file_format` _str, optional_ - Format of the video file. Defaults to &#x27;.mp4&#x27;.
- `num_frames` _int, optional_ - Number of frames to use for background computation. Defaults to 1000.
  

**Returns**:

- `np.ndarray` - Background image.

#### get\_rotation\_matrix

```python
def get_rotation_matrix(
    adjacent: float, opposite: float,
    crop_size: tuple = (300, 300)) -> np.ndarray
```

Compute the rotation matrix based on the adjacent and opposite sides.

**Arguments**:

- `adjacent` _float_ - Length of the adjacent side.
- `opposite` _float_ - Length of the opposite side.
- `crop_size` _tuple, optional_ - Size of the cropped area. Defaults to (300, 300).
  

**Returns**:

- `np.ndarray` - Rotation matrix.

#### nan\_helper

```python
def nan_helper(y: np.ndarray) -> tuple
```

Helper function to find indices of NaN values.

**Arguments**:

- `y` _np.ndarray_ - Input array.
  

**Returns**:

- `tuple` - Indices of NaN values.

#### interpol

```python
def interpol(arr: np.ndarray) -> np.ndarray
```

Interpolates NaN values in the given array.

**Arguments**:

- `arr` _np.ndarray_ - Input array with NaN values.
  

**Returns**:

- `np.ndarray` - Array with interpolated NaN values.

#### get\_animal\_frames

```python
def get_animal_frames(
    cfg: dict,
    filename: str,
    pose_ref_index: list,
    start: int,
    length: int,
    subtract_background: bool,
    file_format: str = '.mp4',
    crop_size: tuple = (300, 300)) -> list
```

Extracts frames of an animal from a video file and returns them as a list.

**Arguments**:

- `cfg` _dict_ - Configuration dictionary containing project information.
- `filename` _str_ - Name of the video file.
- `pose_ref_index` _list_ - List of reference coordinate indices for alignment.
- `start` _int_ - Starting frame index.
- `length` _int_ - Number of frames to extract.
- `subtract_background` _bool_ - Whether to subtract background or not.
- `file_format` _str, optional_ - Format of the video file. Defaults to &#x27;.mp4&#x27;.
- `crop_size` _tuple, optional_ - Size of the cropped area. Defaults to (300, 300).
  

**Returns**:

- `list` - List of extracted frames.

