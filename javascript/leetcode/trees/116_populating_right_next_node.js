// You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

// Initially, all next pointers are set to NULL.

//Recursive
var connect = function(root) {
  if (!root) return null;
  
  let levelOrderTraverse = (nodeOne, nodeTwo) => {
    if (!nodeOne || !nodeTwo) return;
    
    nodeOne.next = nodeTwo;
    
    levelOrderTraverse(nodeOne.left, nodeOne.right);
    levelOrderTraverse(nodeTwo.left, nodeTwo.right);
    levelOrderTraverse(nodeOne.right, nodeTwo.left);
  }
  
  levelOrderTraverse(root.left, root.right)
  return root;
};

// Time Complexity: O(n) since we are traversing through the whole tree
// Space Complexity: O(n) since we are using n stack frames

//itteratively
var connect = function(root) {
  if (!root) return null;
  
  let queue = [root];
  
  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (i < len - 1) node.next = queue[0];
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return root
};

// Use pointer solution, with every node we can use the next key pointer to check and point the children nodes to the according nodes. If we have the parent we are allowed ot point their children to the respecive nodes.
  // If there is a node.next that means theres two childrens so we have to do firstNode.left points to secondNode.right because of that conjunction.
  
var connect = function(root) {
  if (!root) return null;
  
  let leftMost = root;
  
  while (leftMost.left) {
    let node = leftMost;
    
    while (node) {
      node.left.next = node.right;
      if (node.next) node.right.next = node.next.left;
      node = node.next;
    }
    leftMost = leftMost.left;
  }
  return root 
};

// Time Complexity: O(n);
// Space Complexity: O(1) not using additional data structures and using a pointer method.

 

// Follow up:

// You may only use constant extra space.
// Recursive approach is fine, you may assume implicit stack space does not count as extra space for this problem.
 

// Example 1:



// Input: root = [1,2,3,4,5,6,7]
// Output: [1,#,2,3,#,4,5,6,7,#]
// Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.