// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

const minPathSum = (grid) => {
  //initiate a new array with the same length as the grid
  let table = new Array(grid.length).fill().map(() => new Array(grid[0].length).fill(Infinity));
  // Set the value of our starting point
  table[0][0] = grid[0][0]

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      //move towards the top 
      if (i < grid.length - 1) {
        table[i + 1][j] = Math.min(table[i][j] + grid[i+1][j], table[i+1][j]);
      }
      // moving towards the right
      if (j < grid[i].length - 1) {
        //choose whats already stored or the right now path.
        table[i][j + 1] = Math.min(table[i][j] + grid[i][j+1], table[i][j+1]);
      }
    }
  }
  return table[grid.length - 1][grid[0].length - 1];
}

// Time Complexity: O(n * m) traverse through the whole matrix;
// Space Complexity: O(n * m) we have to keep dp of the whole matrix to compare to.

var minPathSum = function(grid) {
  if (!grid || !grid.length) return 0;
  let dp = new Array(grid.length).fill().map(() => new Array(grid[0].length).fill(Infinity));
  dp[0][0] = grid[0][0];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (i < grid.length - 1) {
        dp[i + 1][j] = Math.min(dp[i][j] + grid[i + 1][j], dp[i + 1][j]);
      }
      
      if (j < grid[i].length -1) {
        dp[i][j + 1] = Math.min(dp[i][j] + grid[i][j + 1], dp[i][j + 1])
      }
      
    }
  }
  return dp[dp.length - 1][dp[0].length - 1];
};

// Time Complexity: O(n * m) traverse through the whole matrix;
// Space Complexity: O(n * m) we have to keep dp of the whole matrix to compare to.


const input = [
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
console.log(minPathSum(input)); // 7