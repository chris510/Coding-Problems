# Given a binary tree, find its maximum depth.

# The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

# Note: A leaf is a node with no children.

# Example:

# Given binary tree [3,9,20,null,null,15,7],

#     3
#    / \
#   9  20
#     /  \
#    15   7
# return its depth = 3.

# Recursion

# class Solution:
#   def maxDepth(self, root: TreeNode) -> int:
#       if root is None:
#         return 0
#       else:
#         left_depth = self.maxDepth(root.left)
#         right_depth = self.maxDepth(root.right)
#       return max(left_depth, right_depth) + 1
        
# Itterative

# class Solution:
#     def maxDepth(self, root: TreeNode) -> int:
#         stack = []
#         max_depth = 0
#         if stack is not None:
#           stack.append((root, 1))
        
#         while len(stack) != 0:
#           node, curr_depth = stack.pop()
#           if node is not None:
#             max_depth = max(max_depth, curr_depth)
#             stack.append((node.left, curr_depth + 1))
#             stack.append((node.right, curr_depth + 1))
        
#         return max_depth


# Time: O(N)
# Space: O(N) if the tree is unbalanced and O(log N) if it is balanced
