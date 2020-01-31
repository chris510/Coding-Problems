// Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

//Can use a hashmap to find it in linear time and linear space.
//Can also sort the array and itterate through for n log n time constant space

var findDuplicate = function(nums) {
  nums.sort((a, b) => a - b);

for (let i = 0; i < nums.length; i++) {
  if (nums[i] === nums[i + 1]) return nums[i];
}
return -1;
};

// Slow fast technique with tortoise and hare doing this in linear time and constant space;
var findDuplicate = function(nums) {
  if (!nums.length) return -1;
  
  let slow = nums[0];
  let fast = nums[0];
  
  slow = nums[slow];
  fast = nums[nums[fast]];
  
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }
  
  slow = nums[0];
  
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast]
  }
  
  return slow;
};

// Time Complexity: O(n)
// Space Complexity: O(1) only using pointeres

// Example 1:

// Input: [1,3,4,2,2]
// Output: 2
// Example 2:

// Input: [3,1,3,4,2]
// Output: 3
// Note:

// You must not modify the array (assume the array is read only).
// You must use only constant, O(1) extra space.
// Your runtime complexity should be less than O(n2).
// There is only one duplicate number in the array, but it could be repeated more than once.