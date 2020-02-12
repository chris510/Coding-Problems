// In a given grid, each cell can have one of three values:

// the value 0 representing an empty cell;
// the value 1 representing a fresh orange;
// the value 2 representing a rotten orange.
// Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.

var orangesRotting = function(grid) {
  let rowLen = grid.length;
  let colLen = grid[0].length;
  let minutes = 0;
  let freshOranges = 0;
  let queue = [];
  
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (grid[i][j] === 1) {
        freshOranges++;
      } else if (grid[i][j] === 2) {
        queue.push([i, j]);
      }
    }
  }
  
  let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  
  while (queue.length && freshOranges) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      let x = node[0];
      let y = node[1];
      
      for (let d = 0; d < directions.length; d++) {
        let nX = x + directions[d][0];
        let nY = y + directions[d][1];
        if (nX < 0 || nX >= rowLen || nY < 0 || nY >= colLen || grid[nX][nY] != 1) continue;
        grid[nX][nY] = 2;
        queue.push([nX, nY])
        freshOranges--;
      }
    }
    minutes++;
  }
  
  return freshOranges ? -1 : minutes;
};

// Time Complexity: O(n) traverse through the whole matrix and n is the number of cells
// Space Complexity: O(n) since we are using bfs and our queue will be the number of cells in the matrix.

 

// Example 1:



// Input: [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4
// Example 2:

// Input: [[2,1,1],[0,1,1],[1,0,1]]
// Output: -1
// Explanation:  The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
// Example 3:

// Input: [[0,2]]
// Output: 0
// Explanation:  Since there are already no fresh oranges at minute 0, the answer is just 0.