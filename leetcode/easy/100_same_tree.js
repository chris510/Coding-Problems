// Given two binary trees, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

// We have to traverse both trees that are given and then check if the correspondings values are in the right place. And then if the values are the same we will keep traversing, otherwise it will return false/

// Recursively, we can check if the end result returns null, then if either p is null and q is not and vice versa or the values dont equal each other we can return Q.

var isSameTree = function(p, q) {
  if (!p & !q) return true;
  if ((!p || !q) || p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// Time Complexity: O(n * m) where n is the number of nodes in a tree
// Space Complexity: If the tree is balanced, then O(log n) since we are recursion stack half the tree. If its unbalanced, then its O(n) since we have to go through the whole stack.


// Example 1:

// Input:     1         1
//           / \       / \
//          2   3     2   3

//         [1,2,3],   [1,2,3]

// Output: true
// Example 2:

// Input:     1         1
//           /           \
//          2             2

//         [1,2],     [1,null,2]

// Output: false
// Example 3:

// Input:     1         1
//           / \       / \
//          2   1     1   2

//         [1,2,1],   [1,1,2]

// Output: false