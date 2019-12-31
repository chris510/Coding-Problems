// Given an array and a target sum, find the two numbers that sum up to the target, if there isn't any, return an empty array.
// Brute force quadratic complexity if we use nested loops.

// const twoNumberSum = (arr, target) => {
//   let nums = {};

//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     let diff = target - num;
//     if (diff in nums) {
//       return [diff, num];
//     } else {
//       nums[num] = true;
//     }
//   }
//   return [];
// }


// Time Complexity: O(n), the least cause we itterate through the whole array to find the target or not find one at all.
// Space Complexity: O(n), we create a hash and at most go through the whole array.

// We can do a faster time complexity if we use pointers for a sorted array. If the array is sorted, we can move the number because the different will be greater or less than the target. If greater than target, we minus from the right direction, if less than the target, we minus from the left direction...

const twoNumberSum = (arr, target) => {
  arr.sort((a, b) => a - b)

  let left = 0;
  let right = arr.length - 1;

  while (left !== arr.length - 1 || right > 0) {
    let match = arr[left] + arr[right];
    if (match === target) {
      return [arr[left], arr[right]];
    } else if (match > target) {
      right--;
    } else if (match < target) {
      left++;
    }
  }
  return [];
}

// Time Complexity: O(n log n) since we are sorting the array, we will have to go through the whole array at the worst possible case.
// Space Complexity: O(1) space since we are not creating a hash to store anything and just returning either an empty array or the two numbers that result in the target



console.log(twoNumberSum([4, 6], 10)); //  [4, 6] 
console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10)); // [ -1, 11 ]