// Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.


//This method, we will itterate once to find where the zeros lay. If there is a zero in anywhere, the col and row of that will beocome 0. We can use extra array to do it itterating twice.

var setZeroes = function(matrix) {
  let rows = new Array(matrix.length).fill(false);
  let cols = new Array(matrix[0].length).fill(false);
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        rows[i] = true;
        cols[j] = true;
      }
    }
  }
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (rows[i] || cols[j]) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix
};

// Time Complexity: O(n * m) where n and my are the lengths of the matrix and sub arrays respectively.
// Space Complexity: O(n * m) same as above.

// Can we do this in constant space?

// Example 1:

// Input: 
// [
//   [1,1,1],
//   [1,0,1],
//   [1,1,1]
// ]
// Output: 
// [
//   [1,0,1],
//   [0,0,0],
//   [1,0,1]
// ]
// Example 2:

// Input: 
// [
//   [0,1,2,0],
//   [3,4,5,2],
//   [1,3,1,5]
// ]
// Output: 
// [
//   [0,0,0,0],
//   [0,4,5,0],
//   [0,3,1,0]
// ]