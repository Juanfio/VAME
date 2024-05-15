from pathlib import Path
from vame.util.auxiliary import read_config

def test_project_config_exists(setup_project):
    assert Path(setup_project['config_path']).exists()

def test_project_name_config(setup_project):
    config = Path(setup_project['config_path'])
    config_values = read_config(config)
    assert config_values['Project'] == setup_project['project_name']
    
