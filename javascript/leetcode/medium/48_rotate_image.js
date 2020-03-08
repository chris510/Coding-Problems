// You are given an n x n 2D matrix representing an image.

// Rotate the image by 90 degrees (clockwise).

// We are going to need to transpose the given matrix, and then reverse the first and last one since it is odd.
var rotate = function(matrix) {
  let len = matrix.length;
  
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len/2; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][len - 1 - j];
      matrix[i][len - 1 - j] = temp;
    }
  }
  return matrix
};

// Time Complexity : O(n^2) where row * columns, or O(n) where n is all the elements in the 2D array
// Space Complexity: O(1) since we are modifying the original array.

// Note:

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// Example 1:

// Given input matrix = 
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],

// rotate the input matrix in-place such that it becomes:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]
// Example 2:

// Given input matrix =
// [
//   [ 5, 1, 9,11],
//   [ 2, 4, 8,10],
//   [13, 3, 6, 7],
//   [15,14,12,16]
// ], 

// rotate the input matrix in-place such that it becomes:
// [
//   [15,13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7,10,11]
// ]