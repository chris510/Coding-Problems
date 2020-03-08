// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

//DIGIT SUM PROBLEM:

const addDigits = (num) => {
  while (num > 10) {
    num = digitalSum(num);

  }
  return num
}

const digitalSum = num => {
  sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum
}
// const addDigits = (num) => {
//   return num % 9 === 0 ? 9 : num % 9
// };

console.log(addDigits(38));

// Example:

// Input: 38
// Output: 2 
// Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
//              Since 2 has only one digit, return it.