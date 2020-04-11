# Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

# Example:
# Given a binary tree
#           1
#          / \
#         2   3
#        / \     
#       4   5    
# Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

# Note: The length of path between two nodes is represented by the number of edges between them.

def diameterOfBinaryTree(self, root):
  def findDia(node):
    if node is None: return 0

    left = findDia(node.left)
    right = findDia(node.right)
    self.dia = max(self.dia, left + right + 1)
    return max(left, right) + 1
  self.dia = 1
  findDia(root)
  return self.dia - 1

# Time: O(n) | Space: O(n)
    