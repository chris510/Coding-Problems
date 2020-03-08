// Largest Smaller BST Key
// Given a root of a Binary Search Tree (BST) and a number num, implement an efficient function findLargestSmallerKey that finds the largest key in the tree that is smaller than num. If such a number doesn’t exist, return -1. Assume that all keys in the tree are nonnegative.

// Analyze the time and space complexities of your solution.

// For example:

// For num = 17 and the binary search tree below:

// if (!this.root.key) return -1;
// let largest = -1;
// if (this.root.key < num) largest = this.root.key;

// let node = this.root;
// while (node) {
  
//   if (this.root.left && this.root.left.key < num) {
//     if (this.root.left.key > largest) {
//       largest = this.root.left.key
//     }
    
//    this.root = this.root.left;
    
//   } else if (this.root.right && this.root.right.key < num) {
    
//     if (this.root.right.key > largest) {
//       largest = this.root.right.key
//     }
    
//     node = node.right;
//   }
// }

// return largest;

// let result = -1;
// const traverse = (node)=> {
//     if (node === null) return
//     if (node.key > result && node.key < num) result = node.key;
//     if (node.left && num < node.key) traverse(node.left)
//     if (node.right && num > node.key) traverse(node.right)
//  }
// traverse(this.root);
// return result