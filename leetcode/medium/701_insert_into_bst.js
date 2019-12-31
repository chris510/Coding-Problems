// Given the root node of a binary search tree (BST) and a value to be inserted into the tree, insert the value into the BST. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

// Note that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.

// We are given a tree and have to traverse it and check the values to see if its greater than or less than our current value.
// BSTs have certain properties; each node must have at most 2 children and everything to the left of that node is less than it and everything to the right is greater than that node.
// We can do this recursively or itteratively, recursively would take up more space because of the stack frames

const insertIntoBST = (root, val) => {
  if (!root) return new TreeNode(val);
  
  let currentNode = root;
  while (currentNode) {
    if (currentNode.val < val) {
      if (currentNode.right === null) {
        currentNode.right = new TreeNode(val);
        break;
      } else {
        currentNode = currentNode.right;
      }
    } else {
      if (currentNode.left === null) {
        currentNode.left = new TreeNode(val);
        break;
      } else {
        currentNode = currentNode.left;
      }
    }
  }
  return root;
};

// Time Complexity: O(n) where n is the length of the tree. We have to traverse the whole tree in the worse case.
// Space Complexity: O(1), since we are modifying the current tree and creating a new node given a tree size. Space stays the same.

// For example, 

// Given the tree:
//         4
//        / \
//       2   7
//      / \
//     1   3
// And the value to insert: 5
// You can return this binary search tree:

//          4
//        /   \
//       2     7
//      / \   /
//     1   3 5
// This tree is also valid:

//          5
//        /   \
//       2     7
//      / \   
//     1   3
//          \
//           4