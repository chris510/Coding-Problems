
// Move through each value of the array to check if its a 0 or 1.
// If its a 0, we will mark that as 'visited' and then move on to the next.
// If its a 1, we will check the four possible 'children' to see if its a 1 or 0 and will mark as 'visited' or 'unvisited' along the way.
// We will use a stack to push nodes to explore into an array to search as we are traversing each node.

let matrix = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0]
];

const RiverSizes = (matrix) => {
  let sizes = [];

  visited = matrix.map(row => row.map(value => false ));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (visited[i][j]) continue;
      traverseNode(i, j, matrix, visited, sizes)
    }
  }
  return sizes
};

const traverseNode = (i, j, matrix, visited, sizes) => {
  let currentRiverSize = 0;
  let nodesToExplore = [[i, j]];
  while (nodesToExplore.length) {
    let currentNode = nodesToExplore.pop();
    let i = currentNode[0];
    let j = currentNode[1];

    if (visited[i][j]) continue;
      visited[i][j] = true;

    if (matrix[i][j] === 0) continue;;
      currentRiverSize++;

    const unvisitedNeighbors = getUnvisitedNeighbors(i, j, matrix, visited);
    unvisitedNeighbors.forEach(neighbor => {
      nodesToExplore.push(neighbor);
    });
  }
  if (currentRiverSize > 0) sizes.push(currentRiverSize);
};

const getUnvisitedNeighbors = (i, j, matrix, visited) => {
 const unvisitedNeighbors = [];

 if (i > 0 && !visited[i - 1][j]) {
   unvisitedNeighbors.push([i - 1, j])
 }

 if (i < matrix.length - 1 && !visited[i + 1][j]) {
   unvisitedNeighbors.push([i + 1, j])
 }

 if (j > 0 && !visited[i][j - 1]) {
   unvisitedNeighbors.push([i, j - 1])
 }

 if (j < matrix[i].length - 1 && !visited[i][j + 1]) {
  unvisitedNeighbors.push([i, j + 1]);
 }  

 return unvisitedNeighbors;
}

console.log(RiverSizes(matrix).sort());