// Number of Paths
// You’re testing a new driverless car that is located at the Southwest (bottom-left) corner of an n×n grid. The car is supposed to get to the opposite, Northeast (top-right), corner of the grid. Given n, the size of the grid’s axes, write a function numOfPathsToDest that returns the number of the possible paths the driverless car can take.

// altthe car may move only in the white squares

// For convenience, let’s represent every square in the grid as a pair (i,j). The first coordinate in the pair denotes the east-to-west axis, and the second coordinate denotes the south-to-north axis. The initial state of the car is (0,0), and the destination is (n-1,n-1).

// The car must abide by the following two rules: it cannot cross the diagonal border. In other words, in every step the position (i,j) needs to maintain i >= j. See the illustration above for n = 5. In every step, it may go one square North (up), or one square East (right), but not both. E.g. if the car is at (3,1), it may go to (3,2) or (4,1).

// Explain the correctness of your function, and analyze its time and space complexities.

// Conditions
  // Moves = [0, 1] or [1, 0];
  // Moves are in [i, j]
  // i >= j


function numOfPathsToDest(n) {
  if (n === 1) return 1;
  let count = 0
  let moves = [[0, 1], [1, 0]]
  let pos = [0,0]
  let newPos = []
  let destination = n - 1

  function isValid(pos, n){
    if(pos[0] > n || pos[1] > n) return false;
    if(pos[0] < pos[1]) return false;
    return true;
  }
    
  function findPath(pos){
    for(let i = 0; i < moves.length; i++){
      newPos = [pos[0] + moves[i][0], pos[1] + moves[i][1]]
      if(newPos[0] === destination && newPos[1] === destination){
        count = count + 1
      }
      if(isValid(newPos, n)) findPath(newPos)
    }
  }
   findPath(pos)
   return count
 }

// Intialize the matrix dp with n x n
// have the initial condition dp[0][0] = 1
// have a loop from j 1 to n
// have another loop from i j to n
// dp[i][j] = dp[i][j-1] + dp[i-1][j]


function numOfPathsToDest(n) {
  
  let matrix = [];
  for (let i = 0; i <= n; i++) {
    matrix[i] = [1];
  }
  
  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      let option1 = matrix[i - 1][j] || 0
      let option2 = matrix[i][j - 1] || 0
 
      matrix[i][j] = option1 + option2
    }
  }
  
  return matrix[n-1][n-1] || 1
}

// Time and space complexity of O(n * m);


// Looks like connection lost again
// (4, 4) -> (3, 4), (4, 3)

// [0, 1], [1,0]
// (3, 1) => 3,2 || 4,1

// no negative numbers

// can only move up [0, 1];
// can only move right [1, 0];
// only move once

// starting point = (0, 0)
// n = 4,
// ending point = (3, 3)

//(0, 0) => (4, 4)
//(0, 1) || (1, 0)

//input:  n = 4 // answer = 5

// Example:

// input:  n = 4

// output: 5 # since there are five possibilities:
//           # “EEENNN”, “EENENN”, “ENEENN”, “ENENEN”, “EENNEN”,
//           # where the 'E' character stands for moving one step
//           # East, and the 'N' character stands for moving one step
//           # North (so, for instance, the path sequence “EEENNN”
//           # stands for the following steps that the car took:
//           # East, East, East, North, North, North)
// Constraints:

// [time limit] 5000ms

// [input] integer n

// 1 ≤ n ≤ 100
// [output] integer