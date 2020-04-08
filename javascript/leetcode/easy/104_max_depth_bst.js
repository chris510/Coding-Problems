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

var maxDepth = function(root) {
  if (!root) return 0;
  
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};

// Time Complexity : O(n) we have to traverse through the whole tree and get the max depth;
// Space Complexity : O(n) if the tree is unbalanced, then the recursion calls would take O(n) times but the best case is when it is balanced and 

const maxDepth = root => {
  if (!root) {
    return 0;
  }
  let max = 0;
  const nodes = [{node: root, depth: 1}];   // stack for dfs
  while (nodes.length) {
    const {depth, node} = nodes.pop();
    max = Math.max(depth, max);
    if (node.left) {
        nodes.push({depth: depth + 1, node: node.left});
    }
    if (node.right) {
        nodes.push({depth: depth + 1, node: node.right});
    }
  }
  return max;
}

var maxDepth = function(root) {
  if (!root) return 0;
  
  return Math.max(maxDepth(root.right), maxDepth(root.left)) + 1;
};