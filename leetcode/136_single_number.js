// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Itterate through and store in a hash, take only the keys that has a value of 1. Or maybe if it appears twice, don't count it. Uses extra memory but lets use the brute force method first.

// const singleNumber = (nums) => {
//   hash = {};
//   nums.forEach(num => {
//     if (!hash[num]) hash[num] = 0;
//       hash[num]++;
//   })
//   console.log(hash)
//   for (number in hash) {
//     // console.log(number)
//     if (hash[number] === 1) return number;
//   }
// };


//XOR BITWISE OPRATOR 'caret' this gives a space of O(1) and O(n) time complexity; NOTE: read up on it;

const singleNumber = (nums) =>  {
  let num = 0;
  for (let n of nums) {
    console.log(num^=n);
    num ^= n;
  }
  return num;
}

//We are storing the number in a hash so we are using extra space. We need to be able to only keep one number ad we are itterating through.

console.log(singleNumber([2, 2, 1])); // 1
// console.log(singleNumber([4, 1, 2, 1, 2])); // 4
