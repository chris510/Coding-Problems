// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: [1,2,3,4,5,6,7] and k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: [-1,-100,3,99] and k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]
// Note:

// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
// Could you do it in-place with O(1) extra space?

var rotate = function(nums, k) {
  let i = 0;
  while (i < k) {
    let rotateNum = nums.pop();
    nums.unshift(rotateNum);
    i++;
  }
  return nums;
};

// Time Complexity: O(n) where k is the length of how many times we have to loop. Adding and removing elements into an array is O(n) since we have to shift the spots by n.length each time
// Space Complexity: O(1) constant as we are modifying the input array

var rotate = function(nums, k) {
  k %= nums.length;
  
  const reverse = (nums, i, j) => {
    while (i < j) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j--;
    }
  }
  
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1)
  
  return nums;
};

//Using the reversing method is a lot faster as shift and unshifting requires the array elements to be moved again after.
// Time Complexity: O(n);
// Space Comeplexity: O(1);