from pathlib import Path
import xarray as xr

from vame.logging.logger import VameLogger
from vame.preprocessing.cleaning import lowconf_cleaning

# from vame.preprocessing.align_egocentrical import (
#     egocentric_alignment_legacy,
#     egocentric_alignment,
# )


logger_config = VameLogger(__name__)
logger = logger_config.logger


def preprocessing(
    config: dict,
    pose_ref_1: str = "snout",
    pose_ref_2: str = "tailbase",
    save_logs: bool = False,
):

    # Low-confidence cleaning
    logger.info("Cleaning low confidence data points...")
    lowconf_cleaning(config=config)

    # egocentric_alignment(
    #     config=config,
    #     pose_ref_1=pose_ref_1,
    #     pose_ref_2=pose_ref_2,
    # )

    # clean_timeseries(
    #     config=config,
    #     save_logs=save_logs,
    # )
