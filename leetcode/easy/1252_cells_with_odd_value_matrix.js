// Given n and m which are the dimensions of a matrix initialized by zeros and given an array indices where indices[i] = [ri, ci]. For each pair of [ri, ci] you have to increment all cells in row ri and column ci by 1.

// Return the number of cells with odd values in the matrix after applying the increment to all indices.

// Constraints:

// 1 <= n <= 50
// 1 <= m <= 50
// 1 <= indices.length <= 100
// 0 <= indices[i][0] < n
// 0 <= indices[i][1] < m

var oddCells = function(n, m, indices) {
  let matrix = new Array(n).fill().map(() => new Array(m).fill(0));

  indices.forEach(index => {
    let row = index[0];
    let col = index[1];

    for (let i = 0; i < n; i++) {
      matrix[i][col]++;
    }

    for (let j = 0; j < m; j++) {
      matrix[row][j]++;
    }
  })

  return findOdds(matrix);
};

const findOdds = (array) => {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] % 2 !== 0) count++;
    }
  }
  return count;
}

// Time Complexity : O(n^2) we have to itterate through the numbers with a nested loop to increment. And we can't keep track of odd indices unless we finish the first loop
// Space Complexity : O(n), the length of our new input array is linear and proportion to the length of the input.

console.log(oddCells(2, 3, [[0,1],[1,1]])); // 6
console.log(oddCells(2, 2, [[1,1],[0,0]])); // 0
// console.log(oddCells(2, 2, [[1,1],[0,0]])) // 0

// Input: n = 2, m = 3, indices = [[0,1],[1,1]]
// Output: 6

// Explanation: Initial matrix = [[0,0,0],[0,0,0]].
// After applying first increment it becomes [[1,2,1],[0,1,0]].

// The final matrix will be [[1,3,1],[1,3,1]] which contains 6 odd numbers.
// Input: n = 2, m = 2, indices = [[1,1],[0,0]]
// Output: 0
// Explanation: Final matrix = [[2,2],[2,2]]. There is no odd number in the final matrix.