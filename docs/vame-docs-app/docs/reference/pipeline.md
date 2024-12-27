---
sidebar_label: pipeline
title: pipeline
---

#### logger\_config

#### logger

## VAMEPipeline Objects

```python
class VAMEPipeline()
```

#### \_\_init\_\_

```python
def __init__(project_name: str,
             videos: List[str],
             poses_estimations: List[str],
             source_software: Literal["DeepLabCut", "SLEAP", "LightningPose"],
             working_directory: str = ".",
             video_type: str = ".mp4",
             fps: int | None = None,
             copy_videos: bool = False,
             paths_to_pose_nwb_series_data: Optional[str] = None,
             config_kwargs: Optional[dict] = None)
```

#### get\_sessions

```python
def get_sessions() -> List[str]
```

Returns a list of session names.

**Returns**

* `List[str]`: Session names.

#### get\_raw\_datasets

```python
def get_raw_datasets() -> xr.Dataset
```

Returns a xarray dataset which combines all the raw data from the project.

**Returns**

* **dss** (`xarray.Dataset`): Combined raw dataset.

#### preprocessing

```python
def preprocessing(centered_reference_keypoint: str = "snout",
                  orientation_reference_keypoint: str = "tailbase")
```

#### create\_training\_set

```python
def create_training_set()
```

#### train\_model

```python
def train_model()
```

#### evaluate\_model

```python
def evaluate_model()
```

#### run\_segmentation

```python
def run_segmentation()
```

#### generate\_motif\_videos

```python
def generate_motif_videos()
```

#### run\_community\_clustering

```python
def run_community_clustering()
```

#### generate\_community\_videos

```python
def generate_community_videos()
```

#### visualization

```python
def visualization()
```

#### report

```python
def report()
```

#### get\_states

```python
def get_states(summary: bool = True) -> dict
```

Returns the pipeline states.

**Returns**

* `dict`: Pipeline states.

#### run\_pipeline

```python
def run_pipeline(from_step: int = 0, preprocessing_kwargs: dict = {})
```

#### unique\_in\_order

```python
def unique_in_order(sequence)
```

