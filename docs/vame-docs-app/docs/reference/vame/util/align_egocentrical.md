---
sidebar_label: align_egocentrical
title: vame.util.align_egocentrical
---

Variational Animal Motion Embedding 0.1 Toolbox
© K. Luxem &amp; J. Kürsch &amp; P. Bauer, Department of Cellular Neuroscience
Leibniz Institute for Neurobiology, Magdeburg, Germany

https://github.com/LINCellularNeuroscience/VAME
Licensed under GNU General Public License v3.0

#### align\_mouse

```python
def align_mouse(
    path_to_file: str,
    filename: str,
    video_format: str,
    crop_size: Tuple[int, int],
    pose_list: List[np.ndarray],
    pose_ref_index: Tuple[int, int],
    confidence: float,
    pose_flip_ref: Tuple[int, int],
    bg: np.ndarray,
    frame_count: int,
    use_video: bool = True,
    tqdm_stream: TqdmToLogger = None
) -> Tuple[List[np.ndarray], List[List[np.ndarray]], np.ndarray]
```

Align the mouse in the video frames.

**Arguments**:

- `path_to_file` _str_ - Path to the file directory.
- `filename` _str_ - Name of the video file without the format.
- `video_format` _str_ - Format of the video file.
- `crop_size` _Tuple[int, int]_ - Size to crop the video frames.
- `pose_list` _List[np.ndarray]_ - List of pose coordinates.
- `pose_ref_index` _Tuple[int, int]_ - Pose reference indices.
- `confidence` _float_ - Pose confidence threshold.
- `pose_flip_ref` _Tuple[int, int]_ - Reference indices for flipping.
- `bg` _np.ndarray_ - Background image.
- `frame_count` _int_ - Number of frames to align.
- `filename`0 _bool, optional_ - bool if video should be cropped or DLC points only. Defaults to True.
  

**Returns**:

  Tuple[List[np.ndarray], List[List[np.ndarray]], np.ndarray]: List of aligned images, list of aligned DLC points, and time series data.

#### play\_aligned\_video

```python
def play_aligned_video(a: List[np.ndarray], n: List[List[np.ndarray]],
                       frame_count: int) -> None
```

Play the aligned video.

**Arguments**:

- `a` _List[np.ndarray]_ - List of aligned images.
- `n` _List[List[np.ndarray]]_ - List of aligned DLC points.
- `frame_count` _int_ - Number of frames in the video.

#### alignment

```python
def alignment(
        path_to_file: str,
        filename: str,
        pose_ref_index: List[int],
        video_format: str,
        crop_size: Tuple[int, int],
        confidence: float,
        use_video: bool = False,
        check_video: bool = False,
        tqdm_stream: TqdmToLogger = None
) -> Tuple[np.ndarray, List[np.ndarray]]
```

Perform alignment of egocentric data.

**Arguments**:

- `path_to_file` _str_ - Path to the file directory.
- `filename` _str_ - Name of the video file without the format.
- `pose_ref_index` _List[int]_ - Pose reference indices.
- `video_format` _str_ - Format of the video file.
- `crop_size` _Tuple[int, int]_ - Size to crop the video frames.
- `confidence` _float_ - Pose confidence threshold.
- `use_video` _bool, optional_ - Whether to use video for alignment. Defaults to False.
- `check_video` _bool, optional_ - Whether to check the aligned video. Defaults to False.
  

**Returns**:

  Tuple[np.ndarray, List[np.ndarray]]: Aligned time series data and list of aligned frames.

#### egocentric\_alignment

```python
@save_state(model=EgocentricAlignmentFunctionSchema)
def egocentric_alignment(config: str,
                         pose_ref_index: list = [5, 6],
                         crop_size: tuple = (300, 300),
                         use_video: bool = False,
                         video_format: str = '.mp4',
                         check_video: bool = False,
                         save_logs: bool = False) -> None
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

