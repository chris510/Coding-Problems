// Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

// You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.
// /
// Example 1:

// Input: 
// 	Tree 1                     Tree 2                  
//           1                         2                             
//          / \                       / \                            
//         3   2                     1   3                        
//        /                           \   \                      
//       5                             4   7                  
// Output: 
// Merged tree:
// 	     3
// 	    / \
// 	   4   5
// 	  / \   \ 
// 	 5   4   7
 

// Note: The merging process must start from the root nodes of both trees.

// new TreeNode will create a new node, the values is the argumne thrown into the constructor.
// If we want to create descendents, we could also use node1.descendents.push(node2). node 2 wil be a child of node 1. In a tree node constructor class, descendents is an empty array.
	//Full Binary Trees have exactly two or 0 children but never 
	//Complete Binary trees have all levels filled with nodes besides the last one.
	//Perfect binary trees have all levels filled with nodes including the last one.

const mergeTrees = (t1, t2) => {
	if (t1 && t2) {
		//we will create a new tree node with tree 1's and tree 2's value as the root node.
		const newNode = new TreeNode(t1.val + t2.val);
		//we will merge the nodes at the right and then the left.
		newNode.left = mergeTrees(t1.left, t2.left);
		newNode.right = mergeTrees(t1.right, t2.right);
		//return the nodes
		return newNode;
} 
//if only 1 tree node is present, we will return them.
return t1 || t2;
}

//Time Complexity: O(N * M) becase each binary tree has their own length and we will have to go through each of them to merge the tree.
//Space Compleixty: O(N) because we have to create a new tree to combine everthing into a new place in space.