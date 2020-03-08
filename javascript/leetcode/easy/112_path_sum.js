// Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

// Note: A leaf is a node with no children.

// We can use dfs to recursively take the root and keep subtracting  it from the sum and see if the sum = 0 or not. And if ts 0, we can return true and if its false, we can return false.

var hasPathSum = function(root, sum) {
  if (!root) return false;
  
  if (!root.left && !root.right && sum - root.val === 0) {
    return true
  } else {
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
  }
};

const hasPathSum = (root, sum) => {
  if (!root) return false;
  if (!root.left && !root.right) return sum == root.val; // end of the leaf
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
}

// Time Complexity: O(n) since the worst case is if we traverse the whole tree or all the nodes and we return false and cannot find the path of nodes that matches;
// Space Complexity: O(n); We are only using a stack frame to store the recursive calls so it disappears as we traverse the higher tree.

var hasPathSum = function(root, sum) {
  if (!root) return false;
  
  let queue = [root];
  while (queue.length) {
     let node = queue.shift();
      if (!node.left && !node.right && node.val === sum) return true;
      
      if (node.left) {
          node.left.val += node.val;
          queue.push(node.left);
      }
      
      if (node.right) {
          node.right.val += node.val;
          queue.push(node.right);
      }

  }
  return false;
};

// Time Complexity: O(n) and Space Complexity: O(1) sine we are itterating and not saving any space.

// Example:

// Given the below binary tree and sum = 22,

//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \      \
// 7    2      1
// return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.