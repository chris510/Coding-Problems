// Given a n-ary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

//DFS
var maxDepth = function(root) {
  if (!root) return 0;
  
  let max = 0;
  for (let child of root.children) {
    max = Math.max(max, maxDepth(child));
  }
  return max + 1;
};

// Time Complexity: O(n) we have to go through the whole tree;
// Space Complexity: O(n) worse case since we have to go through the whole tree if its unbalanced but if its balanced then log(n)

// BFS
var maxDepth = function(root) {
  if (!root) return 0 ;
  
  let depth = 0;
  let queue = [root];
  
  while (queue.length) {
    let len = queue.length;
    depth++;
    for (let i = 0; i < len; i++) {
      let currNode = queue.shift();
      for (let child of currNode.children) {
        queue.push(child);
      }
    }

  }
  return depth++;
};

// Time Complexity: O(n) have to traverse the through the whole tree.
// Space Complexity: O(n) have to have the queue the length of the whole tree.