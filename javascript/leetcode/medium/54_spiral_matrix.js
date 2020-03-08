// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

// We will be collapasing the boundary as we itterate through the spiral matrix array.

var spiralOrder = function(matrix) {
  let spiral = [];
  if (!matrix.length) return spiral;
  
  let rowStart = 0;
  let rowEnd = matrix.length - 1;
  let colStart = 0;
  let colEnd = matrix[0].length - 1;
  
  while (rowStart <= rowEnd && colStart <= colEnd) {
      
    for (let i = colStart; i <= colEnd; i++) {
      spiral.push(matrix[rowStart][i]);
    }
    rowStart++;
    
    for (let i = rowStart; i <= rowEnd; i++) {
      spiral.push(matrix[i][colEnd]);
    }
    colEnd--;
    
    if (rowStart <= rowEnd) {
      for (let i = colEnd; i >= colStart; i--) {
        spiral.push(matrix[rowEnd][i]);
      }   
    }
    rowEnd--;
    
    if (colStart <= colEnd) {
      for (let i = rowEnd; i >= rowStart; i-- ) {
        spiral.push(matrix[i][colStart])
      }
    }
    colStart++;
      
  }
  
  return spiral;
};

// Time Complexity: O(n) where n is the number of elements in the 2D spiral array
// Space Complexity: O(n) we have to make a new array with the same number of elements as the original matrix.

// Example 1:

// Input:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:

// Input:
// [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12]
// ]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]