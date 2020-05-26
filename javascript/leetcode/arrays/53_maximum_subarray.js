
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// We will itterate through the nums array and keep track of the sum. As we are adding, we will check the current index, added by the previous number and then check it with our current sum and return the largest. As we are keeping track of the largest sum found after the first itteration, then we will have the answer after the full loop.

// const maxSubArray = (nums) => {
//   let sum = nums[0];
//   for(let i = 1; i < nums.length; i++){ 
//       nums[i] = Math.max(nums[i], (nums[i]+nums[i-1]))
//       sum = Math.max(nums[i], sum)
//   }
//   return sum;
// };

// TimeComplexity: O(n) time because we are itterating once through the input given its length. As input increases, so does the time it takes.
// Space Complexity: O(1) the only variable we are taking into account for is the sum of the numbers array. The sum will still be a single digit no matter the input length

// const maxSubArray = nums => {
//   for (let i = 1; i < nums.length; i++) {
//     nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
//   }
//   return Math.max(...nums)
// }

// Another question to ask with this problem is to return an array that contains the sum of six. This is a little harder as we will have to wipe the array if the number is a lot smaller.

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) // 6



// Explanation: [4,-1,2,1] has the largest sum = 6.

// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.