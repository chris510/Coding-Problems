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

var setZeroes = function(matrix) {
  let rowHasZero = false;
  let colHasZero = false;
  let rowLen = matrix.length;
  let colLen = matrix[0].length
  for (let i = 0; i < rowLen; i++) {
    if (!matrix[i][0]) {
      rowHasZero = true;
      break;
    }
  }
  // check col for 0
  for (let j = 0; j < colLen; j++) {
    if (!matrix[0][j]) {
      colHasZero = true;
      break;
    }
  }
  // sets first row and col for 0.
  for (let i = 0; i <rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      } 
    }
  }
  // go through and check the rows and cols for 0
  for (let i=1; i < rowLen; i++) {
    for (let j=1 ;j < colLen ;j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }
  // change the first row if theres a 0 in it
  if (rowHasZero) {
    for (let i = 0; i < rowLen; i++) {
      matrix[i][0] = 0;
    }
  }
  //change the first col if theres a 0 init.
  if (colHasZero) {
    for (let j = 0; j < colLen; j++) {
      matrix[0][j] = 0;
    }
  }
  return matrix;
};

// Time Complexity: O(n * m) where n and are the lengths of the main and sub array respectively;
// Space Complexity: O(1) since we are using the first row and column as the 'true' and 'false' to indicate which ones we need to switch 0's. We don't use extrra space


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


// Use the first row and first column as a temporary marker
// Use matrix[0][0] as a marker to see if the first row is zero
// Use colZero as a marker to see if the first column is zero
// var setZeroes = function(matrix) {
//     let colZero = false;
//     for (let i=0;i<matrix.length;i++) {

//         if (matrix[i][0]==0) {
//             colZero = true;
//         }

//         for (let j=1;j<matrix[0].length;j++) {
//             if (matrix[i][j]==0) {
//                 matrix[i][0] = 0;
//                 matrix[0][j] = 0;
//             }
//         }
//     }

//     for (let i=1;i<matrix.length;i++) {
//         for (let j=1;j<matrix[0].length;j++) {
//             if (matrix[i][0]==0 || matrix[0][j]==0) {
//                 matrix[i][j] = 0;
//             }
//         }
//     }

//     if (colZero) {
//         for (let i=0;i<matrix.length;i++) {
//             matrix[i][0] = 0;
//         }
//     }

//     if (matrix[0][0]==0) {
//         for (let i=0;i<matrix[0].length;i++) {
//             matrix[0][i] = 0;
//         }
//     }
// }