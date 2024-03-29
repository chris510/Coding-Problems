# In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

# Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

# We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

# Return true if and only if the nodes corresponding to the values x and y are cousins.

# Example 1:

# Input: root = [1,2,3,4], x = 4, y = 3
# Output: false
# Example 2:

# Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
# Output: true
# Example 3:

# Input: root = [1,2,3,null,4], x = 2, y = 3
# Output: false

# Note:

# The number of nodes in the tree will be between 2 and 100.
# Each node has a unique integer value from 1 to 100.

#dfs
def isCousins(self, root: TreeNode, x: int, y: int) -> bool:
  foundNodes = []
  
  def search(node, parent, depth):
    if not node: 
      return
    
    if node.val == x or node.val == y:
      foundNodes.append((depth, parent))
      
    search(node.left, node, depth + 1)
    search(node.right, node, depth + 1)
    
  search(root, None, 0)
  return foundNodes[0][0] == foundNodes[1][0] and foundNodes[0][1]  != foundNodes[1][1]

# Time: O(n) | Spae: O(n) where n is the number of nodes in the tree

#bfs

def isCousins(self, root: TreeNode, x: int, y: int) -> bool:
  foundNodes = []
  queue = deque([(root, None, 0)])
  
  while queue:
    node, parent, depth = queue.popleft()
    if node.val == x or node.val == y:
      foundNodes.append((depth, parent))
    
    if node.left:
      queue.append((node.left, node, depth + 1))
    if node.right:
      queue.append((node.right, node, depth + 1))
  return foundNodes[0][0] == foundNodes[1][0] and foundNodes[0][1] != foundNodes[1][1]