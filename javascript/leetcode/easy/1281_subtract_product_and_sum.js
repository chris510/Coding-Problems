// Given an integer number n, return the difference between the product of its digits and the sum of its digits.


//Given a number, we want to take the sum of the individual digits as well as the product of each individual digits and then return the difference between the two.

const subtractProductAndSum = n => {
  let sum = 0;
  let product = 1;
  while (n > 0) {
    let mod = n % 10;
    sum += mod;
    product *= mod
    n = Math.floor(n / 10);
  }
  return product - sum;
};

// Time Complexity: O(n) the times we itterate through will always be the number of digits that are given.
// Space Complexity: O(1) As the input size increases meaning the number that is given to us gets larger, we are still only collecting the sum and product variables so their will be a constant space. The variables number will get bigger but the space it occupies should stay the same.

// Example 1:

// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15
// Example 2:

// Input: n = 4421
// Output: 21
// Explanation: 
// Product of digits = 4 * 4 * 2 * 1 = 32 
// Sum of digits = 4 + 4 + 2 + 1 = 11 
// Result = 32 - 11 = 21
