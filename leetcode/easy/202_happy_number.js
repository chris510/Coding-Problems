// Write an algorithm to determine if a number is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

const squares = {'0':0, '1':1, '2':4, '3':9, '4':16, '5':25, '6':36, '7':49, '8':64, '9':81}

// const isHappy = (n) => {
//   if (n < 1) return false;
//   let set = new Set();

//   while (!set.has(n)) {
//     set.add(n);
//     let str = n.toString(n);
//     n = 0;
//     for (let i = 0; i < str.length; i++) {
//       n += squares[str[i]];
//     }
//     if (n === 1) return true;
//   }
//   return false 
// };

const isHappy = (n) => {
  if (n === 1 )return true;

  const seen = {};
  while (n !== 1 && !seen[n]) {
    seen[n] = true;
    n = sumOfSquares(n);
  }
  return n === 1;
}

const sumOfSquares = (numStr) => {
  return numStr.toString().split('').reduce((sum, num) => {
    return sum + Math.pow(num, 2)
  }, 0)
}

// Time Complexity: O(n);
// Space Complexity: O(n);

console.log(isHappy(19)) // true;
console.log(isHappy(1)) // true
console.log(isHappy(2))