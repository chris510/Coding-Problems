// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

var containsDuplicate = function(nums) {
  if (nums.length < 2) return false;
  nums.sort((a, b) => a - b);
  
  for (let i = 0; i < nums.length; i++) {
    let right = nums.length - 1;
    while (i < right) {
      if (nums[i] === nums[right]) {
        return true;
      } else {
        right--;
      }
    }
  }
  return false;
};

//Time Complexity: O(n log (n)) cause sorting is n log n and we have to itterate through the whole array
//Space Complexity: O(1) cauuse we're just returning a new true of false value?

// Can we do in linear time? We can do linear space by making a hash map and if any the values of key are greater than 1, then its true

var containsDuplicate = function(nums) {
  if (nums.length < 2) return false;
  
  let hashNum = {};
  
  for (num of nums) {
    if (!hashNum[num]) {
      hashNum[num] = 0;
      hashNum[num]++;
    } else {
      return true;
    }
  }
  return false
};

//Time: O(n) itterate through the loop once
//Space: O(n) hash map at worst case is as largest as input size;



// Example 1:

// Input: [1,2,3,1]
// Output: true
// Example 2:

// Input: [1,2,3,4]
// Output: false
// Example 3:

// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true