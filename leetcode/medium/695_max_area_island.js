// Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */

// We will use bfs as we are traversing the matrix to look for 0 and increase the count whenever we see it.
var maxAreaOfIsland = function(grid) {
  if (!grid.length) return 0;
  const visited = new Array(grid.length).fill().map(() => new Array(grid[0].length).fill(false));
  let maxCount = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        let currCount = traverseNode(i, j, grid, visited);
        maxCount = Math.max(currCount, maxCount);
      }
    }
  }
  return maxCount;
};

const traverseNode = (x, y, grid, visited) => {
  let queue = [[x, y]];
  let count = 0;
  while (queue.length) {
    let [i, j] = queue.shift();

    if (visited[i][j] || !grid[i][j]) continue;
    visited[i][j] = true;

    count++;
    
    
    if (i - 1 >= 0 && i - 1 < grid.length && grid[i - 1][j] !== 0) queue.push([i - 1, j]);
    if (i + 1 >= 0 && i + 1 < grid.length && grid[i + 1][j] !== 0) queue.push([i + 1, j]);
    if (j - 1 >= 0 && j - 1 < grid[i].length && grid[i][j - 1] !== 0) queue.push([i, j - 1])
    if (j + 1 >= 0 && j + 1 < grid[i].length && grid[i][j + 1] !== 0) queue.push([i, j + 1])
    
  }
  
  return count;
}

// Time Complexity: O(n * m) where n and m are the rows respectively
// Space Complexity: O(n * m) n * m rows are created in a visited array to keep track of the nodes we already seen.

// Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

// Example 1:

// [[0,0,1,0,0,0,0,1,0,0,0,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,1,1,0,1,0,0,0,0,0,0,0,0],
//  [0,1,0,0,1,1,0,0,1,0,1,0,0],
//  [0,1,0,0,1,1,0,0,1,1,1,0,0],
//  [0,0,0,0,0,0,0,0,0,0,1,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.
// Example 2:

// [[0,0,0,0,0,0,0,0]]
// Given the above grid, return 0.
// Note: The length of each dimension in the given grid does not exceed 50.