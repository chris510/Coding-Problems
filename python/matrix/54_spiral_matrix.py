# Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

# Example 1:

# Input:
# [
#  [ 1, 2, 3 ],
#  [ 4, 5, 6 ],
#  [ 7, 8, 9 ]
# ]
# Output: [1,2,3,6,9,8,7,4,5]
# Example 2:

# Input:
# [
#   [1, 2, 3, 4],
#   [5, 6, 7, 8],
#   [9,10,11,12]
# ]
# Output: [1,2,3,4,8,12,11,10,9,5,6,7]

class Solution(object):
    def spiralOrder(self, matrix):
      if matrix == []:
        return matrix
      result = []
      row_start = 0
      row_end = len(matrix) - 1
      col_start = 0
      col_end = len(matrix[0]) - 1
      
      while row_start <= row_end and col_start <= col_end:
        for i in range (col_start, col_end + 1):
          result.append(matrix[row_start][i])
        row_start += 1
        
        for i in range(row_start, row_end + 1):
          result.append(matrix[i][col_end])
        col_end -= 1
        
        if row_start <= row_end:
          for i in range(col_end, col_start - 1, -1):
            result.append(matrix[row_end][i])
          row_end -= 1
          
        if col_start <= col_end:
          for i in range(row_end, row_start - 1, -1):
            result.append(matrix[i][col_start])
          col_start += 1
        
      return result
        
# Time: O(N) where n is the number of elements
# Space: O(N) where n is the number of elements

# def spiralOrder(self, matrix):
#     ret = []
#     while matrix:
#         ret += matrix.pop(0)
#         if matrix and matrix[0]:
#             for row in matrix:
#                 ret.append(row.pop())
#         if matrix:
#             ret += matrix.pop()[::-1]
#         if matrix and matrix[0]:
#             for row in matrix[::-1]:
#                 ret.append(row.pop(0))
#     return ret

# Can mutate the matrix as we are itterating through everything to append to the array
      
      