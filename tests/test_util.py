import vame
import pytest
import os


def test_pose_to_numpy_file_exists(setup_project_and_convert_pose_to_numpy):
    """
    Test if the pose-estimation file was converted to a numpy array file.
    """
    project_path = setup_project_and_convert_pose_to_numpy['config_data']['project_path']
    file_name = setup_project_and_convert_pose_to_numpy['config_data']['video_sets'][0]
    file_path = os.path.join(project_path,'data', file_name, f'{file_name}-PE-seq.npy')
    assert os.path.exists(file_path)


def test_egocentric_alignment_file_is_created(setup_project_and_align_egocentric):
    """
    Test if the egocentric alignment function creates the expected file.
    """
    project_path = setup_project_and_align_egocentric['config_data']['project_path']
    file_name = setup_project_and_align_egocentric['config_data']['video_sets'][0]
    file_path = os.path.join(project_path,'data', file_name, f'{file_name}-PE-seq.npy')
    assert os.path.exists(file_path)



def test_egocentric_alignment_file_is_created_nwb_data(setup_project_nwb_data):
    """
    Test if the egocentric alignment function creates the expected file using NWB data.
    """
    config_path = setup_project_nwb_data['config_path']
    vame.egocentric_alignment(
        config_path,
        pose_ref_index=setup_project_nwb_data["pose_ref_index"],
        save_logs=True,
    )
    project_path = setup_project_nwb_data['config_data']['project_path']
    file_name = setup_project_nwb_data['config_data']['video_sets'][0]
    file_path = os.path.join(project_path,'data', file_name, f'{file_name}-PE-seq.npy')
    assert os.path.exists(file_path)





