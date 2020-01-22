// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// Can do recursive or itteratively to traverse the tree and check the corresponding values.

var isSymmetric = function(root) {
  if (!root) return true;
  
  let dfs = (nodeOne, nodeTwo) => {
      if (!nodeOne && !nodeTwo) return true;
      if (!nodeOne || !nodeTwo) return false;
      return (nodeOne.val === nodeTwo.val) 
          && dfs(nodeOne.left, nodeTwo.right)
          && dfs(nodeOne.right, nodeTwo.left)
  }
  
  return dfs(root, root)
};

// Time Complexity: O(n) where n is the whole tree;
// Space Complexity : O(d) where d is the depths of the trees

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
 

// But the following [1,2,2,null,3,null,3] is not:

//     1
//    / \
//   2   2
//    \   \
//    3    3