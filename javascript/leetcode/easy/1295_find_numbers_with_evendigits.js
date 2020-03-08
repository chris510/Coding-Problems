// Given an array nums of integers, return how many of them contain an even number of digits.
 
const findNumbers = nums => {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let strNum = nums[i].toString();
    if (strNum.length % 2 === 0) count ++
  }
  return count;
};

// Time Complexity: O(n * k) or O(n^2) does converting a string into a number count as a linear method? if so then it would take exponential time to run this function. Or n * k where k is the max digit length of a given number in the array.
  // We can write a solution to not turn it into a string but I think we still need to itterate through each number to get the length anyways .
// Space Complexity: O(1) since we are only using the counter variable to return at the end of function

console.log(findNumbers([12,345,2,6,7896])) // 2
// 12 contains 2 digits (even number of digits). 
// 345 contains 3 digits (odd number of digits). 
// 2 contains 1 digit (odd number of digits). 
// 6 contains 1 digit (odd number of digits). 
// 7896 contains 4 digits (even number of digits). 
// Therefore only 12 and 7896 contain an even number of digits.
console.log(findNumbers([555,901,482,1771])) // 1
// Only 1771 contains an even number of digits.