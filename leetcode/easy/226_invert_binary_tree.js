// Invert a binary tree.

// Recursively; Time Complexity: O(n) and Space Complexity: O(n) since the stack frames.

var invertTree = function(root) {
  if (!root) return null;
  
  let dfs = (node) => {
    if (!node) return null;
    let right = dfs(node.right);
    let left = dfs(node.left);
    
    node.left = right;
    node.right = left;
    
    return node;
  }
  
  dfs(root);
  return root;
};

// Example:

// Input:

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// Output:

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1