// Doesn't work, uses sorting to make an 'inorder' array so complexity is O(n log n);
// var bstFromPreorder = function(preorder) {
//   if (!preorder) return [];
//   const inorder = preorder.sort((a, b) => a - b);
  
//   const findIndex = (arr, target) => {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === target) {
//         return i;
//       }
//     }
//   }
  
//   const bstHelper = (preorder, inorder) => {
//     if (preorder.length !== inorder.length || !inorder || !preorder || preorder.length === 0) return null;
    
//     const root = preorder[0];
//     rootIndex = findIndex(preorder, root.val);
//     root.left = bstHelper(preorder.slice(1, rootIndex + 1), inorder.slice(rootIndex));
//     root.right = bstHelper(preorder.slice(rootIndex + 1), inorder.slice(rootIndex + 1));
//     return root;
//   }
  
//   return bstHelper(preorder, inorder);
// };

var bstFromPreorder = function(preorder) {
  if (preorder.length === 0) return null;
  if (preorder.length === 1) return new TreeNode(preorder[0]);
  
  const insertNode = (node, val) => {
      if (node === null) return new TreeNode(val) ;
      
      if (val < node.val) {
          node.left = insertNode(node.left, val)
      } else {
          node.right = insertNode(node.right, val)
      }
      return node;
  }
  
  let root = new TreeNode(preorder[0]);
  
  for (let i = 1; i < preorder.length; i++) {
      root = insertNode(root, preorder[i]);      
  }
  
  
  return root;
};

// Time: O(n) | Space: O(n) since we are creating n length tree of n nodes in the preorde .