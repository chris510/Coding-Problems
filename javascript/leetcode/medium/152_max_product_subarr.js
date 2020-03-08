// Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

var maxProduct = function(nums) {
  let currentMax = nums[0];
  let currentMin = nums[0];
  let finalMax = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    let temp = currentMax;
    currentMax = Math.max(Math.max(currentMax * nums[i], currentMin * nums[i]), nums[i]);
    currentMin = Math.min(Math.min(temp * nums[i], currentMin * nums[i]), nums[i]);
    
    if (currentMax > finalMax) finalMax = currentMax;
  }
  return finalMax;
};

// Time Complexity: O(n) since we have to itterate through the whole array.
// Space Complexity O(1);

// Example 1:

// Input: [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.