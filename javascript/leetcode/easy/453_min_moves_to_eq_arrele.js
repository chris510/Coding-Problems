// Given a non-empty integer array of size n, find the minimum number of moves required to make all array elements equal, where a move is incrementing n - 1 elements by 1.

//Thoughtprocess: So the idea of finding the minimum number of moves to make all elements equal is the same as decerementing a single element by one till we get the min value we want.

// We can use a loop to find the min value and then find the number of moves that it takes for each element to get to that number and then add it.

var minMoves = function(nums) {
  let moves = 0
  let min = Infinity;
  
  for (let i = 0; i < nums.length; i++) {
    min = Math.min(min, nums[i]);
  }
  
  for (let i = 0; i < nums.length; i++) {
    moves += nums[i] - min;
  }
  return moves;
};

// Example:

// Input:
// [1,2,3]

// Output:
// 3

// Explanation:
// Only three moves are needed (remember each move increments two elements):

// [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]