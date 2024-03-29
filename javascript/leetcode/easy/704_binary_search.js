// Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.


// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1
 

// Note:

// You may assume that all elements in nums are unique.
// n will be in the range [1, 10000].
// The value of each element in nums will be in the range [-9999, 9999]

var search = function(nums, target) {
  if (!nums.length) return -1;
   
   let left = 0;
   let right = nums.length - 1;  
   while (left <= right) {
     let mid = Math.floor(left + (right - left) / 2);
     if (nums[mid] === target) {
       return mid;
     } else if (target <nums[mid]) {
       right = mid - 1
     } else {
       left = mid + 1
     }
   }
   
   return -1;
};

var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
    
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (nums[mid] === target) {
      return mid;
    }
    
    // When dividing the roated array into two halves, one must be sorted.
    
    // Check if the left side is sorted
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) {
        // target is in the left
        right = mid - 1;
        
      } else {
        // target is in the right
        left = mid + 1;
      }
    } 
    
    // Otherwise, the right side is sorted
    else {
      if (nums[mid] <= target && target <= nums[right]) {
        // target is in the right
        left = mid + 1;

      } else {
        // target is in the left
        right = mid - 1;
      }
    }
    
    
  }
    
  return -1;
};

// Doing bsearch itteratively is better as you can do it in O(log n) time and constant space while if you do it recursively, its log space and time complexity.
// Time Complexity: O(log n) we are splitting the array in half each time;
// Space Complexity: O(1);
 