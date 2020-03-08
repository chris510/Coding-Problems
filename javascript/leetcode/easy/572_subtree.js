// Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

//What we want to do is traverse down the root node, and then traverse down the left tree of s and the right to try to find value that matches. If the value matches, we will continue traversing down that node and then return true if we find the match.

var isSubtree = function(s, t) {
   if (!s || !t) return !t;
   
   return checkTrees(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
 };
 
const checkTrees = (root1, root2) => {
if (!root1 || !root2) return !root1 && !root2
if (root1.val !== root2.val) return false;
return checkTrees(root1.left, root2.left) && checkTrees(root1.right, root2.right)
}

// Time Complexity: O(n * m) where n *m and we have to worst case travel through both of the trees;
// Space Complexity: O(n) since n stack frames.

// Example 1:
// Given tree s:

//      3
//     / \
//    4   5
//   / \
//  1   2
// Given tree t:
//    4 
//   / \
//  1   2
// Return true, because t has the same structure and node values with a subtree of s.
// Example 2:
// Given tree s:

//      3
//     / \
//    4   5
//   / \
//  1   2
//     /
//    0
// Given tree t:
//    4
//   / \
//  1   2
// Return false.