// https://medium.com/javascript-in-plain-english/microsoft-online-assessment-questions-js-f68ecdb6e927

// Write a function solution that, given a string S of N lowercase English letters, returns a string with no instances of three identical consecutive letters, obtained from S by deleting the minimum possible number of letters.
// Examples:
// Given S = “eedaaad” , the function should return “eedaad” . One occurrence of letter a is deleted.
// Given S = “xxxtxxx” , the function should return “xxtxx” . Note that letter x can occur more than three times in the returned string, if the occurrences are not consecutive.
// Given S = “uuuuxaaaaxuuu” , the function should return “uuxaaxuu”.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..200,000]
// string S consists only of lowercase letters (a-z)

const noConsecutive = (str) => {
  let nonCons = str.slice(0, 2);
  for (let i = 2; i < str.length; i++) {
    if (str[i] !== str[i - 1] || str[i] !== str[i - 2]) nonCons += str[i];
  }
  return nonCons;
}      

//Time Complexity: O(n); itterate once,
//Space Complexity: O(n); use another string to have the result?
  //Cant do constant space because strings are immutable in javascript.

console.log(noConsecutive('eedaaad')); // 'eedaad'
console.log(noConsecutive('xxxtxxx')); // 'xxtxx'
console.log(noConsecutive('uuuuxaaaaxuuu')); // “uuxaaxuu”

// Write a function solution that, given an array A consisting of N integers, returns the maximum sum of two numbers whose digits add up to an equal sum. If there are no two numbers whose digits have an equal sum, the function should return -1.
// Examples:
// Given A = [51, 71, 17, 42], the function should return 93. There are two pairs of numbers whose digits add up to an equal sum: (51, 42) and (17, 71). The first pair sums up to 93.
// Given A = [42, 33, 60], the function should return 102. The digits of all the numbers in A add up to the same sum, and choosing to add 42 and 60 gives the result 102.
// Given A = [51, 32, 43], the function should return -1, since all numbers in A have digits that add up to different, unique sums.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..200,000]
// each element of array A is an integer within the range [1..1,000,000,000]

// Can do it in quadratic time and constant space by using a nested for loop? What if we just sort the array.

function sumDigits(num) {
  return String(num).split('').reduce(add);
}

function add(a, b) {
  return Number(a) + Number(b);
}

function descending(a, b) {
  if (a > b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}

function extractHighestTwo(arr) {
  return arr.sort(descending).slice(0, 2);
}

function maxSum(arr) {
  var sums = {};
  
  arr.forEach(function(num) {
    sum = sumDigits(num);
    if (sums[sum]) {
      sums[sum].push(num);
    } else {
      sums[sum] = [num];
    }
  });

  result = Object.values(sums)
                 .filter(nums => nums.length >= 2)
                 .map(extractHighestTwo)
                 .map(nums => nums.reduce(add))
                 .sort(descending)[0];

  return result || -1;
}

/*
Algorithm:
- create an empty object
- iterate through numbers in array
  - find the sum of each number's digits
  - if sum of digits does not exist as a property on the object:
    - create the property and assign it to a new array containing the number from the input array
  - else if sum of digits does exist as a property on the object:
    - add the number from the input array to the array referenced by that property
- get an array of the object's values (which are subarrays containing numbers whose digits' sums are equal)
- filter out subarrays that contain less than 2 numbers
- for any subarrays containing more than 2 numbers, find the largest two and drop any others
- replace each subarray with the sum of it's two numbers
- find largest number in array and return it, if there are no numbers return -1
*/


console.log(maxSum([51, 71, 17, 42])); // 93
console.log(maxSum([42, 33, 60])); // 102
console.log(maxSum([51, 32, 43])); // -1

// You are given a string S consisting of N letters ‘a’ and/or ‘b’. In one move, you can swap one letter for the other (‘a’ for ‘b’ or ‘b’ for ‘a’).
// Write a function solution that, given such a string S, returns the minimum number of moves required to obtain a string containing no instances of three identical consecutive letters.
// Examples:
// Given S = “baaaaa” , the function should return 1. The string without three identical consecutive letters which can be obtained in one move is “baabaa”.
// Give S = “baaabbaabbba” , the function should return 2. There are four valid strings obtainable in two moves: for example, “bbaabbaabbaa” .
// Given S = “baabab” , the function should return 0.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [0..200,000]
// string S consists only of the characters ‘a’ and/or ‘b’

function numberOfMovesForStreak(streak) {
  var length = streak.length - 2;

  while (length % 3 !== 0) {
    length += 1;
  }

  return length / 3;
}

function minMovesNoDupes(input) {
  var streaks = [];
  var temp = '';

  for (var i = 0; i < input.length; i += 1) {
    if (input[i] === input[i - 1]) {
      temp += input[i];
    } else {
      if (temp.length > 2 && temp.length !== 0) {
        streaks.push(temp);
      }
      temp = input[i];
    }
  }
  if (temp.length > 2) { streaks.push(temp) }

  return streaks.map(numberOfMovesForStreak).reduce(((a, b) => a + b), 0);
}

/*
Regarding any streak of 3 or more chars:
if it has 3 - 5 consecutive chars, it takes 1 move to suffice requirements
for 6 - 8, 2 moves
for 9 - 11, 3 moves
Algorithm:
- iterate through characters, looking for streaks of 3 or more consecutive chars
- add any streak of 3 or more consecutive chars to an array
- map array of streaks:
  - find number of letters
  - subtract 2
  - round up to nearest multiple of 3
  - divide by 3 and return quotient
- return the sum of all quotients
*/

console.log(minMovesNoDupes("baaaaa")); // 1
console.log(minMovesNoDupes("baaabbaabbba")); // 2
console.log(minMovesNoDupes("baabab")); // 0

