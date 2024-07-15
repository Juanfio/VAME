---
sidebar_label: rnn_vae
title: vame.model.rnn_vae
---

Variational Animal Motion Embedding 0.1 Toolbox
© K. Luxem &amp; P. Bauer, Department of Cellular Neuroscience
Leibniz Institute for Neurobiology, Magdeburg, Germany

https://github.com/LINCellularNeuroscience/VAME
Licensed under GNU General Public License v3.0

#### reconstruction\_loss

```python
def reconstruction_loss(x: torch.Tensor, x_tilde: torch.Tensor,
                        reduction: str) -> torch.Tensor
```

Compute the reconstruction loss between input and reconstructed data.

**Arguments**:

- `x` _torch.Tensor_ - Input data tensor.
- `x_tilde` _torch.Tensor_ - Reconstructed data tensor.
- `reduction` _str_ - Type of reduction for the loss.
  

**Returns**:

- `torch.Tensor` - Reconstruction loss.

#### future\_reconstruction\_loss

```python
def future_reconstruction_loss(x: torch.Tensor, x_tilde: torch.Tensor,
                               reduction: str) -> torch.Tensor
```

Compute the future reconstruction loss between input and predicted future data.

**Arguments**:

- `x` _torch.Tensor_ - Input future data tensor.
- `x_tilde` _torch.Tensor_ - Reconstructed future data tensor.
- `reduction` _str_ - Type of reduction for the loss.
  

**Returns**:

- `torch.Tensor` - Future reconstruction loss.

#### cluster\_loss

```python
def cluster_loss(H: torch.Tensor, kloss: int, lmbda: float,
                 batch_size: int) -> torch.Tensor
```

Compute the cluster loss.

**Arguments**:

- `H` _torch.Tensor_ - Latent representation tensor.
- `kloss` _int_ - Number of clusters.
- `lmbda` _float_ - Lambda value for the loss.
- `batch_size` _int_ - Size of the batch.
  

**Returns**:

- `torch.Tensor` - Cluster loss.

#### kullback\_leibler\_loss

```python
def kullback_leibler_loss(mu: torch.Tensor,
                          logvar: torch.Tensor) -> torch.Tensor
```

Compute the Kullback-Leibler divergence loss.
see Appendix B from VAE paper: Kingma and Welling. Auto-Encoding Variational Bayes. ICLR, 2014 - https://arxiv.org/abs/1312.6114

Formula: 0.5 * sum(1 + log(sigma^2) - mu^2 - sigma^2)

**Arguments**:

- `mu` _torch.Tensor_ - Mean of the latent distribution.
- `logvar` _torch.Tensor_ - Log variance of the latent distribution.
  

**Returns**:

- `torch.Tensor` - Kullback-Leibler divergence loss.

#### kl\_annealing

```python
def kl_annealing(epoch: int, kl_start: int, annealtime: int,
                 function: str) -> float
```

Anneal the Kullback-Leibler loss to let the model learn first the reconstruction of the data
before the KL loss term gets introduced.

**Arguments**:

- `epoch` _int_ - Current epoch number.
- `kl_start` _int_ - Epoch number to start annealing the loss.
- `annealtime` _int_ - Annealing time.
- `function` _str_ - Annealing function type.
  

**Returns**:

- `float` - Annealed weight value for the loss.

#### gaussian

```python
def gaussian(ins: torch.Tensor,
             is_training: bool,
             seq_len: int,
             std_n: float = 0.8) -> torch.Tensor
```

Add Gaussian noise to the input data.

**Arguments**:

- `ins` _torch.Tensor_ - Input data tensor.
- `is_training` _bool_ - Whether it is training mode.
- `seq_len` _int_ - Length of the sequence.
- `std_n` _float_ - Standard deviation for the Gaussian noise.
  

**Returns**:

- `torch.Tensor` - Noisy input data tensor.

#### train

```python
def train(train_loader: Data.DataLoader, epoch: int, model: nn.Module,
          optimizer: torch.optim.Optimizer, anneal_function: str, BETA: float,
          kl_start: int, annealtime: int, seq_len: int, future_decoder: bool,
          future_steps: int, scheduler: torch.optim.lr_scheduler._LRScheduler,
          mse_red: str, mse_pred: str, kloss: int, klmbda: float, bsize: int,
          noise: bool) -> Tuple[float, float, float, float, float, float]
```

Train the model.

**Arguments**:

- `train_loader` _DataLoader_ - Training data loader.
- `epoch` _int_ - Current epoch number.
- `model` _nn.Module_ - Model to be trained.
- `optimizer` _Optimizer_ - Optimizer for training.
- `anneal_function` _str_ - Annealing function type.
- `BETA` _float_ - Beta value for the loss.
- `kl_start` _int_ - Epoch number to start annealing the loss.
- `annealtime` _int_ - Annealing time.
- `seq_len` _int_ - Length of the sequence.
- `future_decoder` _bool_ - Whether a future decoder is used.
- `epoch`0 _int_ - Number of future steps to predict.
- `epoch`1 _lr_scheduler._LRScheduler_ - Learning rate scheduler.
- `epoch`2 _str_ - Reduction type for MSE reconstruction loss.
- `epoch`3 _str_ - Reduction type for MSE prediction loss.
- `epoch`4 _int_ - Number of clusters for cluster loss.
- `epoch`5 _float_ - Lambda value for cluster loss.
- `epoch`6 _int_ - Size of the batch.
- `epoch`7 _bool_ - Whether to add Gaussian noise to the input.
  

**Returns**:

  Tuple[float, float, float, float, float, float]: Kullback-Leibler weight, train loss, K-means loss, KL loss,
  MSE loss, future loss.

#### test

```python
def test(test_loader: Data.DataLoader, model: nn.Module, BETA: float,
         kl_weight: float, seq_len: int, mse_red: str, kloss: str,
         klmbda: float, future_decoder: bool,
         bsize: int) -> Tuple[float, float, float]
```

Evaluate the model on the test dataset.

**Arguments**:

- `test_loader` _DataLoader_ - DataLoader for the test dataset.
- `epoch` _int, deprecated_ - Current epoch number.
- `model` _nn.Module_ - The trained model.
- `optimizer` _Optimizer, deprecated_ - The optimizer used for training.
- `BETA` _float_ - Beta value for the VAE loss.
- `kl_weight` _float_ - Weighting factor for the KL divergence loss.
- `seq_len` _int_ - Length of the sequence.
- `mse_red` _str_ - Reduction method for the MSE loss.
- `kloss` _str_ - Loss function for K-means clustering.
- `klmbda` _float_ - Lambda value for K-means loss.
- `epoch`0 _bool_ - Flag indicating whether to use a future decoder.
- `epoch`1 _int_ - Batch size.
  

**Returns**:

  Tuple[float, float, float]: Tuple containing MSE loss per item, total test loss per item,
  and K-means loss weighted by the kl_weight.

#### train\_model

```python
@save_state(model=TrainModelFunctionSchema)
def train_model(config: str, save_logs: bool = False) -> None
```

Train Variational Autoencoder using the configuration file values.

**Arguments**:

- `config` _str_ - Path to the configuration file.

