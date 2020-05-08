# Return the root node of a binary search tree that matches the given preorder traversal.

# (Recall that a binary search tree is a binary tree where for every node, any descendant of node.left has a value < node.val, and any descendant of node.right has a value > node.val.  Also recall that a preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.)

# Example 1:

# Input: [8,5,1,7,10,12]
# Output: [8,5,10,1,7,null,12]

# Note: 

# 1 <= preorder.length <= 100
# The values of preorder are distinct.

# Definition for a binary tree node.
class TreeNode:
  def __init__(self, x):
    self.val = x
    self.left = None
    self.right = None

def bstFromPreorder(self, preorder):
  inorder = sorted(preorder)
  return self.bstHelper(preorder, inorder)
  
def bstHelper(self, preorder, inorder):
  if len(preorder) != len(inorder) or preorder == None or inorder == None or len(preorder) == 0:
    return None
  
  root = TreeNode(preorder[0])
  rootIndex = inorder.index(root.val)
  root.left = self.bstHelper(preorder[1: rootIndex + 1], inorder[:rootIndex])
  root.right = self.bstHelper(preorder[rootIndex + 1:], inorder[rootIndex + 1:])
  
  return root

# Time: O(n) | Space: O(N)

