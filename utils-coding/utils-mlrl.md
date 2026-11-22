# Machine Learning / Reinforcement learning

## Videos

- https://youtu.be/BUTjcAjfMgY ML Foundations for AI Engineers (in 34 Minutes)
- https://youtu.be/3vFISl7qMFI Reinforcement Learning: A (practical) introduction

## Introduction

in ML the classic is to do supervised learning, where human select examples to be teached to the model. the performance is limited to our ability to select examples.
in RL computer learn through trial and error. getting negative and positive feedback, it has more potential because it can learn new tricks that no human never discovered. 
- https://youtu.be/BUTjcAjfMgY?t=1489

in ML the goal is to search the parameters with the minimal "Loss function" to do that we use the gradiant descent https://youtu.be/BUTjcAjfMgY?t=976
in ML the goal is to maximize the "Reward function" so it uses a gradiant ascent instead https://youtu.be/BUTjcAjfMgY?t=1560

## RL

to learn it needs as input a list of episodes, example for go game an episode is entire match, for a car game its when the car start moving and end when it crash.
we want the model to update it's model parameters such as it gives high probability of action which result in high proba of rewards and when we average on all the episodes the rewards is high
