---
sidebar_label: auxiliary
title: vame.util.auxiliary
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

#### create\_config\_template

```python
def create_config_template() -> Tuple[dict, ruamel.yaml.YAML]
```

Creates a template for the config.yaml file.

**Returns**:

  Tuple[dict, ruamel.yaml.YAML]: A tuple containing the template dictionary and the Ruamel YAML instance.

#### read\_config

```python
def read_config(configname: str) -> dict
```

Reads structured config file defining a project.

**Arguments**:

- `configname` _str_ - Path to the config file.
  

**Returns**:

- `dict` - The contents of the config file as a dictionary.

#### write\_config

```python
def write_config(configname: str, cfg: dict) -> None
```

Write structured config file.

**Arguments**:

- `configname` _str_ - Path to the config file.
- `cfg` _dict_ - Dictionary containing the config data.

#### update\_config

```python
def update_config(config: str, force_update: bool = False) -> None
```

Updates the configuration file with default values.

**Arguments**:

- `config` _str_ - Path to the config file.
- `force_update` _bool, optional_ - Whether to force the update even if the user declines. Defaults to False.

