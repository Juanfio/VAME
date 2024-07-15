---
sidebar_label: gif_pose_helper
title: vame.util.gif_pose_helper
---

Variational Animal Motion Embedding 1.0-alpha Toolbox
© K. Luxem &amp; P. Bauer, Department of Cellular Neuroscience
Leibniz Institute for Neurobiology, Magdeburg, Germany

https://github.com/LINCellularNeuroscience/VAME
Licensed under GNU General Public License v3.0

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

