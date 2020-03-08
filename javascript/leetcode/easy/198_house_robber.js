// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

// - Bottom up strategy
// 	- Iterative
// 	- Memoization
	
// 	Trick: At index [i], you only need to know the maximum profit at [i - 1] and [i - 2]. This is a slight variation on fibonacci.
//     */

var rob = function(nums) {
  let prevMax = 0;
  let currMax = 0;
  
  for (let i = 0; i < nums.length; i++) {
    let temp = currMax;
    currMax = Math.max(prevMax + nums[i], currMax);
    prevMax = temp;
  }
  return currMax;
};

// Time Complexity: O(n) since we have to itterate through the nums array to find the max money we can make when we rob each house
// Space Complexity: O(1) we have 2 auxilary variables that are constantly changing.

var rob = function(nums) {
  if (!nums.length) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);
  
  let twoBefore = nums[0];
  let oneBefore = Math.max(nums[0], nums[1]);
  
  for (let i = 2; i < nums.length; i++) {
    const currentMax = Math.max(twoBefore + nums[i], oneBefore);
    
    twoBefore = oneBefore;
    oneBefore = currentMax
  }
  
  return oneBefore;
};

// Example 1:

// Input: [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
//              Total amount you can rob = 1 + 3 = 4.
// Example 2:

// Input: [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
//              Total amount you can rob = 2 + 9 + 1 = 12.