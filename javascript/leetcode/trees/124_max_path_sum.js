// Given a non-empty binary tree, find the maximum path sum.

// For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

// For this probelm we will call recursively the left and right of the root node so that we can calculate the largest value of the sides of the tree and then compare that as we go back up for the stack frames.

var maxPathSum = function(root) {
  let maxSum = -Infinity;
  
  const pathSum = (node) => {
    if (!node) return 0;
    let left = Math.max(0, pathSum(node.left));
    let right = Math.max(0, pathSum(node.right));
    maxSum = Math.max(maxSum, left + right + node.val);
    return Math.max(left, right) + node.val;
  }
  
  pathSum(root);
  return maxSum;
};

// Time Complexity: O(n) since we are traversing throguh the whole tree;
// Space Complexity: O(log n) where n is the height of the tree.

// Example 1:

// Input: [1,2,3]

//        1
//       / \
//      2   3

// Output: 6
// Example 2:

// Input: [-10,9,20,null,null,15,7]

//    -10
//    / \
//   9  20
//     /  \
//    15   7

// Output: 42