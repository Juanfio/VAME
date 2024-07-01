---
sidebar_label: videowriter
title: vame.analysis.videowriter
---

Variational Animal Motion Embedding 1.0-alpha Toolbox
© K. Luxem &amp; P. Bauer, Department of Cellular Neuroscience
Leibniz Institute for Neurobiology, Magdeburg, Germany

https://github.com/LINCellularNeuroscience/VAME
Licensed under GNU General Public License v3.0

#### get\_cluster\_vid

```python
def get_cluster_vid(cfg: dict,
                    path_to_file: str,
                    file: str,
                    n_cluster: int,
                    videoType: str,
                    flag: str,
                    output_video_type: str = ".mp4",
                    tqdm_logger_stream: TqdmToLogger | None = None) -> None
```

Generate cluster videos.

**Arguments**:

- `cfg` _dict_ - Configuration parameters.
- `path_to_file` _str_ - Path to the file.
- `file` _str_ - Name of the file.
- `n_cluster` _int_ - Number of clusters.
- `videoType` _str_ - Type of input video.
- `flag` _str_ - Flag indicating the type of video (motif or community).
  

**Returns**:

  None - Generate cluster videos and save them to fs on project folder.

#### motif\_videos

```python
@save_state(model=MotifVideosFunctionSchema)
def motif_videos(config: Union[str, Path],
                 videoType: str = '.mp4',
                 output_video_type: str = '.mp4',
                 save_logs: bool = False) -> None
```

Generate motif videos.

**Arguments**:

- `config` _Union[str, Path]_ - Path to the configuration file.
- `videoType` _str, optional_ - Type of video. Default is &#x27;.mp4&#x27;.
- `output_video_type` _str, optional_ - Type of output video. Default is &#x27;.mp4&#x27;.
  

**Returns**:

  None - Generate motif videos and save them to filesystem on project cluster_videos folder.

#### community\_videos

```python
@save_state(model=CommunityVideosFunctionSchema)
def community_videos(config: Union[str, Path],
                     videoType: str = '.mp4',
                     save_logs: bool = False) -> None
```

Generate community videos.

**Arguments**:

- `config` _Union[str, Path]_ - Path to the configuration file.
- `videoType` _str, optional_ - Type of video. Default is &#x27;.mp4&#x27;.
  

**Returns**:

  None - Generate community videos and save them to filesystem on project community_videos folder.

