// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

// Find all the elements that appear twice in this array.

// Could you do it without extra space and in O(n) runtime?

// Hash map or set to use O(n) space
// Use pointers to make it constant space (sliding window pattern) and in linear time;

// const findDuplicates = (nums) => {
//   let result = [];
//   let left = 0;
//   let right = left + 1;

//   while (left < nums.length && right < nums.length) {
//     if (nums[left] === nums[right]) {
//       if (!result.includes(nums[left])) result.push(nums[left]);
//       left++;
//       right++;
//     } else {
//       right++;
//     }
//     if (left < nums.length - 1 && right === nums.length - 1 ) {
//       right = left + 1;
//     }
//     left++;
//   }
//   return result;
// };

// 1 ≤ a[i] ≤ n (n = size of array) The above line says that the size of the array dictates the largest number in the array. With that note, we can explicitly say that each number in the array will reference an index in the given input. When we go through the number and we only seen it once, we can reference that spot in the array through the index and turn it negative.
// Once we find that same number, it will point to the same spot and we can check if its negative, if its negative we can push it to our result array cause we know its a duplicate.

const findDuplicates = (nums) => {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let idx = Math.abs(nums[i]) - 1;
    if (nums[idx] < 0) result.push(idx + 1);
    nums[idx] = -nums[idx];
  }
  return result;
}

// Time Complexity: O(n) we have to itterate through the whole array;
// Space Complexity O(1) if we are not including our returning result;

console.log(findDuplicates([4,3,2,7,8,2,3,1])) // [2,3]

// const findDuplicates = (nums) => {
//   let unique = new Set();
//   let dups = [];

//   for (num of nums) {
//     if (unique.has(num)) {
//       dups.push(num);
//     } else {
//       unique.add(num);
//     }
//   }
//   return dups;
// }

// Time Complexity: O(N) becasue we have to itterate through through the whole array once
// Space Complexity: O(N) because we create a new set the length of the array at most;

// console.log(findDuplicates([4,3,2,7,8,2,3,1])) // [2,3]