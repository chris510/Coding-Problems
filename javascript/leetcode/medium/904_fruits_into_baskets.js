// In a row of trees, the i-th tree produces fruit with type tree[i].

// You start at any tree of your choice, then repeatedly perform the following steps:

// Add one piece of fruit from this tree to your baskets.  If you cannot, stop.
// Move to the next tree to the right of the current tree.  If there is no tree to the right, stop.
// Note that you do not have any choice after the initial choice of starting tree: you must perform step 1, then step 2, then back to step 1, then step 2, and so on until you stop.

// You have two baskets, and each basket can carry any quantity of fruit, but you want each basket to only carry one type of fruit each.

// What is the total amount of fruit you can collect with this procedure?

// Hash map is always 2 no matter the input length of tree so its constant. The below code does not work because what if [0, 2, 3, 2, 2] return 3 instead of 4

// var totalFruit = function(tree) {
//   if (!tree || !tree.length) return 0;
  
//   let max = 0;
//   let map = new Map();
//   let i = 0;
//   let j = 0;
//   while (j < tree.length) {
//     map.set(tree[j], j++);
    
//     if (map.size > 2) {
//       let min = tree.length - 1;
//       map.forEach((key, val) => {
//         min = Math.min(min, val)
//       })
//       i = min + 1;
//       map.delete(tree[min]);
//     }
    
//   max = Math.max(max, j - i)
//   }
//   return max;
// };

//Sliding Window, we want to keep tract of the last two fruits we saw because we can only have two fruits in our basket. Eveerytime we see the same fruit, then we will increment our current max. If we don't we have to reset our variables to keep track and such. If we see consecutive fruits, then we will have a count to or them to keep going

var totalFruit = function(tree) {
  let max = 0;
  let currMax = 0;
  
  let last = -1;
  let secLast = -1;
  let fruitCount = 0;
  
  for (let fruit of tree) {
    if (fruit === last || fruit === secLast) {
      currMax++;
    } else {
      currMax = fruitCount + 1; //include the current fruit in the new variable
    }
    
    if (fruit === last) {
      fruitCount++
    } else {
      fruitCount = 1;
      secLast = last;
      last = fruit;
    }
    
    max = Math.max(currMax, max);
  }
  
  return max;
};

// Time Complexity: O(n);
// Space Complexity: O(1);
 

// Example 1:

// Input: [1,2,1]
// Output: 3
// Explanation: We can collect [1,2,1].
// Example 2:

// Input: [0,1,2,2]
// Output: 3
// Explanation: We can collect [1,2,2].
// If we started at the first tree, we would only collect [0, 1].
// Example 3:

// Input: [1,2,3,2,2]
// Output: 4
// Explanation: We can collect [2,3,2,2].
// If we started at the first tree, we would only collect [1, 2].
// Example 4:

// Input: [3,3,3,1,2,1,1,2,3,3,4]
// Output: 5
// Explanation: We can collect [1,2,1,1,2].
// If we started at the first tree or the eighth tree, we would only collect 4 fruits.
 

// Note:

// 1 <= tree.length <= 40000
// 0 <= tree[i] < tree.length