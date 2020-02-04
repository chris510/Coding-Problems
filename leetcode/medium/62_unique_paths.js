// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// How many possible unique paths are there?


// Above is a 7 x 3 grid. How many possible unique paths are there?

// Note: m and n will be at most 100.

// Example 1:

// Input: m = 3, n = 2
// Output: 3
// Explanation:
// From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Right -> Down
// 2. Right -> Down -> Right
// 3. Down -> Right -> Right
// Example 2:

// Input: m = 7, n = 3
// Output: 28

// Use Dynamic Programming where each spot in the grid we find the ways to get to that point of the grid. The top most row and left most column is all 1 because we can only move in that direction when we are traversing from the top left;

var uniquePaths = function(m, n) {
  if (!m && !n) return 0;
  let dp = new Array(m).fill().map(() => new Array(n).fill());
  
  for (let i = 0; i < dp.length; i++) {
    dp[i][0] = 1;
  }
  
  for (let i = 0; i < dp[0].length; i++) {
    dp[0][i] = 1;
  }
  
  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  
  return dp[dp.length - 1][dp[0].length - 1];
};

// Time Complexity: O(n * m) where we traverse through the whole row and column of the matrix;
// Space Complexity: O(n * m) where we keep the matrix the same length row column as the m, n given to us ..