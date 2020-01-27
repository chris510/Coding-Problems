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

// Itteratively

var invertTree = function(root) {
  const queue = [root]
  
  while (queue.length) {
    let node = queue.shift();
    if (node) {
      [node.left, node.right] = [node.right, node.left];
      queue.push(node.left, node.right);
    }
  }
  
  return root;
};

// Time Complexity: O(n) and space is O(n);

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