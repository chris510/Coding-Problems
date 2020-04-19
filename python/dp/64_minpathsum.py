# Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

# Note: You can only move either down or right at any point in time.

# Example:

# Input:
# [
#   [1,3,1],
#   [1,5,1],
#   [4,2,1]
# ]
# Output: 7
# Explanation: Because the path 1→3→1→1→1 minimizes the sum.

def minPathSum(grid):
  if not grid: return 0
  
  row = len(grid)
  col = len(grid[0])

  for i in range(1, col):
    grid[0][i] += grid[0][i - 1]
  
  for i in range(1, row):
    grid[i][0] += grid[i - 1][0]
  
  for i in range(1, row):
    for j in range(1, col):
      grid[i][j] += min(grid[i - 1][j], grid[i][j - 1])
  
  return grid[-1][-1]

# Time: O(n * m) going through the whole matrix
# Space: O(1) since we're using the matrix given
      