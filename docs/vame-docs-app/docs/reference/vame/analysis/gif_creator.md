---
sidebar_label: gif_creator
title: vame.analysis.gif_creator
---

Variational Animal Motion Embedding 1.0-alpha Toolbox
© K. Luxem &amp; P. Bauer, Department of Cellular Neuroscience
Leibniz Institute for Neurobiology, Magdeburg, Germany

https://github.com/LINCellularNeuroscience/VAME
Licensed under GNU General Public License v3.0

#### create\_video

```python
def create_video(path_to_file: str, file: str, embed: np.ndarray,
                 clabel: np.ndarray, frames: List[np.ndarray], start: int,
                 length: int, max_lag: int, num_points: int) -> None
```

Create video frames for the given embedding.

**Arguments**:

- `path_to_file` _str_ - Path to the file.
- `file` _str_ - File name.
- `embed` _np.ndarray_ - Embedding array.
- `clabel` _np.ndarray_ - Cluster labels.
- `frames` _List[np.ndarray]_ - List of frames.
- `start` _int_ - Starting index.
- `length` _int_ - Length of the video.
- `max_lag` _int_ - Maximum lag.
- `num_points` _int_ - Number of points.
  

**Returns**:

  None

#### gif

```python
def gif(
    config: str,
    pose_ref_index: int,
    subtract_background: bool = True,
    start: int | None = None,
    length: int = 500,
    max_lag: int = 30,
    label: str = 'community',
    file_format: str = '.mp4',
    crop_size: Tuple[int, int] = (300, 300)) -> None
```

Create a GIF from the given configuration.

**Arguments**:

- `config` _str_ - Path to the configuration file.
- `pose_ref_index` _int_ - Pose reference index.
- `subtract_background` _bool, optional_ - Whether to subtract background. Defaults to True.
- `start` _int, optional_ - Starting index. Defaults to None.
- `length` _int, optional_ - Length of the video. Defaults to 500.
- `max_lag` _int, optional_ - Maximum lag. Defaults to 30.
- `label` _str, optional_ - Label type [None, community, motif]. Defaults to &#x27;community&#x27;.
- `file_format` _str, optional_ - File format. Defaults to &#x27;.mp4&#x27;.
- `crop_size` _Tuple[int, int], optional_ - Crop size. Defaults to (300,300).
  

**Returns**:

  None

