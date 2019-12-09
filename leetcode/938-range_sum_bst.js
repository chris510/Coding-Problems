// Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).

// The binary search tree is guaranteed to have unique values.

// Constraints:
// The number of nodes in the tree is at most 10000.
// The final answer is guaranteed to be less than 2^31.

//Trick question maybe because its asking for binary search...? But it seems we are only looking at the root nodes values and it seems like its an array, so we can just add the value at each itteration if it meets the left and right conditions. We know it is unique values. Since we are only looking at the root node, we could see that the array shows the depth of the nodes in terms of values so we will be using depth for search?

// Using a depth for search, we can do this two ways, either recursively or itteratively. Lets start with the recursive method.

const rangeSumBST = (root, L, R) => {
  //Create an object so that we can pass down through the recursive call.
  const payload = {sum: 0}
  // first call on our root
  traverse(root, payload, L, R)
  // return the sum
  return payload.sum;
}

const traverse = (node, obj, L, R) => {
  // if our node is empty then we will return 0; 'return' by it self will return 0;
  if(node == null) return 
  // Every itteration we will check the nodes value whether it is between the range given.
  if(node.val >= L && node.val <= R) obj.sum += node.val
  traverse(node.left, obj, L, R) //Traverse and check the node to the left
  traverse(node.right, obj, L, R) //Traverse and check the node to the right and whether we should add it to our some or not
}

//In the above statement, we are recursively looking at the right and left nodes values and checking if the value is between the two end points that are given to us. If it is between, we will add that until we reach the end which stops.

//Time Complexity: O(n), we have to reach every node in the root that is given to us so the length of the root will determine our time.
//Space Complexity: O(1), no matter how deep our node goes, we will always be keeping track of the sum value so it doesn't change in relation with input size.
