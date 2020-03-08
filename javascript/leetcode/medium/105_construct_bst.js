// Given preorder and inorder traversal of a tree, construct the binary tree.

// Note:
// You may assume that duplicates do not exist in the tree.

// For example, given

// preorder = [3,9,20,15,7]
// inorder = [9,3,15,20,7]
// Return the following binary tree:

//     3
//    / \
//   9  20
//     /  \
//    15   7

//Use a helper to find the start of the preorder since its the root. Then you use the for loop to find the index in the in order tree. Then you know the in index is the root and -1 is the left tree and + 1 is the right tree.

var buildTree = function(preorder, inorder) {
  return treeHelper(0, 0, inorder.length - 1, preorder, inorder)
};

const treeHelper = (preStart, inStart, inEnd, preorder, inorder) => {
  if (preStart > preorder.length - 1 || inStart > inEnd) return null;
  
  let root = new TreeNode(preorder[preStart]);
  
  let inIndex = 0;
  for (let i = inStart; i <= inEnd; i++) {
    if (root.val === inorder[i]) inIndex = i;
  }
  
  root.left = treeHelper(preStart + 1, inStart, inIndex - 1, preorder, inorder);
  // prestart+ inindex - instart + 1 is where all the right subtrees nodes start.
  root.right = treeHelper(preStart + inIndex - inStart + 1, inIndex + 1, inEnd, preorder, inorder)

  return root;
}
