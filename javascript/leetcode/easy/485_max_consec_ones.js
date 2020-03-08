// Given a binary array, find the maximum number of consecutive 1s in this array.

var findMaxConsecutiveOnes = function(nums) {
  let count = 0;
  let currCount = 0;
  for (let num of nums) {
    if (num === 1) {
      currCount++
    } else {
      currCount = 0;
    }
    count = Math.max(currCount, count);
  }
  return count;
};

// Time Complexity :O(n); have to traverse the list atleast once
// Space Complexity: O(1) since we have variables

// Example 1:
// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
//     The maximum number of consecutive 1s is 3.
// Note:

// The input array will only contain 0 and 1.
// The length of input array is a positive integer and will not exceed 10,000