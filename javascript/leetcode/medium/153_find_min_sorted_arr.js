// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

// Find the minimum element.

// You may assume no duplicate exists in the array.

// Thoughtprocess: We will be using binary search to find the minimum value of log n time and constant space. We will use left and right boundaries to look for the constant mid point and check if its greater than or less than the outer boundaries. If the midpoint is less than the right, then we know that the right is sorted and the left is not sorted and vice versa

var findMin = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  
  while (left < right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left];
};

// Time Complexity: O(log n) we are using binary search to look through half the input array at each itteration.
// Space Complexity: O(1);

// Example 1:

// Input: [3,4,5,1,2] 
// Output: 1
// Example 2:

// Input: [4,5,6,7,0,1,2]
// Output: 0