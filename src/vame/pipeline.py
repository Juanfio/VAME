from typing import List, Optional, Literal
from pathlib import Path
import xarray as xr

import vame
from vame.util.auxiliary import read_config
from vame.io.load_poses import load_vame_dataset


class VAMEPipeline:

    def __init__(
        self,
        project_name: str,
        videos: List[str],
        poses_estimations: List[str],
        source_software: Literal["DeepLabCut", "SLEAP", "LightningPose"],
        working_directory: str = ".",
        video_type: str = ".mp4",
        fps: int = 30,
        copy_videos: bool = False,
        paths_to_pose_nwb_series_data: Optional[str] = None,
        config_kwargs: Optional[dict] = None,
    ):
        self.config_path = vame.init_new_project(
            project_name=project_name,
            videos=videos,
            poses_estimations=poses_estimations,
            source_software=source_software,
            working_directory=working_directory,
            video_type=video_type,
            fps=fps,
            copy_videos=copy_videos,
            paths_to_pose_nwb_series_data=paths_to_pose_nwb_series_data,
            config_kwargs=config_kwargs,
        )
        self.config = read_config(self.config_path)

    def get_sessions(self) -> List[str]:
        """
        Returns a list of session names.

        Returns:
        --------
        List[str]
            Session names.
        """
        return self.config["session_names"]

    def get_raw_datasets(self) -> xr.Dataset:
        """
        Returns a xarray dataset which combines all the raw data from the project.

        Returns:
        --------
        dss : xarray.Dataset
            Combined raw dataset.
        """
        sessions = self.get_sessions()
        datasets = list()
        attributes = list()
        for session in sessions:
            ds_path = Path(self.config["project_path"]) / "data" / "raw" / f"{session}.nc"
            ds = load_vame_dataset(ds_path=ds_path)
            ds = ds.expand_dims({"session": [session]})
            datasets.append(ds)
            attributes.append(ds.attrs)
        dss = xr.concat(datasets, dim="session")
        dss_attrs = {}
        for d in attributes:
            for key, value in d.items():
                dss_attrs.setdefault(key, []).append(value)
        for key, values in dss_attrs.items():
            unique_values = unique_in_order(values)  # Maintain order of unique values
            dss_attrs[key] = unique_values[0] if len(unique_values) == 1 else unique_values
        for key, value in dss_attrs.items():
            dss.attrs[key] = value
        return dss

    def preprocessing(self, pose_ref_index=[5, 6]):
        vame.egocentric_alignment(
            self.config,
            pose_ref_index=pose_ref_index,
        )


def unique_in_order(sequence):
    seen = set()
    result = []
    for item in sequence:
        if item not in seen:
            result.append(item)
            seen.add(item)
    return result
