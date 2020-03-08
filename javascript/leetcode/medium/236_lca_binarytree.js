// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

// Given the following binary tree:  root = [3,5,1,6,2,0,8,null,null,7,4]


//Recursively
// Start traversing the tree from the root node.
// If the current node itself is one of p or q, we would mark a variable mid as True and continue the search for the other node in the left and right branches.
// If either of the left or the right branch returns True, this means one of the two nodes was found below.
// If at any point in the traversal, any two of the three flags left, right or mid become True, this means we have found the lowest common ancestor for the nodes p and q.

var lowestCommonAncestor = function(root, p, q) {
  if (!root || !p || !q) return null;
  let res = null;
  const traverseTree = (node, p, q) => {
    if (!node) return false;
    
    let left = traverseTree(node.left, p, q) ? 1 : 0;
    let right = traverseTree(node.right, p, q) ? 1 : 0;
    
    let mid = (node === p || node === q) ? 1 : 0;
    
    if (mid + left + right >= 2) res = node;
    return (mid + left + right > 0);
  }
  
  traverseTree(root, p, q);
  return res;
};

//itteratively
// Start from the root node and traverse the tree.
// Until we find p and q both, keep storing the parent pointers in a dictionary.
// Once we have found both p and q, we get all the ancestors for p using the parent dictionary and add to a set called ancestors.
// Similarly, we traverse through ancestors for node q. If the ancestor is present in the ancestors set for p, this means this is the first ancestor common between p and q (while traversing upwards) and hence this is the LCA node.

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