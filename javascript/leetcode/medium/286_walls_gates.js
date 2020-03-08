// You are given a m x n 2D grid initialized with these three possible values.

// -1 - A wall or an obstacle.
// 0 - A gate.
// INF - Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.
// Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.

var wallsAndGates = function(rooms) {
  if (!rooms) return;
  
  for (let i = 0; i < rooms.length; i++) {
    for (let j = 0; j < rooms[i].length; j++) {
      if (rooms[i][j] === 0) dfs(i, j, rooms, 0);
    }
  }
  return rooms;
};

const dfs = (i, j, rooms, dist) => {
  
  if (i < 0 || i >= rooms.length || j < 0 || j >= rooms[0].length) return;
  if (rooms[i][j] < dist) return
  
  rooms[i][j] = dist;
  
  dfs(i + 1, j, rooms, dist + 1);
  dfs(i - 1, j, rooms, dist + 1);
  dfs(i, j + 1, rooms, dist + 1);
  dfs(i, j - 1, rooms, dist + 1);
}

// Time Complexity: O(n * m) where n are the number of rows and m are the number of columns
// Space Complexity: O(n * m) same logic as above but stacks 

// Example: 

// Given the 2D grid:

// INF  -1  0  INF
// INF INF INF  -1
// INF  -1 INF  -1
//   0  -1 INF INF
// After running your function, the 2D grid should be:

//   3  -1   0   1
//   2   2   1  -1
//   1  -1   2  -1
//   0  -1   3   4