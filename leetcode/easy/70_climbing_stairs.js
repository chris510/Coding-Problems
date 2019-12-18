// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

const climbStairs = (num) => {
  if (num < 0) return 0;
  if (num === 1) return 1;
  if (num === 2) return 2;

  let oneStep = 2;
  let twoStep = 1;
  let allWays = 0;

  for (let i = 2; i < num; i++) {
    allWays = oneStep + twoStep;
    twoStep = oneStep;
    oneStep = allWays;
  }
  return allWays;
}

console.log(climbStairs(2));
console.log(climbStairs(3));

// Note: Given n will be a positive integer.

// Example 1:

// Input: 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step