# Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

# Example 1:

# Input:
# 11110
# 11010
# 11000
# 00000

# Output: 1
# Example 2:

# Input:
# 11000
# 11000
# 00100
# 00011

# DFS solution, but can also use a queue using bfs.

class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
      if not grid:
        return 0
      
      count = 0
      for i in range(len(grid)):
        for j in range(len(grid[0])):
          if grid[i][j] == "1":
            self.dfs(grid, i, j)
            count += 1
      return count
    
    def dfs(self, grid, i, j):
      if i < 0 or i >= len(grid) or j < 0 or j >= len(grid[0]) or grid[i][j] != "1":
        return
      grid[i][j] = "0"
      self.dfs(grid, i + 1, j)
      self.dfs(grid, i - 1, j)
      self.dfs(grid, i, j + 1)
      self.dfs(grid, i, j - 1)

# Time: O(n * m) where n and mr are rows and columns of the matrix respectively
# Time: O(n * m) n and m rows and columns for the recursive stack.

# BFS METHOD
# from collections import deque
# class Solution:
#     def numIslands(self, grid: List[List[str]]) -> int:
#         count = 0
        
#         for i in range(len(grid)):
#           for j in range(len(grid[0])):
#             if grid[i][j] == "1":
#               queue = deque([(i, j)])
#               count += 1
              
#               while queue:
#                 x, y = queue.popleft()
#                 if x < 0 or x >= len(grid) or y < 0 or y >= len(grid[x]) or grid[x][y] != "1":
#                   continue
#                 grid[x][y] = "0"
#                 queue.append((x + 1, y))
#                 queue.append((x - 1, y))
#                 queue.append((x, y - 1))
#                 queue.append((x, y + 1))
                
        
#         return count