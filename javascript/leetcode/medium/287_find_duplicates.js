// Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

// Thoughtprocess: Since we given an array and know the boundaries of the integers within the array, we can use the cycle finder method with the tortoise and a hare to find whether theres matching duplicates or not. The pointers will eventually meet

var findDuplicate = function(nums) {
  let slow = nums[0];
  let fast = nums[0];
  
  slow = nums[slow];
  fast = nums[nums[fast]]
  
  while (nums[slow] !== nums[fast]) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }
  
  let aPointer = nums[0];
  let bPointer = slow;
  
  while (aPointer !== bPointer) {
    aPointer = nums[aPointer];
    bPointer = nums[bPointer];
  }
  
  return aPointer;
};

// Time Complexity: O(n);
// Space Complexity: O(1);

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
// Accepted