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
def create_config_template()
```

Creates a template for config.yaml file. This specific order is preserved while saving as yaml file.

#### read\_config

```python
def read_config(configname)
```

Reads structured config file defining a project.

#### write\_config

```python
def write_config(configname, cfg)
```

Write structured config file.

