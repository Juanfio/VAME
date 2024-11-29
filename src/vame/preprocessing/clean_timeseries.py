from pathlib import Path
import numpy as np
from scipy.stats import iqr

from vame.logging.logger import VameLogger
from vame.io.load_poses import load_vame_dataset
from vame.util.data_manipulation import interpolate_nans_with_pandas


logger_config = VameLogger(__name__)
logger = logger_config.logger


def clean_timeseries(
    config: dict,
):
    X_all_sessions = []
    pos = [0]
    pos_temp = 0

    session_names = config["session_names"]
    for session in session_names:
        logger.info("z-scoring of session %s" % session)

        # path_to_file = Path(config["project_path"]) / "data" / "processed" / session / session + "-PE-seq.npy"
        # data = np.load(path_to_file)

        path_to_file = Path(config["project_path"]) / "data" / "processed" / session / session + "-aligned.nc"
        ds = load_vame_dataset(path_to_file)
        X = ds.position_aligned.sel(individuals="individual_0").values

        # Standardize data
        X_mean = np.mean(X, axis=0)
        X_std = np.std(X, axis=0)
        X_z = (X - X_mean) / X_std

        # Robust interquartile range outlier detection
        if config["robust"]:
            iqr_val = iqr(X_z, axis=0)
            logger.info("IQR value: %.2f, IQR cutoff: %.2f" % (iqr_val, config["iqr_factor"] * iqr_val))
            for t in range(X_z.shape[0]):  # Iterate over time dimension
                for kp in range(X_z.shape[1]):  # Iterate over keypoints dimension
                    for sp in range(X_z.shape[2]):  # Iterate over space dimennsion (x, y)
                        if X_z[t, kp, sp] > config["iqr_factor"] * iqr_val[kp, sp]:
                            X_z[t, kp, sp] = np.nan
                        elif X_z[t, kp, sp] < -config["iqr_factor"] * iqr_val[kp, sp]:
                            X_z[t, kp, sp] = np.nan
            X_z = interpolate_nans_with_pandas(X_z)

        X_len = X.shape[0]
        pos_temp += X_len
        pos.append(pos_temp)
        X_all_sessions.append(X_z)

    X_all_sessions = np.concatenate(X_all_sessions, axis=0)

    # Detect and delete anchors
    detect_anchors = np.std(X_all_sessions, axis=0)
    sort_anchors = np.sort(detect_anchors)
    if sort_anchors[0] == sort_anchors[1]:
        anchors = np.where(detect_anchors == sort_anchors[0])[0]
        anchor_1_temp = anchors[0]
        anchor_2_temp = anchors[1]
    else:
        anchor_1_temp = int(np.where(detect_anchors == sort_anchors[0])[0])
        anchor_2_temp = int(np.where(detect_anchors == sort_anchors[1])[0])

    if anchor_1_temp > anchor_2_temp:
        anchor_1 = anchor_1_temp
        anchor_2 = anchor_2_temp
    else:
        anchor_1 = anchor_2_temp
        anchor_2 = anchor_1_temp

    X = np.delete(X, anchor_1, 1)
    X = np.delete(X, anchor_2, 1)
    X = X.T
