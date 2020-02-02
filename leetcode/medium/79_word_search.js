// Given a 2D board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Traverse the matrix using depth first search to find the corresponding letters while keeping a count variable to see what character we are on. If we reach the end of the word legnth then we know we reache dthe end, otherwise its false and we don't have to check the letter cause it doens't match. In order for us to traverse, we need to match the three conditions.

var exist = function(board, word) {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] === word[0] && check(row, col, 0, board, word)) {
        return true;
      }
    }
  }
  return false;
};

const check = (row, col, count, board, word) => {
  if (row < 0 || col < 0 || row >= board.length || col >= board[0].length) return false;
  if (board[row][col] != word[count]) return false;
  if (count == word.length - 1 ) return true;
  
  let temp = board[row][col];
  board[row][col] = ' ';
  let found = check(row + 1, col, count + 1, board, word)
           || check(row - 1, col, count + 1, board, word)
           || check(row, col + 1, count + 1, board, word)
           || check(row, col - 1, count + 1, board, word);
  
  board[row][col] = temp;
  return found 
}

// Time Complexity: O(n * m) where n and m are the rows an cols or O(n) where n is the number of cells on the board on the worst case
// Space Complexity: O(n * m) we are modifying board in place but the stack of recursive calls is the entire board

// Example:

// board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]

// Given word = "ABCCED", return true.
// Given word = "SEE", return true.
// Given word = "ABCB", return false.