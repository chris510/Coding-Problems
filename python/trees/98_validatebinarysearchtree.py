# Given a binary tree, determine if it is a valid binary search tree (BST).

# Assume a BST is defined as follows:

# The left subtree of a node contains only nodes with keys less than the node's key.
# The right subtree of a node contains only nodes with keys greater than the node's key.
# Both the left and right subtrees must also be binary search trees.
 

# Example 1:

#     2
#    / \
#   1   3

# Input: [2,1,3]
# Output: true
# Example 2:

#     5
#    / \
#   1   4
#      / \
#     3   6

# Input: [5,1,4,null,null,3,6]
# Output: false
# Explanation: The root node's value is 5 but its right child's value is 4.

# Recursion
class Solution:
    def isValidBST(self, root: TreeNode) -> bool:
      return self.validateBST(root, float(-inf), float(inf))
        
    def validateBST(self, node, min_val, max_val):
      if not node:
        return True
      if min_val >= node.val or node.val >= max_val:
        return False
      
      leftisValid = self.validateBST(node.left, min_val, node.val)
      rightisValid = self.validateBST(node.right, node.val, max_val)
      return leftisValid and rightisValid
    
# Time: O(n) | Space: O(n)

# Itterative 
# class Solution:
#   def isValidBST(self, root: TreeNode) -> bool:
#       if not root:
#         return True
      
#       stack = [(root, float(-inf), float(inf))]
#       while stack:
#         node, min_val, max_val = stack.pop()
#         if not node:
#           continue
#         if node.val <= min_val or node.val >= max_val:
#           return False
#         stack.append((node.right, node.val, max_val))
#         stack.append((node.left, min_val, node.val))
#       return True

# Time: O(n) | Space: O(n)

# def isValidBST(self, root: TreeNode) -> bool:
#   stack = []
#   inorder = float(-inf)
  
#   while stack or root:
#     while root:
#       stack.append(root)
#       root = root.left
#     node = stack.pop()
#     if node.val <= inorder:
#       return False
#     inorder = node.val
#     root = node.right
#   return True

# Time: O(n) | Space: O(n)

# inorder traversal
def isValidBST(self, root: TreeNode) -> bool:
  stack = []
  inorder = float(-inf)
  
  while stack or root:
    while root:
      stack.append(root)
      root = root.left
    node = stack.pop()
    if node.val <= inorder:
      return False
    inorder = node.val
    root = node.right
  return True