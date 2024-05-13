---
sidebar_label: csv_to_npy
title: vame.util.csv_to_npy
---

Variational Animal Motion Embedding 1.0-alpha Toolbox
© K. Luxem &amp; P. Bauer, Department of Cellular Neuroscience
Leibniz Institute for Neurobiology, Magdeburg, Germany

https://github.com/LINCellularNeuroscience/VAME
Licensed under GNU General Public License v3.0

#### csv\_to\_numpy

```python
def csv_to_numpy(config)
```

This is a function to convert your pose-estimation.csv file to a numpy array.

Note that this code is only useful for data which is a priori egocentric, i.e. head-fixed
or otherwise restrained animals.

example use:
vame.csv_to_npy(&#x27;pathto/your/config/yaml&#x27;, &#x27;path/toYourFolderwithCSV/&#x27;)

