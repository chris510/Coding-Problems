// Given a non-empty binary search tree and a target value, find the value in the BST that is closest to the target.

// Given target value is a floating point.
// You are guaranteed to have only one unique value in the BST that is closest to the target.

// var closestValue = function(root, target) {
//   return findValue(root, target, Infinity);
// };

// const findValue = (root, target, value) => {
//   if (!root) return value;

//   if (Math.abs(target - value) > Math.abs(target - root.val)) {
//     value = root.val;
//   }

//   if (root.val > target) {
//     return findValue(root.left, target, value);
//   } else if (root.val < target) {
//     return findValue(root.right, target, value);
//   } else {
//     return value;
//   }
// }

// Time Complexity: O(log n) since we are itterating through half the tree on average. Worst case is we itterate through the whole tree.
// Space Complexity: O(log n) since we are using recursion then it takes up O(log n) stack frames

// Lets try to do this itteratively instead;

var closestValue = function(root, target) {
  let value = Infinity;
  
  while (root) {
    if (Math.abs(target -  value) > Math.abs(target - root.val)) {
      value = root.val;
    }
    
    if (target > root.val) {
      root = root.right;
    } else if (target < root.val) {
      root = root.left;
    } else {
      break;
    }
  }
  return value
};

// Time Complexity: O(log n) we will be using binary search to search the tree.
// Space Complexity: O(1) since we are not returning anything besides the value.

// Example:
// Input: root = [4,2,5,1,3], target = 3.714286

//     4
//    / \
//   2   5
//  / \
// 1   3
