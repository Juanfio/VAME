---
title: Running VAME Workflow
sidebar_position: 2
---

## Workflow Overview
The below diagram shows the workflow of the VAME application, which consists of four main steps and optional steps to analyse your data.
![Workflow Overview](/img/workflow_overview.png)
1. Initialize project: This is step is responsible by starting the project, getting your data into the right format and creating a training dataset for the VAME deep learning model.
2. Train neural network: Train a variational autoencoder which is parameterized with recurrent neural network to embed behavioural dynamics
3. Evaluate performance: Evaluate the trained model based on its reconstruction capabilities
4. Segment behavior: Segment behavioural motifs/poses/states from the input time series
5. Quantify behavior:
    - Optional: Create motif videos to get insights about the fine grained poses.
    - Optional: Investigate the hierarchical order of your behavioural states by detecting communities in the resulting markov chain.
    - Optional: Create community videos to get more insights about behaviour on a hierarchical scale.
    - Optional: Visualization and projection of latent vectors onto a 2D plane via UMAP.
    - Optional: Use the generative model (reconstruction decoder) to sample from the learned data distribution, reconstruct random real samples or visualize the cluster centre for validation.
    - Optional: Create a video of an egocentrically aligned animal + path through the community space (similar to our gif on github readme).

:::tip
⚠️ Check out also the published VAME Workflow Guide, including more hands-on recommendations and tricks [HERE](https://www.nature.com/articles/s42003-022-04080-7#Sec8).
:::


## Running a demo workflow
In our github in `/examples` folder there is a demo script called `demo.py` that you can use to run a simple example of the VAME workflow. To run this workflow you will need to do the following:


### 1. Download the necessary resources:
To run the demo you will need a video and a csv file with the pose estimation results. You can use the following files links:
- `video-1.mp4`: Video file [link](https://drive.google.com/file/d/1w6OW9cN_-S30B7rOANvSaR9c3O5KeF0c/view)
- `video-1.csv`: Pose estimation results [link](https://github.com/EthoML/VAME/blob/master/examples/video-1.csv)

### 2. Setting the demo variables
To start the demo you must define 4 variables in the `demo.py` script. In order to do that, open the `demo.py` file and edit the following:

**The values below are just examples. You must set the variables according to your needs.**
```python
# The directory where the project will be saved
working_directory = './'

# The name you want for the project
project = 'first_vame_project'

# A list of paths to the videos file
videos =  ['./video-1.mp4']

# A list of paths to the poses estimations files.
# Important: The name (without the extension) of the video file and the pose estimation file must be the same. E.g. `video-1.mp4` and `video-1.csv`
poses_estimations = ['./video-1.csv']
```

### 3. Running the demo
After setting the variables, you can run the demo by running the following code:

```python
python demo.py
```

The demo will create a project folder in the defined working directory with the name you set in the `project` variable and a date suffix, e.g: `first_name-May-9-2024`.

In this folder you can find a config file called `config.yaml` where you can set the parameters for the VAME algorithm. The videos and poses estimations files will be copied to the project videos folder. If everything is ok, the workflow will run and the logs will be displayed in your terminal.
