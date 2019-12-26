// Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

// The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

//Since the array is sorted, we can use a sliding window or pointer method to check the currrent number as we are itterating through. And since its sorted, eevery number to the left is gonna be less so if we check the current sum to the target, if its less, then we know we need to increase the number so we do left + 1 and if its less than current sum, then right side minus 1 in terms of index.

var twoSum = function(numbers, target) {
    
  for (let i = 0; i < numbers.length; i++) {
    let left = i;
    let right = numbers.length - 1;
    
    while (left < right) {
      let currSum = numbers[left] + numbers[right]
      
      if (currSum === target) {
        return [left + 1, right + 1];
      } else if (currSum < target) {
        left++;
      } else if (currSum > target) {
        right--;
      }
    }
  }
  return [];
};

// Time Complexity: O(n), we are going through the array once.
// Space Complexity: O(1), we are not using any data structures to save values but return a value or empty array given input length.

// Note:

// Your returned answers (both index1 and index2) are not zero-based.
// You may assume that each input would have exactly one solution and you may not use the same element twice.
// Example:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.