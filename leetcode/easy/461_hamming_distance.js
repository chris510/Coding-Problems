// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, calculate the Hamming distance.

var hammingDistance = function(x, y) {
  let result = 0;
  while (x > 0 || y > 0) {
    result += (x % 2) ^ (y % 2) //checks if number is even/odd
    x >>= 1;
    y >>= 1;
  }
  return result
};

// If odd, last digit in binary is 1
// If even, last digit in binary is 0

// Note:
// 0 ≤ x, y < 231.

// Example:

// Input: x = 1, y = 4

// Output: 2

// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑

// The above arrows point to positions where the corresponding bits are different.