---
sidebar_label: align_egocentrical
title: vame.util.align_egocentrical
---

Variational Animal Motion Embedding 0.1 Toolbox
© K. Luxem &amp; J. Kürsch &amp; P. Bauer, Department of Cellular Neuroscience
Leibniz Institute for Neurobiology, Magdeburg, Germany

https://github.com/LINCellularNeuroscience/VAME
Licensed under GNU General Public License v3.0

#### background

```python
def background(path_to_file, filename, video_format='.mp4', num_frames=1000)
```

Compute background image from fixed camera

#### egocentric\_alignment

```python
def egocentric_alignment(config: str,
                         pose_ref_index: list = [5, 6],
                         crop_size: tuple = (300, 300),
                         use_video: bool = False,
                         video_format: str = '.mp4',
                         check_video: bool = False) -> None
```

Aligns egocentric data for VAME training

**Arguments**:

- `config` _str_ - Path for the project config file.
- `pose_ref_index` _list, optional_ - Pose reference index to be used to align. Defaults to [5,6].
- `crop_size` _tuple, optional_ - Size to crop the video. Defaults to (300,300).
- `use_video` _bool, optional_ - Weather to use video to do the post alignment. Defaults to False. # TODO check what to put in this docstring
- `video_format` _str, optional_ - Video format, can be .mp4 or .avi. Defaults to &#x27;.mp4&#x27;.
- `check_video` _bool, optional_ - Weather to check the video. Defaults to False.
  

**Raises**:

- `ValueError` - If the config.yaml indicates that the data is not egocentric.

