---
sidebar_label: rnn_vae
title: vame.model.rnn_vae
---

Variational Animal Motion Embedding 0.1 Toolbox
© K. Luxem &amp; P. Bauer, Department of Cellular Neuroscience
Leibniz Institute for Neurobiology, Magdeburg, Germany

https://github.com/LINCellularNeuroscience/VAME
Licensed under GNU General Public License v3.0

#### kl\_annealing

```python
def kl_annealing(epoch, kl_start, annealtime, function)
```

Annealing of Kullback-Leibler loss to let the model learn first
the reconstruction of the data before the KL loss term gets introduced.

#### train\_model

```python
def train_model(config: str)
```

Train Variational Autoencoder using the config.yaml file values

**Arguments**:

- `config` _str_ - Path to the config.yaml file

