// Implement int sqrt(int x).

// Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

// Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

// Do this in linear time going from 1...x and finding n * n === x
// Or do this with binary search splitting down the number x in half each time.

var mySqrt = function(x) {
  if (x < 2) return x;
  
  let left = 1;
  let right = Math.floor(x / 2) + 1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
   if (mid * mid > x) {
     right = mid - 1;
   } else if (mid * mid < x) {
     left = mid + 1;
   } else {
     return mid;
   }
  }
  return right;
};

// Time Complexity: O(log n) since we are splitting it down by half each time.
// Space Complexity: O(1) since we are only using pointers;

// Example 1:

// Input: 4
// Output: 2
// Example 2:

// Input: 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since 
//              the decimal part is truncated, 2 is returned.