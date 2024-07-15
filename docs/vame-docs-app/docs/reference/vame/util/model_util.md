---
sidebar_label: model_util
title: vame.util.model_util
---

#### load\_model

```python
def load_model(cfg: dict, model_name: str, fixed: bool = True) -> RNN_VAE
```

Load the VAME model.

**Arguments**:

- `cfg` _dict_ - Configuration dictionary.
- `model_name` _str_ - Name of the model.
- `fixed` _bool_ - Fixed or variable length sequences.
  

**Returns**:

- `RNN_VAE` - Loaded VAME model.

