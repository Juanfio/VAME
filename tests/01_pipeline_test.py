import xarray as xr


def test_pipeline(setup_pipeline):
    pipeline = setup_pipeline["pipeline"]

    sessions = pipeline.get_sessions()
    assert len(sessions) == 1

    ds = pipeline.get_raw_datasets()
    assert isinstance(ds, xr.Dataset)

    preprocessing_kwargs = {
        "centered_reference_keypoint": "Nose",
        "orientation_reference_keypoint": "Tailroot",
    }
    pipeline.run_pipeline(preprocessing_kwargs=preprocessing_kwargs)
