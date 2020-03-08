// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
// Note:
// The solution set must not contain duplicate triplets.

//Thoughtprocess: 3 pointer sliding window problem where we will itterate through the array and use a number along with left and right pointers to see if its triplets or not. In order to use method, the array has to be sorted. Our target is 0 so we will use that.

//Some questions to ask, are they all positive? negative? Will the array always be filled? Will there be duplicates in the array?

const threeSum = (array) => {
  array.sort((a, b) => a - b)
  let triple = [];
  
  for (let i = 0; i < array.length; i++) {

    if (array[i] > 0) break; //If the number is greater than 0, then we just end the loop because any number above 0 in a sorted array cannot sum to 0;
    if (i > 0 && array[i] === array[i - 1]) continue; //We don't want to see repeated numbers, and in a sorted array, its 0.

    let left = i + 1;
    let right = array.length - 1;
    
    while (left < right) {
      let match = array[i] + array[left] + array[right];
      if (match === 0) {
        triple.push([array[i], array[left], array[right]]);
        while (left < right && array[left] === [array[left + 1]]) left++; //See Repeats;
        while (left < right && array[right] === array[right + 1]) right++; // We don't want to see repeats;
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
console.log(threeSum([0, 0, 0, 0]))
// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]