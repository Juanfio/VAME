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
                  root: str | None = None,
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

#### merge\_func

```python
def merge_func(transition_matrix: np.ndarray, n_cluster: int,
               motif_norm: np.ndarray,
               merge_sel: int) -> Tuple[np.ndarray, np.ndarray]
```

Merge nodes in a graph based on a selection criterion.

**Arguments**:

- `transition_matrix` _np.ndarray_ - The transition matrix of the graph.
- `n_cluster` _int_ - The number of clusters.
- `motif_norm` _np.ndarray_ - The normalized motif matrix.
- `merge_sel` _int_ - The merge selection criterion.
  - 0: Merge nodes with highest transition probability.
  - 1: Merge nodes with lowest cost.
  

**Raises**:

- `ValueError` - If an invalid merge selection criterion is provided.
  

**Returns**:

  Tuple[np.ndarray, np.ndarray]: A tuple containing the merged nodes.

#### graph\_to\_tree

```python
def graph_to_tree(motif_usage: np.ndarray,
                  transition_matrix: np.ndarray,
                  n_cluster: int,
                  merge_sel: int = 1) -> nx.Graph
```

Convert a graph to a tree.

**Arguments**:

- `motif_usage` _np.ndarray_ - The motif usage matrix.
- `transition_matrix` _np.ndarray_ - The transition matrix of the graph.
- `n_cluster` _int_ - The number of clusters.
- `merge_sel` _int, optional_ - The merge selection criterion. Defaults to 1.
  - 0: Merge nodes with highest transition probability.
  - 1: Merge nodes with lowest cost.
  

**Returns**:

- `nx.Graph` - The tree.

#### draw\_tree

```python
def draw_tree(T: nx.Graph) -> None
```

Draw a tree.

**Arguments**:

- `T` _nx.Graph_ - The tree to be drawn.
  

**Returns**:

  None

#### traverse\_tree\_cutline

```python
def traverse_tree_cutline(T: nx.Graph,
                          root_node: str | None = None,
                          cutline: int = 2) -> List[List[str]]
```

Traverse a tree with a cutline and return the community bags.

**Arguments**:

- `T` _nx.Graph_ - The tree to be traversed.
- `root_node` _str, optional_ - The root node of the tree. If None, traversal starts from the root.
- `cutline` _int, optional_ - The cutline level.
  

**Returns**:

- `List[List[str]]` - List of community bags.

