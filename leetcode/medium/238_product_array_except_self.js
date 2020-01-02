// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

// Simple approach is to loop through the array once and then calculate the total product, then loop through the array again and divide the total product by that number and then youll get the the number at each place.

// const productExceptSelf = (nums) => {
//   let product = 1;
//   let productNums = [];

//   for (num of nums) {
//     product *= num;
//   }

//   for (num of nums) {
//     productNums.push(product / num);
//   }
//   return productNums;
// };

// This problem works for whole numbers that are non 0. But lets ry with the constraints.
// Time Complexity: O(n)
// Space Complexity: O(n)

//We can create two separate arrays with values multiplying from the left and then the right, after just multiply the values of each array and then you get the values in O(n) time and O(n) space

const productExceptSelf = (nums) => {
  let length = nums.length
  let output = [];
  output[0] = 1;
  // creates the left products array
  for (let i = 1; i < length; i++) {
    output[i] = output[i - 1] * nums[i - 1];
  }

  // multiples the output while accumulating the right side of the array
  let right = 1;
  for (let i = length - 1; i >= 0; i--) {
    output[i] = output[i] * right;
    right = right * nums[i]
  }

  return output;
}

// Time Complexity: O(n);
// Space Complexity: O(1);

console.log(productExceptSelf([1, 2, 3, 4])) // [24,12,8,6];
console.log(productExceptSelf([4, 5, 1, 8, 2])); // [80, 64, 320, 40, 160];
