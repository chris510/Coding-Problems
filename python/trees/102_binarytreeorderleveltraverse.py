# Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

# For example:
# Given binary tree [3,9,20,null,null,15,7],
#     3
#    / \
#   9  20
#     /  \
#    15   7
# return its level order traversal as:
# [
#   [3],
#   [9,20],
#   [15,7]
# ]

from collections import deque
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
def levelOrder(root):
  if not root:
    return []
  order = []
  queue = deque([root])
  
  while queue:
    queue_len = len(queue)
    level = []
    for i in range(queue_len):
      node = queue.popleft()
      level.append(node.val)
      if node.left:
        queue.append(node.left)
      if node.right:
        queue.append(node.right)
    order.append(level)
  return order

def levelOrder(self, root):
  order = []
  def dfs(node, level):
    if not node:
      return
    if len(order) == level:
      order.append([])
      
    order[level].append(node.val)
    
    dfs(node.left, level + 1)
    dfs(node.right, level + 1)

  
  dfs(root, 0)
  return order
        