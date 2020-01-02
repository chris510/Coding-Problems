// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
// Note:
// The solution set must not contain duplicate triplets.

//Thoughtprocess: 3 pointer sliding window problem where we will itterate through the array and use a number along with left and right pointers to see if its triplets or not. In order to use method, the array has to be sorted. Our target is 0 so we will use that.

const threeSum = (array) => {
  array.sort((a, b) => a - b)
  let triple = [];
  
  for (let i = 0; i < array.length; i++) {
    let left = i + 1;
    let right = array.length - 1;
    let match = array[i] + array[left] + array[right];
    // console.log(array[i], array[left], array[right]);
    // console.log(match);
    while (left < right) {
      if (match === 0) {
        triple.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (match < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return triple;
};

//Time Complexity: O(n^2): since sorting is nLogn time, we can afford to use it since we know that this problem will be done in n^2 time
//Space Complexity O(n): since we are returning an array that scales with the input length;

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]