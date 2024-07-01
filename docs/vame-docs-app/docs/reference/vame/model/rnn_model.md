---
sidebar_label: rnn_model
title: vame.model.rnn_model
---

Variational Animal Motion Embedding 0.1 Toolbox
© K. Luxem &amp; P. Bauer, Department of Cellular Neuroscience
Leibniz Institute for Neurobiology, Magdeburg, Germany

https://github.com/LINCellularNeuroscience/VAME
Licensed under GNU General Public License v3.0

The Model is partially adapted from the Timeseries Clustering repository developed by Tejas Lodaya:
https://github.com/tejaslodaya/timeseries-clustering-vae/blob/master/vrae/vrae.py

## Encoder Objects

```python
class Encoder(nn.Module)
```

Encoder module of the Variational Autoencoder.

#### \_\_init\_\_

```python
def __init__(NUM_FEATURES: int, hidden_size_layer_1: int,
             hidden_size_layer_2: int, dropout_encoder: float)
```

Initialize the Encoder module.

**Arguments**:

- `NUM_FEATURES` _int_ - Number of input features.
- `hidden_size_layer_1` _int_ - Size of the first hidden layer.
- `hidden_size_layer_2` _int_ - Size of the second hidden layer.
- `dropout_encoder` _float_ - Dropout rate for regularization.

#### forward

```python
def forward(inputs: torch.Tensor) -> torch.Tensor
```

Forward pass of the Encoder module.

**Arguments**:

- `inputs` _torch.Tensor_ - Input tensor of shape (batch_size, sequence_length, num_features).
  

**Returns**:

- `torch.Tensor` - Encoded representation tensor of shape (batch_size, hidden_size_layer_1 * 4).

## Lambda Objects

```python
class Lambda(nn.Module)
```

Lambda module for computing the latent space parameters.

#### \_\_init\_\_

```python
def __init__(ZDIMS: int, hidden_size_layer_1: int, hidden_size_layer_2: int,
             softplus: bool)
```

Initialize the Lambda module.

**Arguments**:

- `ZDIMS` _int_ - Size of the latent space.
- `hidden_size_layer_1` _int_ - Size of the first hidden layer.
- `hidden_size_layer_2` _int, deprecated_ - Size of the second hidden layer.
- `softplus` _bool_ - Whether to use softplus activation for logvar.

#### forward

```python
def forward(
        hidden: torch.Tensor
) -> tuple[torch.Tensor, torch.Tensor, torch.Tensor]
```

Forward pass of the Lambda module.

**Arguments**:

- `hidden` _torch.Tensor_ - Hidden representation tensor of shape (batch_size, hidden_size_layer_1 * 4).
  

**Returns**:

  tuple[torch.Tensor, torch.Tensor, torch.Tensor]: Latent space tensor, mean tensor, logvar tensor.

## Decoder Objects

```python
class Decoder(nn.Module)
```

Decoder module of the Variational Autoencoder.

#### \_\_init\_\_

```python
def __init__(TEMPORAL_WINDOW: int, ZDIMS: int, NUM_FEATURES: int,
             hidden_size_rec: int, dropout_rec: float)
```

Initialize the Decoder module.

**Arguments**:

- `TEMPORAL_WINDOW` _int_ - Size of the temporal window.
- `ZDIMS` _int_ - Size of the latent space.
- `NUM_FEATURES` _int_ - Number of input features.
- `hidden_size_rec` _int_ - Size of the recurrent hidden layer.
- `dropout_rec` _float_ - Dropout rate for regularization.

#### forward

```python
def forward(inputs: torch.Tensor, z: torch.Tensor) -> torch.Tensor
```

Forward pass of the Decoder module.

**Arguments**:

- `inputs` _torch.Tensor_ - Input tensor of shape (batch_size, seq_len, ZDIMS).
- `z` _torch.Tensor_ - Latent space tensor of shape (batch_size, ZDIMS).
  

**Returns**:

- `torch.Tensor` - Decoded output tensor of shape (batch_size, seq_len, NUM_FEATURES).

## Decoder\_Future Objects

```python
class Decoder_Future(nn.Module)
```

Decoder module for predicting future sequences.

#### \_\_init\_\_

```python
def __init__(TEMPORAL_WINDOW: int, ZDIMS: int, NUM_FEATURES: int,
             FUTURE_STEPS: int, hidden_size_pred: int, dropout_pred: float)
```

Initialize the Decoder_Future module.

**Arguments**:

- `TEMPORAL_WINDOW` _int_ - Size of the temporal window.
- `ZDIMS` _int_ - Size of the latent space.
- `NUM_FEATURES` _int_ - Number of input features.
- `FUTURE_STEPS` _int_ - Number of future steps to predict.
- `hidden_size_pred` _int_ - Size of the prediction hidden layer.
- `dropout_pred` _float_ - Dropout rate for regularization.

#### forward

```python
def forward(inputs: torch.Tensor, z: torch.Tensor) -> torch.Tensor
```

Forward pass of the Decoder_Future module.

**Arguments**:

- `inputs` _torch.Tensor_ - Input tensor of shape (batch_size, seq_len, ZDIMS).
- `z` _torch.Tensor_ - Latent space tensor of shape (batch_size, ZDIMS).
  

**Returns**:

- `torch.Tensor` - Predicted future tensor of shape (batch_size, FUTURE_STEPS, NUM_FEATURES).

## RNN\_VAE Objects

```python
class RNN_VAE(nn.Module)
```

Variational Autoencoder module.

#### \_\_init\_\_

```python
def __init__(TEMPORAL_WINDOW: int, ZDIMS: int, NUM_FEATURES: int,
             FUTURE_DECODER: bool, FUTURE_STEPS: int, hidden_size_layer_1: int,
             hidden_size_layer_2: int, hidden_size_rec: int,
             hidden_size_pred: int, dropout_encoder: float, dropout_rec: float,
             dropout_pred: float, softplus: bool)
```

Initialize the VAE module.

**Arguments**:

- `TEMPORAL_WINDOW` _int_ - Size of the temporal window.
- `ZDIMS` _int_ - Size of the latent space.
- `NUM_FEATURES` _int_ - Number of input features.
- `FUTURE_DECODER` _bool_ - Whether to include a future decoder.
- `FUTURE_STEPS` _int_ - Number of future steps to predict.
- `hidden_size_layer_1` _int_ - Size of the first hidden layer.
- `hidden_size_layer_2` _int_ - Size of the second hidden layer.
- `hidden_size_rec` _int_ - Size of the recurrent hidden layer.
- `hidden_size_pred` _int_ - Size of the prediction hidden layer.
- `dropout_encoder` _float_ - Dropout rate for encoder.

#### forward

```python
def forward(seq: torch.Tensor) -> tuple
```

Forward pass of the VAE.

**Arguments**:

- `seq` _torch.Tensor_ - Input sequence tensor of shape (batch_size, seq_len, NUM_FEATURES).
  

**Returns**:

  Tuple containing:
  - If FUTURE_DECODER is True:
  - prediction (torch.Tensor): Reconstructed input sequence tensor.
  - future (torch.Tensor): Predicted future sequence tensor.
  - z (torch.Tensor): Latent representation tensor.
  - mu (torch.Tensor): Mean of the latent distribution tensor.
  - logvar (torch.Tensor): Log variance of the latent distribution tensor.
  - If FUTURE_DECODER is False:
  - prediction (torch.Tensor): Reconstructed input sequence tensor.
  - z (torch.Tensor): Latent representation tensor.
  - mu (torch.Tensor): Mean of the latent distribution tensor.
  - logvar (torch.Tensor): Log variance of the latent distribution tensor.

