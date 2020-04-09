// Absolute Value Sort
// Given an array of integers arr, write a function absSort(arr), that sorts the array according to the absolute values of the numbers in arr. If two numbers have the same absolute value, sort them according to sign, where the negative numbers come before the positive numbers.

// Examples:

// input:  arr = [2, -7, -2, -2, 0]
// output: [0, -2, -2, 2, -7]
// Constraints:

// [time limit] 5000ms
// [input] array.integer arr
// 0 ≤ arr.length ≤ 10
// [output] array.integer

function absSort(arr) {
  const sortAbs = (num1, num2) => {
    if (Math.abs(num1) < Math.abs(num2)) {
      return 1;
    } else if (Math.abs(num1) > Math.abs(num2)) {
      return -1;
    } else {
      if (num1 < 0) {
        return 1;
      } else {
        return -1;
      }
    }
  }
   return arr.sort((a,b) => sortAbs(b, a));
}

// O(log n) time | O(1) space