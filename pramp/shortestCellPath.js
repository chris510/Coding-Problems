// Shortest Cell Path
// In a given grid of 0s and 1s, we have some starting row and column sr, sc and a target row and column tr, tc. Return the length of the shortest path from sr, sc to tr, tc that walks along 1 values only.

// Each location in the path, including the start and the end, must be a 1. Each subsequent location in the path must be 4-directionally adjacent to the previous location.

// It is guaranteed that grid[sr][sc] = grid[tr][tc] = 1, and the starting and target positions are different.

// If the task is impossible, return -1.

// Examples:

// input:
// grid = [[1, 1, 1, 1], [0, 0, 0, 1], [1, 1, 1, 1]]
// sr = 0, sc = 0, tr = 2, tc = 0
// output: 8
// (The lines below represent this grid:)
// 1111
// 0001
// 1111

// grid = [[1, 1, 1, 1], [0, 0, 0, 1], [1, 0, 1, 1]]
// sr = 0, sc = 0, tr = 2, tc = 0
// output: -1
// (The lines below represent this grid:)
// 1111
// 0001
// 1011

function shortestCellPath(grid, sr, sc, tr, tc) {
  let count = 0;
  const queue = [[sr, sc]];

  while (queue.length) {
    let nodeToExplore = queue.shift();
    let i = nodeToExplore[0];
    let j = nodeToExplore[1];
    if (i >= 0 && i < grid.length && j >= 0 && j < grid[i].length) {
     
      if (grid[i][j] === 0) continue;
      grid[i][j] = 0;

      count++;
      if (i === tr && j === tc ) return count - 1;
      queue.push([i - 1, j]);
      queue.push([i + 1, j]);
      queue.push([i, j + 1]);
      queue.push([i, j - 1]);
      
    }
  }
  return -1;
}

function shortestCellPath(grid, sr, sc, tr, tc) {
  let result = 1000000000;
  const traverse = (currentRow, currentCol, steps)=>{
     if (currentRow === tr && currentCol === tc) {
         result = steps;
         return;
     }
     if (grid[currentRow][currentCol] === 0) return
     grid[currentRow][currentCol] = 0
     if (currentRow + 1 < grid.length && grid[currentRow+1][currentCol] === 1) traverse(currentRow+1, currentCol, steps+1)
     if (currentRow - 1 >= 0 && grid[currentRow-1][currentCol] === 1) traverse(currentRow-1, currentCol, steps+1)
     if (currentCol + 1 < grid[currentRow].length && grid[currentRow][currentCol+1] === 1) traverse(currentRow, currentCol+1, steps+1)
     if (currentCol - 1 >= 0 && grid[currentRow][currentCol-1] === 1) traverse(currentRow, currentCol-1, steps+1)    
  }
  traverse(sr,sc,1)
	// your code goes here
  return result === 1000000000 ? -1 : result -1;
}

// Time Complexity: O(R*C), where R, C are the number of rows and columns in grid. We might visit every square in the grid. It’s worth noting that typically in a breadth-first-search, the time complexity is O(V+E) where V = R * C is the number of nodes in the graph, and E is the number of edges. Since E <= 4*V, this is O(V+E) = O(V) = O(R * C).

// Space Complexity: O(R*C), the space to store queue and seen.
