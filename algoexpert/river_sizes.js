// River Sizes

// You are given a two-dimensional array (matrix) of potentially unequal height and width containing only 0s and 1s. Each 0 represents land, and each 1 represents part of a river. A river consists of any number of 1s that are either horizontally or vertically adjacent (but not diagonally adjacent). The number of adjacent 1s forming a river determine its size. Write a function that returns an array of the sizes of all rivers represented in the input matrix. Note that these sizes do not need to be in any particular order.

// GRAPH TRAVERSAL PROBLEM: Will use bfs or dfs to search the nodes to see if they're connected to a with a 0 or 1.
  // If connected to 1s, will keep going to see how large the length of the river is.
  // if connected to 0s, will not keep going because we only want to see how big the rivers are.

// One way is to itterate through the the whole 2D array and then check if its 0 or 1. We need to improve efficiency by when we traverse the nodes, we need to keep track of the nodes we already visited.

const RiverSizes = (matrix) => {
  // initialize new array with the sizes with the end return
  let sizes = [];
  // Create a new matrix to use to check if the node is visited or not. Map through our matrix by rows, then by the individual values and set them to false for not visited.
  visited = matrix.map(row => row.map(value => false));
  //iterate through the rows of the matrix
  for (let i = 0; i < matrix.length; i ++) {
    //itterate through the values of the rows of the matrix
    for (let j = 0; j < matrix[i].length; j++) {
      //if the positions values of the visited matrix is truthy, we will just continue because we visited already.
      if (visited[i][j]) continue;
      //otherwise, we will move through the node to check if the rivers are connected.
      traverseNode(i, j, matrix, visited, sizes);
    }
  }
  //return the final array of the length of islands;
  return sizes;
};

const traverseNode = (i, j, matrix, visited, sizes) => {
  let currentRiverSize = 0;
  //A stack so that the function can explore LIFO;
  const nodesToExplore = [[i, j]];
  //While the nodeToExplore array is filled, means there are still nodes to explore because of connecting to a river.
  while (nodesToExplore.length) {
    //Pop off the last value of the nodeToExplore array to check the position.
    const currentNode = nodesToExplore.pop();
    //sets the row
    i = currentNode[0];
    //sets the column
    j = currentNode[1];
    //if the node is already truthy in the visited array created above, then move to the next position in the loop.
    if (visited[i][j]) continue;
    //otherwise, set the current visited node to true for future searches
      visited[i][j] = true;
    //if the position at the matrix equals 0, then it is an island and not a river, we will continue.
    if (matrix[i][j] === 0) continue;
    //if its a river, we will add it to the current river size.
      currentRiverSize++;
    // for every node that we visit, we will grab the 4 surrounding nodes to check and thus add it to the stack. As long as its a river, we will add i to the stack and run through the whole loop again.
    const unvisitedNeighbors = getUnvisitedNeighbors(i, j, matrix, visited);
    for (const neighbor of unvisitedNeighbors) {
      nodesToExplore.push(neighbor);
    }
  }
  //when the loop is done and we are done traversing through the nodes, we will have the max riversize for that search and then push it to the sizes arrray
  if (currentRiverSize > 0) sizes.push(currentRiverSize);
};

const getUnvisitedNeighbors = (i, j, matrix, visited) => {
  const unvisitedNeighbors = [];
  //if the search position is on the left column and the neighbor above is not visited, then we will push that into the array.
  if (i > 0 && !visited[i - 1][j]) unvisitedNeighbors.push([i - 1, j]);
  //if we are not on the bottom row and we haven't visited the neighbor below us, we will push that into the array to be searched.
  if (i < matrix.length - 1 && !visited[i + 1][j]) unvisitedNeighbors.push([i + 1, j]);
  //if not in the left most column and haven't visited the left neighbor, then push that into the array.
  if (j > 0 && !visited[i][j - 1]) unvisitedNeighbors.push([i, j - 1]);
  //if not in the right most column and haven't visited th right neighbor, we will push that into the array to be searched.
  if (j < matrix[i].length - 1 && !visited[i][j + 1]) unvisitedNeighbors.push([i, j + 1]);
  // Returns an array of nodes that haven't been visited
  return unvisitedNeighbors;
}

// Sample input:
// [
//   [1, 0, 0, 1, 0],
//   [1, 0, 1, 0, 0],
//   [0, 0, 1, 0, 1],
//   [1, 0, 1, 0, 1],
//   [1, 0, 1, 1, 0]
// ]

// Sample output:[1, 2, 2, 2, 5]