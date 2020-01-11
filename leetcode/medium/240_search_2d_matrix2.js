// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.

// Use search space reduction to do it in n*m time where we choose the bottom left or top right element of the matrix.

var searchMatrix = function(matrix, target) {
  if (!matrix.length) return false;
  
  let row = 0;
  let col = matrix[0].length - 1;
  
  while (row <= matrix.length - 1 && col >= 0) {
    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] > target) {
      col--;
    } else {
      row++
    }
  }
  return false
};

// Time Compelxity: O(n * m) since we are using search space reduction
// Space Complexity: O(1) we are not returning anything besids a boolean

// We can use
// Example:

// Consider the following matrix:

// [
//   [1,   4,  7, 11, 15],
//   [2,   5,  8, 12, 19],
//   [3,   6,  9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ]
// Given target = 5, return true.

// Given target = 20, return false.