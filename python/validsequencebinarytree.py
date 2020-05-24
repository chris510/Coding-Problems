# Given a binary tree where each path going from the root to any leaf form a valid sequence, check if a given string is a valid sequence in such binary tree. 

# We get the given string from the concatenation of an array of integers arr and the concatenation of all values of the nodes along a path results in a sequence in the given binary tree.

# Example 1:

# Input: root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,1,0,1]
# Output: true
# Explanation: 
# The path 0 -> 1 -> 0 -> 1 is a valid sequence (green color in the figure). 
# Other valid sequences are: 
# 0 -> 1 -> 1 -> 0 
# 0 -> 0 -> 0
# Example 2:

# Input: root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,0,1]
# Output: false 
# Explanation: The path 0 -> 0 -> 1 does not exist, therefore it is not even a sequence.
# Example 3:

# Input: root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,1,1]
# Output: false
# Explanation: The path 0 -> 1 -> 1 is a sequence, but it is not a valid sequence.
 
# Constraints:

# 1 <= arr.length <= 5000
# 0 <= arr[i] <= 9
# Each node's value is between [0 - 9].

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

def isValidSequence(root, arr):
  if root is None: 
    return len(arr) == 0
  return self.isValid(root, 0, arr)
  
def isValid(self, node, idx, arr):
  if arr[idx] != node.val:
    return False
  
  if idx == len(arr) - 1:
    return node.left == None and node.right == None
  
  return ((node.left != None and self.isValid(node.left, idx + 1, arr)) or
          (node.right != None and self.isValid(node.right, idx +1, arr)))

# Time: O(n) since worse case we traverse the whole tree.
# Space: O(n) length of the tree in stack frames or O(1) if not including the stack frames 