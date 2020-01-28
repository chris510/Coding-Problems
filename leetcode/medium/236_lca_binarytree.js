// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

// Given the following binary tree:  root = [3,5,1,6,2,0,8,null,null,7,4]


//Recursively

var lowestCommonAncestor = function(root, p, q) {
  if (!root || !p || !q) return null;
  let res = null;
  const traverseTree = (node, p, q) => {
    if (!node) return false;
    
    let left = traverseTree(node.left, p, q) ? 1 : 0;
    let right = traverseTree(node.right, p, q) ? 1 : 0;
    
    let mid = (node === p || node === q) ? 1 : 0;
    
    if (mid + left + right >= 2) {
      res = node;
    }
    
    return (mid + left + right > 0);
    
  }
  
  traverseTree(root, p, q);
  return res;
};

//Time Complexity: O(n) since we might have to traverse the whole tree with n nodes and not find anything.
// Space Complexity: O(n) Since the tree can be skewed towards side with N height.


 

// Example 1:

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// Output: 3
// Explanation: The LCA of nodes 5 and 1 is 3.
// Example 2:

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
// Output: 5
// Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
 

// Note:

// All of the nodes' values will be unique.
// p and q are different and both values will exist in the binary tree.