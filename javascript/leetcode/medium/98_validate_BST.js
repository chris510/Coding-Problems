// Given a binary tree, determine if it is a valid binary search tree (BST).

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Traverse the tree itteratively or recursively while checking if if it meets thre bst requirements and properties..

var isValidBST = function(root) {
  return validateBST(root, -Infinity, Infinity);
};

const validateBST = (node, minVal, maxVal) => {
  if (!node) return true;
  if (node.val <= minVal || node.val >= maxVal) return false;
  
  let leftisValid = validateBST(node.left, minVal, node.val);
  let rightisValid = validateBST(node.right, node.val, maxVal);
  return leftisValid && rightisValid
}

// Time Complexity: O(n) since we are traversing through the whole tree.
// Space Complexity: O(d) where the stack frames are how deep the tree goes in depth.

 

// Example 1:

//     2
//    / \
//   1   3

// Input: [2,1,3]
// Output: true
// Example 2:

//     5
//    / \
//   1   4
//      / \
//     3   6

// Input: [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.