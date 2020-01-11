// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.

//Thoughtprocess: Since we know the array is sorted, we can use pointers to itterate through the matrix to find the target.
//We can always check the last value of each subarray to see if its greater than the target, then that target is in its row. If its less than that tget, that means its in the corresponding row.

var searchMatrix = function(matrix, target) {
  if (!matrix.length) return false
  let row = 0;
  let col = matrix[row].length - 1;;
  
  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] > target) {
      col--;
    } else {
      row++;
    }
  }
  return false;
};

// Time Complexity: O(n * m) where is the matrix length and m is the largest length of the sub array;
// Space Complexity: O(1) since we are just traversing the matrix and not saving anything;

// Example 1:

// Input:
// matrix = [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// target = 3
// Output: true
// Example 2:

// Input:
// matrix = [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// target = 13
// Output: false