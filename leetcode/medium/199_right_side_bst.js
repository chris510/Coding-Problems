// Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

//To do this with using dfs, we can use a node stack with a depth stack so we will know the depth of each node side by side. Then we will traverse down the node and then look to see what the right most node is because we would push that into the array and then add that to the hash map. Then using the hash map, we will build the final array of the values of the right most values;
var rightSideView = function(root) {
  const rightValueDepth = new Map();
  let maxDepth = -1;
  
  // Would use a link list for add/remove;
  const nodeStack = [root];
  const depthStack = [0];
  
  while (nodeStack.length) {
    let node = nodeStack.shift();
    let depth = depthStack.shift();
    
    if (node) {
      maxDepth = Math.max(maxDepth, depth);
      
      if (!rightValueDepth.has(depth)) {
        rightValueDepth.set(depth, node.val);
      }
      
      nodeStack.push(node.right); //Right first, because the first value will go into the array list
      nodeStack.push(node.left);
      depthStack.push(depth + 1);
      depthStack.push(depth + 1);
    }
  }
  
  let rightVals = new Array();
  for (let depth = 0; depth <= maxDepth; depth++) {
    rightVals.push(rightValueDepth.get(depth));
  }
  
  return rightVals;
};

// Time Complexity: O(n) since we have to traverse through the whole tree and look at each node.
// Space Complexity: O(n) since at most our stack frames will include the entire tree node.


// BFS, you visit each level of the tree and always push the right most value of each level into the results array.

var rightSideView = function(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  
  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      if (i === size - 1) result.push(node.val); // We are only pushing the right most value at each depth;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return result;
};

// Example:

// Input: [1,2,3,null,5,null,4]
// Output: [1, 3, 4]
// Explanation:

//    1            <---
//  /   \
// 2     3         <---
//  \     \
//   5     4       <---

