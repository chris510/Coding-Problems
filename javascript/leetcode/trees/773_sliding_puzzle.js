// On a 2x3 board, there are 5 tiles represented by the integers 1 through 5, and an empty square represented by 0.

// A move consists of choosing 0 and a 4-directionally adjacent number and swapping it.

// The state of the board is solved if and only if the board is [[1,2,3],[4,5,0]].

// Given a puzzle board, return the least number of moves required so that the state of the board is solved. If it is impossible for the state of the board to be solved, return -1.

// Examples:

// Input: board = [[1,2,3],[4,0,5]]
// Output: 1
// Explanation: Swap the 0 and the 5 in one move.
// Input: board = [[1,2,3],[5,4,0]]
// Output: -1
// Explanation: No number of moves will make the board solved.
// Input: board = [[4,1,2],[5,0,3]]
// Output: 5
// Explanation: 5 is the smallest number of moves that solves the board.
// An example path:
// After move 0: [[4,1,2],[5,0,3]]
// After move 1: [[4,1,2],[0,5,3]]
// After move 2: [[0,1,2],[4,5,3]]
// After move 3: [[1,0,2],[4,5,3]]
// After move 4: [[1,2,0],[4,5,3]]
// After move 5: [[1,2,3],[4,5,0]]
// Input: board = [[3,2,4],[1,5,0]]
// Output: 14
// Note:

// board will be a 2 x 3 array as described above.
// board[i][j] will be a permutation of [0, 1, 2, 3, 4, 5].

var slidingPuzzle = function(board) {
  let minMoves = Infinity;
  let seen = new Map();
  let rowLen = board.length;
  let colLen = board[0].length;
  let zero = [0, 0];
  
  for (let row = 0; row < rowLen; row++) {
    for (let col = 0; col < colLen; col++) {
      if (board[row][col] === 0) {
        zero[0] = row;
        zero[1] = col;
        break;
      }
    }
  }
  
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const bfs = (board, x, y, currMoves) => {
    if (currMoves > minMoves) return;
    let code = encodeTarget(board);
    
    // If we match the desired target, we can set the min moves, then change our answer;
    if (code === 123450) {
      minMoves = currMoves;
      return;
    }
    
    if (seen.has(code)) {
      if (currMoves > seen.get(code)) return;
    }
    
    seen.set(code, currMoves); //Sets that code position and smallest code moves to get there
    
    for (let dir of dirs) {
      let nx = x + dir[0];
      let ny = y + dir[1];
      if (nx >= 0 && nx < rowLen && ny >= 0 && ny < colLen) {
        swap(board, x, y, nx, ny);
        bfs(board, nx, ny, currMoves + 1);
        swap(board, nx, ny, x, y);
      }
    }
  }
  
  const swap = (board, x1, y1, x2, y2) => {
    let temp = board[x1][y1];
    board[x1][y1] = board[x2][y2];
    board[x2][y2] = temp;
  }
  
  const encodeTarget = (board) => {
    let code = 0;
    for (let row = 0; row < rowLen; row++) {
      for (let col = 0; col < colLen; col++) {
        code *= 10;
        code += board[row][col];
      }
    }
    return code;
  }
  
  // console.log(encodeTarget(board));
  bfs(board, zero[0], zero[1], 0);
  return minMoves == Infinity ? -1 : minMoves
};

var slidingPuzzle = function(board) {
  let m = board.length;
  let n = board[0].length;
  const visited = new Set();
  let queue = [];
  let target = [];
  
  
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (board[row][col] === 0) {
        queue.push([board, 0, [row, col]]);
      } else {
        target.push(board[row][col]);
      }
    }
  }
  
  target = +getTarget(target, m, n);
  
  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  while (queue.length) {
    const [board, nSteps, [x, y]] = queue.shift();
    if (isSolved(board, target)) return nSteps;
    
    for (const [dx, dy] of dirs) {
      const nx = x + dx;
      const ny = y + dy;
      
      if (isValid(nx, ny, m, n)) {
        const nextBoard = swap(clone(board), x, y, nx, ny);
        const code = createCode(nextBoard);
        if (!visited.has(code)) {
          visited.add(code);
          queue.push([nextBoard, nSteps + 1, [nx, ny]]);
        }
      }
    }
  }
  return -1;
}

const getTarget = (target, m, n) => {
  let targetLen = target.length;
  let totalLen = m * n;
  
  target = target.sort((a, b) => a > b).join('');
  
  for (let i = targetLen; i < totalLen; i++) {
    target *= 10;
  }
  
  return target;
}

const isSolved = (board, target) => {
  const code = createCode(board);
  return code === target;
}

const createCode = (board) => {
  let code = 0;
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[0].length; col++) {
        code *= 10;
        code += board[row][col];
      }
    }
    return code;
}

const isValid = (i, j, m, n) => {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}

const clone = (data) => {
  if (!Array.isArray(data)) {
    return data;
  }
  return data.map((row) => clone(row));
}

function swap(board, x, y, nx, ny) {
  [board[x][y], board[nx][ny]] = [board[nx][ny], board[x][y]];
  return board;
}
