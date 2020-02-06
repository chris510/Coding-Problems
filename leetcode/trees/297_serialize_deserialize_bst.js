// Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

// Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

//We will use a queue to create the serialize form of a bst. We want to push each node intot the queue and check if its a node or not. If its not we will push in null to fill the tree and making sure theres no value.

var serialize = function(root) {
  const res = [];
  const queue = root ? [root] : [];
  while (queue.length) {
      let node = queue.shift();
      if (node) {
        res.push(node.val);
        queue.push(node.left || null);
        queue.push(node.right || null);
      } else {
        res.push(null);
      }
  }
  while (res[res.length - 1] === null) res.pop();
  return JSON.stringify(res);
};

//Deserialize we will also use a queue and create a new treenode and parse through the data and check if there is a value within the node. If so we will create a tree node and then tie it into the the new tree node we are making.

var deserialize = function(data) {
  const arr = JSON.parse(data);
  if (!arr.length) return null;
  const root = new TreeNode(arr.shift());
  const queue = [root];
  while (queue.length) {
    let node = queue.shift(), val;
    node.left = (val = arr.shift()) || val === 0 ? new TreeNode(val) : null;
    node.right = (val = arr.shift()) || val === 0 ? new TreeNode(val) : null;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return root;
};

//We will use a queue and then

// Example: 

// You may serialize the following tree:

//     1
//    / \
//   2   3
//      / \
//     4   5

// as "[1,2,3,null,null,4,5]"
// Clarification: The above format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

// Note: Do not use class member/global/static variables to store states. Your serialize and deserialize algorithms should be stateless.