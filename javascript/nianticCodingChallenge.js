/*
        10 
    
  -2          -3 (13)

           16     17
Q1. max sum of a path from root
10 -> -2 = 8
10 -> -3 -> 16 = 23
10 -> -3 -> 17 = 24

Q2. max sum a path from any node to other node

-2 -> 10 -> -3 -> 17 = 22
16 -> -3 -> 17 = 30
10 -> -3 -> 16 -> -3 -> 17 (NO!)
*/

// -2 
// 16 -> -3
// 17 -> -3 

// 10 -> -2 = 8
// 10 -> -3 = 7
// 10 -> -3 -> 16 = 23
// 10 -> -3 -> 17 = 24
function Node(value) {
  this.value = value;
  this.left;
  this.right;
}

  const root = new Node(10);
  root.left = new Node(-2);
  root.right = new Node(-3);
  root.right.left = new Node(16);
  root.right.right = new Node(17);

// given root, we wil traverse the tree
// call recursively on nodes left and right values, and also pass in the sum

const maxPathSum = (root) => {
if (!root) return 0;
let maxSum = -Infinity;

  const traverseTree = (node, sum) => {
    if (!node) return null;
    sum += node.value;
    
    traverseTree(node.left, sum);
    traverseTree(node.right, sum);
    
    maxSum = Math.max(maxSum, sum);
    return sum;
  }

  traverseTree(root, 0); // 10 + 10
  return maxSum;
}

console.log(maxPathSum(root));

const sumFromNode = (root) => {
if (!root) return 0;
let maxSum = 0;

const traverseTree = (node) => {
  if (!node) return null;
  
  let leftSum = traverseTree(node.left);
  let rightSum = traverseTree(node.right);
  
  let curSum = Math.max(node.value + leftSum, node.value + rightSum);
  let rootSum = Math.max(curSum, node.value + leftSum + rightSum)
  maxSum = Math.max(maxSum, rootSum);
  
  return node.value;
}

traverseTree(root);
return maxSum;
}

console.log(sumFromNode(root));

const hello = () => {
console.log("Hello, Py!");
console.log("You're running JavaScript!");
};

hello();