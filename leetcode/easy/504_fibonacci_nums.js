// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0,   F(1) = 1
// F(N) = F(N - 1) + F(N - 2), for N > 1.
// Given N, calculate F(N).

var fib = function(N) {
  if (N < 2) return N;
  
  let first = 1;
  let second = 0;
  
  for (let i = 2; i <= N; i++) {
    first += second;
    second = first - second;
  }
  return first
};

// Time Complexity: O(n) times because we are itterating with a for loop for 2 to N;
// Space Compelxity: O(1) we have constant variables that just gets changed every time we go through an itteration.

 

// Example 1:

// Input: 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
 

// Note:

// 0 ≤ N ≤ 30.