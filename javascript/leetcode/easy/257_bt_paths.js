// Given a binary tree, return all root-to-leaf paths.

// Note: A leaf is a node with no children.

var binaryTreePaths = function(root) {
  if (!root) return [];
  let paths = [];
  
  const dfs = (node, str, paths) => {
    str += node.val;
    if (!node.left && !node.right) paths.push(str);
    
    if (node.left) dfs(node.left, str + "->", paths);
    if (node.right) dfs(node.right, str + "->", paths);
  }
  
  dfs(root, "", paths);
  return paths;
};

// Time Complexity: O(n) we Have to traverse the whole tree;
// Space Complexity: O(n) n stack frames with n nodes

// Example:

// Input:

//    1
//  /   \
// 2     3
//  \
//   5

// Output: ["1->2->5", "1->3"]

// Explanation: All root-to-leaf paths are: 1->2->5, 1->3