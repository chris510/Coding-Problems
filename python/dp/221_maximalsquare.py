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

def maximalSquare(self, matrix: List[List[str]]) -> int:
  row = len(matrix)
  if row == 0: return 0
  col = len(matrix[0])
  if col == 0: return 0
  
  dp = [[0 for i in range(col + 1)] for j in range(row + 1)]
  max_square = 0
  
  for i in range(1, row + 1):
    for j in range(1, col + 1):
      if matrix[i - 1][j - 1] == "1":
        top_left = dp[i - 1][j-1]
        left = dp[i - 1][j]
        top = dp[i][j - 1]
        dp[i][j] = min(top_left, left, top) + 1
        max_square = max(max_square, dp[i][j])
  return max_square * max_square
              

              class Solution(object):
      def countSquares(self, matrix):
      if matrix is None or len(matrix) == 0:
        return 0
      rows = len(matrix)
      cols = len(matrix[0])     
      result = 0
      
      for r in range(rows):
             for c in range(cols):
                 if matrix[r][c] == 1:   
                     if r == 0 or c == 0: # Cases with first row or first col
                      result += 1      # The 1 cells are square on its own               
                     else:                # Other cells
                         cell_val = min(matrix[r-1][c-1], matrix[r][c-1], matrix[r-1][c]) + matrix[r][c]
                         result += cell_val
                         matrix[r][c] = cell_val #**memoize the updated result**
         return result  