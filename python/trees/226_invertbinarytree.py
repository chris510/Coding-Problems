# Invert a binary tree.

# Example:

# Input:

#      4
#    /   \
#   2     7
#  / \   / \
# 1   3 6   9
# Output:

#      4
#    /   \
#   7     2
#  / \   / \
# 9   6 3   1
# Trivia:
# This problem was inspired by this original tweet by Max Howell:

# Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so f*** off.

# Recursive

# class Solution:
#     def invertTree(self, root: TreeNode) -> TreeNode:
#         if root is None:
#           return None
#         right = self.invertTree(root.right)
#         left = self.invertTree(root.left)
#         root.left = right
#         root.right = left
#         return root

#Itterative
# class Solution:
#     def invertTree(self, root: TreeNode) -> TreeNode:
#       if root is None:
#         return None
      
#       queue = [root]
#       while len(queue):
#         curr_node = queue.pop()
#         temp = curr_node.left
#         curr_node.left = curr_node.right
#         curr_node.right = temp
        
#         if curr_node.left != None: queue.append(curr_node.left)
#         if curr_node.right != None: queue.append(curr_node.right)
      
#       return root