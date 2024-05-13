---
sidebar_label: tree_hierarchy
title: vame.analysis.tree_hierarchy
---

Variational Animal Motion Embedding 1.0-alpha Toolbox
© K. Luxem &amp; P. Bauer, Department of Cellular Neuroscience
Leibniz Institute for Neurobiology, Magdeburg, Germany

https://github.com/LINCellularNeuroscience/VAME
Licensed under GNU General Public License v3.0

#### hierarchy\_pos

```python
def hierarchy_pos(G: nx.Graph,
                  root: str = None,
                  width: float = 0.5,
                  vert_gap: float = 0.2,
                  vert_loc: float = 0,
                  xcenter: float = 0.5) -> Dict[str, Tuple[float, float]]
```

Positions nodes in a tree-like layout.
Ref: From Joel&#x27;s answer at https://stackoverflow.com/a/29597209/2966723.

**Arguments**:

- `G` _nx.Graph_ - The input graph. Must be a tree.
- `root` _str, optional_ - The root node of the tree. If None, the function selects a root node based on graph type.
- `width` _float, optional_ - The horizontal space assigned to each level.
- `vert_gap` _float, optional_ - The vertical gap between levels.
- `vert_loc` _float, optional_ - The vertical location of the root node.
- `xcenter` _float, optional_ - The horizontal location of the root node.
  

**Returns**:

  Dict[str, Tuple[float, float]]: A dictionary mapping node names to their positions (x, y).

