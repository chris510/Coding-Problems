# Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

# Example:

# Input: 

# 1 0 1 0 0
# 1 0 1 1 1
# 1 1 1 1 1
# 1 0 0 1 0

# Output: 4

def maximalSquare(self, matrix: List[List[str]]) -> int:
  row = len(matrix)
  if row == 0: return 0
  col = len(matrix[0])
  if col == 0: return 0
  
  max_square = 0
  dp = [0] * col
  diag = matrix[0][0] == '0' and 0 or 1
  
  for i in range(row):
    for j in range(col):
      temp = dp[j]
      if i == 0 or j == 0:
        if matrix[i][j] == '1':
          dp[j] = 1
          max_square = max(max_square, dp[j])
        else:
          dp[j] = 0
      else:
        if matrix[i][j] == '1':
          dp[j] = 1 + min(min(dp[j], dp[j - 1]), diag)
          max_square = max(max_square, dp[j])
        else:
          dp[j] = 0
      diag = (j == col - 1) and dp[0] or temp
      
  return max_square * max_square

# Time: O(n * m) | Space: O(n)