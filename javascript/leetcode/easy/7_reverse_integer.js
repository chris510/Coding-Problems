// Given a 32-bit signed integer, reverse digits of an integer.

//Thoughtprocess: we are given an integer x that can be negative or positive. We will need to reverse each integer. If we mod a number, we get the last difit, and if we divide the number by 10, then we go back down a placement.

const reverse = function(x) {
  let isNegative = x < 0 // Have to declare this or create a new variable for whatever x is.
  x = Math.abs(x);
  let rev = 0;

  while (x !== 0) {
    let digit = x % 10;
    x = Math.floor(x/10);

    rev = (rev * 10) + digit;
  }

  if (rev > 2**31) return 0;
  return isNegative ? -rev : rev;
};

console.log(reverse(123));

// Time Complexity: O(n) where n is the number of digits? But people are saying that it could be log(n) of digits x.
// Space Complexity: O(1) because we are not storing any data and just returning constant variables no matter how many digits x gets increased to.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.