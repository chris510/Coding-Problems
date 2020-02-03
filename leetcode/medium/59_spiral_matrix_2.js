// Given a positive integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

//Same thing as the previous spiral matrix, we will create boundaries on the four corners and then populate each element in the matrix with a counter as we increase.

var generateMatrix = function(n) {
  if (!n) return;
  
  let matrix = new Array(n).fill().map(() => new Array(n));
  
  let rowStart = 0;
  let rowEnd = n - 1;
  let colStart = 0;
  let colEnd = n - 1;
  
  let counter = 1;
  
  while (rowStart <= rowEnd && colStart <= rowEnd) {
    
    for (let i = colStart; i <= colEnd; i++) {
      matrix[rowStart][i] = counter++;
    }
    rowStart++;
    
    for (let i = rowStart; i <= rowEnd; i++) {
      matrix[i][colEnd] = counter++;
    }
    colEnd--;
    
    if (rowStart <= rowEnd) {
      for (let i = colEnd; i >= colStart ; i--) {
        matrix[rowEnd][i] = counter++;
      }
    }
    rowEnd--;
    
    if (colStart <= colEnd) {
      for (let i = rowEnd; i >= rowStart; i--) {
        matrix[i][colStart] = counter++;
      }
    }
    colStart++;
  }
  
  return matrix;
};

// Time Complexity: O(n * m); we are traversing through al the rows and columns of the matrix in order to populate it.
// Space Complexity: O(n * m) since we are creating a n*n grid and populating through above.

// Example:

// Input: 3
// Output:
// [
//  [ 1, 2, 3 ],
//  [ 8, 9, 4 ],
//  [ 7, 6, 5 ]
// ]