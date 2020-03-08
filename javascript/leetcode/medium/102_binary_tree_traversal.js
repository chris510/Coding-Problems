// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// Itteratively

var levelOrder = function(root) {
  if (!root) return [];
  
  let queue = [root];
  let tree = [];
  
  while (queue.length !== 0) {
    let bfsLen = queue.length;
    let level = [];
    for (let i = 0; i < bfsLen; i++) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      level.push(node.val); 
    }
    tree.push(level);
  }
  
  return tree
};

// Time Complexity: O(n) where we traverse the whole tree;
// Space Complexity: O(n) since we are returning a new array with the levels values same length as n.


var levelOrder = function(root) {
  let result = [];
  let level = 0;
  const dfs = (node, level) => {
    if (!node) {
      return;
    } else {
      if (level >= result.length) result[level] = [];
      result[level].push(node.val);
      dfs(node.left, level + 1);
      dfs(node.right, level + 1);
    }
  }

  dfs(root, level);
  return result;
};

//Recurisvely linear time and space complexity

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]
