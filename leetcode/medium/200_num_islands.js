// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input:
// 11110
// 11010
// 11000
// 00000

// Output: 1
// Example 2:

// Input:
// 11000
// 11000
// 00100
// 00011

// Output: 3

// BFS

var numIslands = function(matrix) {
  let number = 0;
  let visited = matrix.map(row => row.map(val => false))

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (visited[i][j]) continue;
      if (matrix[i][j] === "1") {
        traverseMatrix(i, j, matrix, visited);
        number++;
      }
    }
  }
  return number;
};

const traverseMatrix = (i, j, matrix, visited) => {
  const nodesToLook = [[i, j]];

  while (nodesToLook.length) {
    const currNode = nodesToLook.shift(); // [-1,2]
    let i = currNode[0];
    let j = currNode[1];
    if ((i >= 0 && i < matrix.length) && (j >= 0 && j < matrix[i].length) ) {

      if (visited[i][j]) {
        continue
      } else {
        visited[i][j] = true;
      }

      if (matrix[i][j] === "0") {
        continue;
      } else {
        nodesToLook.push([i - 1, j]); //[-1,2]
        nodesToLook.push([i + 1, j]); //[1, 2]
        nodesToLook.push([i, j - 1]); //[0, 1]
        nodesToLook.push([i, j + 1]); //[0, 3]
      }
    }
  }
}

// Time Complexity: O(n * m) where n is the number of rows and m is the number of columns;
// Space Complexity: O(n * m) where n is the number of rows and m is the number of columns;


//DFS

var numIslands = function(grid) {
  let num = 0;
  
  const dfs = (i, j) => {
    if (grid[i][j] === '1') {
      grid[i][j] = 0;
    } else {
      return;
    }
    // Top
    if (i < grid.length - 1) {
      dfs(i + 1, j);
    }
    // Right
    if (j < grid[i].length - 1) {
      dfs(i, j + 1);
    }
    // Left
    if (i > 0 && i < grid.length) {
      dfs(i - 1, j);
    }
    //Bottom
    if (j > 0 && j < grid[i].length) {
      dfs(i, j - 1);
    }
  }
  
   for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        dfs(i, j);
        num++;
      }
    }
  }
  
  return num;
    
};

// Time Complexity: O(n * m) where n is the number of rows and m is the number of columns;
// Space Complexity: O(n * m) where n is the number of rows and m is the number of columns;