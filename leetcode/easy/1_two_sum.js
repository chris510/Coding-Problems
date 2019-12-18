// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// const twoSum = (nums, target) => {
//   const hash = {};
//   for (let i = 0; i < nums.length; i++) {
//     hash[nums[i]] = i;
//   }

//   for (let i = 0; i < nums.length; i++) {
//     let diff = target - nums[i];
//     if (hash[diff] !== undefined && hash[diff] != i) return [i, hash[diff]]
//   }
// };
const twoSum = (nums, target) => {
  if (nums.length === 2) return [0, 1];
  const len = nums.length;
  let map = {};

  for (let i = 0; i < len; i++ ) {
    let diff = target - nums[i];
    let found = map[diff];
    //If we have the problem initially, then we will put it into our hash map, otherwise we will return it since we found the match.
    if ( found !== undefined) return [found, i];
    else map[nums[i]] = i;
  }
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]];
console.log(twoSum([3, 2, 4], 6)); // [1, 2];


// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].