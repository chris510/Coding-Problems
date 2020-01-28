// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

// Given binary search tree:  root = [6,2,8,0,4,7,9,null,null,3,5]

//We traverse the tree and since we know that the tree is a binary search tree, we can look at the root and check if its greater than or equal to q or p. If q or p is greater, than its on the right side. If its less than, its on the left side. If one is greater and one is less than the current node, then its the current node that is the lowest common ancestor.
//iteratively
var lowestCommonAncestor = function(root, p, q) {
  let node = root;
  
  while (node) {
    if (p.val > node.val && q.val > node.val) {
      node = node.right;
    } else if (p.val < node.val && q.val < node.val) {
      node = node.left;
    } else {
      return node;
    }
  }
  return null;
};

//Linear space and time complexity:

//recursively
var lowestCommonAncestor = function(root, p, q) {
  if (p.val < root.val && q.val < root.val) return lowestCommonAncestor(root.left, p, q);
  if (p.val > root.val && q.val > root.val) return lowestCommonAncestor(root.right, p, q);
  
  return root;
};

// Time Complexity: O(n) where we have to traverse the whole tree;
// Space Complexity: O(n) n stack frames to go through the whole tree.
 

// Example 1:

// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.
// Example 2:

// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
// Output: 2
// Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.