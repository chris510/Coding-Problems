// Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

var getSum = function(a, b) {
  // Keep adding until we have no carry left
  while (b !== 0) {
    // * Take note of what positions will need a carry, we will left shift this below
    // * and make b hold it. Remember: a carry is not applied where it is
    // * discovered...it is applied 1 position to the left of where it was born
    let carry = a & b;
     /*
      * a's job is to keep the sum we are going to be working on, '^' does bit
      * addition, see explanation below to fully understand this
      */
    a = a ^ b;
    /*
    * b will house the carry from the operation, we left shift by 1 because in the
    * next iteration we will add against the carry
    */
    b = carry << 1;
  }
  return a
};

// Example 1:

// Input: a = 1, b = 2
// Output: 3
// Example 2:

// Input: a = -2, b = 3
// Output: 1
