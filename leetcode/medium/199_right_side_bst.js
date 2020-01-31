// Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

//To do this with using dfs, we can use a node stack with a depth stack so we will know the depth of each node side by side. Then we will traverse down the node and then look to see what the right most node is because we would push that into the array and then add that to the hash map. Then using the hash map, we will build the final array of the values of the right most values;
var rightSideView = function(root) {
  let rightMostValueAtDepth = new Map();
  let maxDepth = -1;
  
  let nodeStack = [];
  let depthStack = [];
  nodeStack.push(root);
  depthStack.push(0);
  
  while (nodeStack.length) {
    let node = nodeStack.shift();
    let depth = depthStack.shift();
    if (node) {
      maxDepth = Math.max(maxDepth, depth);
      
      if (!rightMostValueAtDepth.has(depth)) {
        rightMostValueAtDepth.set(depth, node.val);
      }
      nodeStack.push(node.right);
      nodeStack.push(node.left);
      depthStack.push(depth+1);
      depthStack.push(depth+1);
    }
  }
  // console.log(rightMostValueAtDepth);
  let rightView = new Array();
  for (let depth = 0; depth <= maxDepth; depth++) {
    rightView.push(rightMostValueAtDepth.get(depth));
  }
  return rightView
};

// Time Complexity: O(n) since we have to traverse through the whole tree and look at each node.
// Space Complexity: O(n) since at most our stack frames will include the entire tree node.

// Example:

// Input: [1,2,3,null,5,null,4]
// Output: [1, 3, 4]
// Explanation:

//    1            <---
//  /   \
// 2     3         <---
//  \     \
//   5     4       <---


// var rightSideView = function(root) {
//     const result = [];
//     const queue = [];
    
//     if (root === null) return result;
    
//     queue.push(root);
//     while(queue.length !== 0) {
//         let size = queue.length;
//         for (let i = 0; i < size; i++) {
//             let n = queue.shift();
//             if (i === size - 1) result.push(n.val);
//             if (n.left !== null) queue.push(n.left);
//             if (n.right !== null) queue.push(n.right);
//         }
//     }
    
//     return result;
// };