---
sidebar_label: tree_hierarchy
title: analysis.tree_hierarchy
---

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

**Arguments**

* **G** (`nx.Graph`): The input graph. Must be a tree.
* **root** (`str, optional`): The root node of the tree. If None, the function selects a root node based on graph type.
Defaults to None.
* **width** (`float, optional`): The horizontal space assigned to each level. Defaults to 0.5.
* **vert_gap** (`float, optional`): The vertical gap between levels. Defaults to 0.2.
* **vert_loc** (`float, optional`): The vertical location of the root node. Defaults to 0.
* **xcenter** (`float, optional`): The horizontal location of the root node. Defaults to 0.5.

**Returns**

* `Dict[str, Tuple[float, float]]`: A dictionary mapping node names to their positions (x, y).

#### merge\_func

```python
def merge_func(transition_matrix: np.ndarray, n_clusters: int,
               motif_norm: np.ndarray,
               merge_sel: int) -> Tuple[np.ndarray, np.ndarray]
```

Merge nodes in a graph based on a selection criterion.

**Arguments**

* **transition_matrix** (`np.ndarray`): The transition matrix of the graph.
* **n_clusters** (`int`): The number of clusters.
* **motif_norm** (`np.ndarray`): The normalized motif matrix.
* **merge_sel** (`int`): The merge selection criterion.
- 0: Merge nodes with highest transition probability.
- 1: Merge nodes with lowest cost.

**Returns**

* `Tuple[np.ndarray, np.ndarray]`: A tuple containing the merged nodes.

#### graph\_to\_tree

```python
def graph_to_tree(motif_usage: np.ndarray,
                  transition_matrix: np.ndarray,
                  n_clusters: int,
                  merge_sel: int = 1) -> nx.Graph
```

Convert a graph to a tree.

**Arguments**

* **motif_usage** (`np.ndarray`): The motif usage matrix.
* **transition_matrix** (`np.ndarray`): The transition matrix of the graph.
* **n_clusters** (`int`): The number of clusters.
* **merge_sel** (`int, optional`): The merge selection criterion. Defaults to 1.
- 0: Merge nodes with highest transition probability.
- 1: Merge nodes with lowest cost.

**Returns**

* `nx.Graph`: The tree.

#### draw\_tree

```python
def draw_tree(
    T: nx.Graph,
    fig_width: float = 200.0,
    usage_dict: Dict[str, float] = dict()) -> None
```

Draw a tree.

**Arguments**

* **T** (`nx.Graph`): The tree to be drawn.
* **fig_width** (`int, optional`): The width of the figure. Defaults to 10.

**Returns**

* `None`

#### \_traverse\_tree\_cutline

```python
def _traverse_tree_cutline(
        T: nx.Graph,
        node: List[str],
        traverse_list: List[str],
        cutline: int,
        level: int,
        community_bag: List[List[str]],
        community_list: List[str] = None) -> List[List[str]]
```

DEPRECATED in favor of bag_nodes_by_cutline.
Helper function for tree traversal with a cutline.

**Arguments**

* **T** (`nx.Graph`): The tree to be traversed.
* **node** (`List[str]`): Current node being traversed.
* **traverse_list** (`List[str]`): List of traversed nodes.
* **cutline** (`int`): The cutline level.
* **level** (`int`): The current level in the tree.
* **community_bag** (`List[List[str]]`): List of community bags.
* **community_list** (`List[str], optional`): List of nodes in the current community bag.

**Returns**

* `List[List[str]]`: List of lists community bags.

#### traverse\_tree\_cutline

```python
def traverse_tree_cutline(T: nx.Graph,
                          root_node: str | None = None,
                          cutline: int = 2) -> List[List[str]]
```

DEPRECATED in favor of bag_nodes_by_cutline.
Traverse a tree with a cutline and return the community bags.

**Arguments**

* **T** (`nx.Graph`): The tree to be traversed.
* **root_node** (`str, optional`): The root node of the tree. If None, traversal starts from the root.
* **cutline** (`int, optional`): The cutline level.

**Returns**

* `List[List[str]]`: List of community bags.

#### bag\_nodes\_by\_cutline

```python
def bag_nodes_by_cutline(tree: nx.Graph, cutline: int = 2, root: str = "Root")
```

Bag nodes of a tree by a cutline.

**Arguments**

* **tree** (`nx.Graph`): The tree to be bagged.
* **cutline** (`int, optional`): The cutline level. Defaults to 2.
* **root** (`str, optional`): The root node of the tree. Defaults to &#x27;Root&#x27;.

**Returns**

* `List[List[str]]`: List of bags of nodes.

