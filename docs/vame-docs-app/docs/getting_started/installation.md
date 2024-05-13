---
title: Installation
sidebar_position: 2
---


## Installation

To get started we recommend using [Anaconda](https://www.anaconda.com/distribution/) or [Virtual Environment](https://docs.python.org/3/library/venv.html) with Python 3.11 or higher.

To install VAME, follow these steps:

1. Clone the VAME repository to your local machine by running
```bash
git clone https://github.com/LINCellularNeuroscience/VAME.git
```


2. Installing VAME

**Option 1:** Using VAME.yaml file to create a conda environment and install VAME in it by running
```bash
conda env create -f VAME.yaml
```
**Option 2:**  Installing VAME with pip in your active virtual environment by running
```bash
cd VAME
pip install .
```

:::warning
You should make sure that you have a GPU powerful enough to train deep learning networks. In our original 2022 paper, we were using a single Nvidia GTX 1080 Ti GPU to train our network. A hardware guide can be found [here](https://timdettmers.com/2018/12/16/deep-learning-hardware-guide/).
:::

:::tip
VAME can also be trained in Google Colab or on a HPC cluster.
:::

Once you have your computing setup ready, begin using VAME by following the [demo workflow guide](/docs/getting_started/running).

## References
Original VAME publication: [Identifying Behavioral Structure from Deep Variational Embeddings of Animal Motion](https://www.biorxiv.org/content/10.1101/2020.05.14.095430v2) <br/>
Kingma & Welling: [Auto-Encoding Variational Bayes](https://arxiv.org/abs/1312.6114) <br/>
Pereira & Silveira: [Learning Representations from Healthcare Time Series Data for Unsupervised Anomaly Detection](https://www.joao-pereira.pt/publications/accepted_version_BigComp19.pdf)

## License: GPLv3
See the [LICENSE file](https://github.com/LINCellularNeuroscience/VAME/blob/master/LICENSE) for the full statement.
