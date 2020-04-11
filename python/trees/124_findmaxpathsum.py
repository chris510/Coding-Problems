# Given a non-empty binary tree, find the maximum path sum.

# For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

# Example 1:

# Input: [1,2,3]

#        1
#       / \
#      2   3

# Output: 6
# Example 2:

# Input: [-10,9,20,null,null,15,7]

#    -10
#    / \
#   9  20
#     /  \
#    15   7

# Output: 42

def maxPathSum(root):
  def findMax(node):
    nonlocal max_sum
    if node is None: return 0
    left = max(0, findMax(node.left))
    right = max(0, findMax(node.right))
    max_sum = max(left + right + node.val, max_sum)
    return max(left, right) + node.val        
  max_sum = -math.inf
  findMax(root)
  return max_sum

# Time: O(n) | SPace: O(n)
        