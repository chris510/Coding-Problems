// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Note: A leaf is a node with no children.

// Example:

// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its depth = 3.

var maxDepth = function(root) {
  let maxDepth = 0;
  
  const traverse = (node, currentDepth) => {
    if (!node) {
      maxDepth = Math.max(currentDepth - 1, maxDepth);
    } else {
      traverse(node.left, currentDepth + 1);
      traverse(node.right, currentDepth + 1);
    }
  }
  traverse(root, 1);
  return maxDepth;
};

// Time Complexity : O(n) we have to traverse through the whole tree and get the max depth;
// Space Complexity : O(1) just returning a constant variable
