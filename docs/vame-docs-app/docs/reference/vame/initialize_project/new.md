---
sidebar_label: new
title: vame.initialize_project.new
---

Variational Animal Motion Embedding 1.0-alpha Toolbox
© K. Luxem &amp; P. Bauer, Department of Cellular Neuroscience
Leibniz Institute for Neurobiology, Magdeburg, Germany

https://github.com/LINCellularNeuroscience/VAME
Licensed under GNU General Public License v3.0

The following code is adapted from:

DeepLabCut2.0 Toolbox (deeplabcut.org)
© A. &amp; M. Mathis Labs
https://github.com/AlexEMG/DeepLabCut
Please see AUTHORS for contributors.
https://github.com/AlexEMG/DeepLabCut/blob/master/AUTHORS
Licensed under GNU Lesser General Public License v3.0

#### init\_new\_project

```python
def init_new_project(
        project: str,
        videos: List[str],
        poses_estimations: List[str],
        working_directory: str = '.',
        videotype: str = '.mp4',
        paths_to_pose_nwb_series_data: Optional[str] = None) -> str
```

Creates a new VAME project with the given parameters.

**Arguments**:

- `project` _str_ - Project name.
- `videos` _List[str]_ - List of videos paths to be used in the project. E.g. [&#x27;./sample_data/Session001.mp4&#x27;]
- `poses_estimations` _List[str]_ - List of pose estimation files paths to be used in the project. E.g. [&#x27;./sample_data/pose estimation/Session001.csv&#x27;]        working_directory (str, optional): _description_. Defaults to None.
- `videotype` _str, optional_ - Video extension (.mp4 or .avi). Defaults to &#x27;.mp4&#x27;.
  

**Returns**:

- `projconfigfile` _str_ - Path to the new vame project config file.

