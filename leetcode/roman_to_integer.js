// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

//Prethoughts: Given a string consisting of roman numerals, we want to convert the string into an integer given the key above. We will set the key in a hash table and compare to that as we are itterating through.
//Start by creating a hash table as the symbol key and the value is the values. Hash tables have O(1) search time. But also Arrays have it as well...?
//Edge cases are after every 4 I's, the number turns into the the roman numerable in the table. 

// const romanToInt = (romanStr) => {
//   const romans = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
//   const romans2 = romans.slice(1);
//   const integer = [1, 5, 10, 50, 100, 500, 1000];
//   let value = 0;

//   for (let i = 0; i < romanStr.length; i++) {
//     let firstRomanLet = romanStr[i];
//     let nextRomanLet = romanStr[i + 1];
//     if (firstRomanLet === 'I' && romans2.includes(nextRomanLet)) {
//       let romanIdx = romans.indexOf(nextRomanLet);
//       // console.log(romanIdx);
//       let romanVal = integer[romanIdx];
//       // console.log(romanVal);
//       value += romanVal - 1;
//       break
//     } else {
//       let romanIdx = romans.indexOf(firstRomanLet);
//       let romanVal = integer[romanIdx];
//       value += romanVal;
//     }
//   }
//   return value;
// }

// for (var i = 0; i < input.length; i++) {
//   var currentLetter = DIGIT_VALUES[input[i]];
//   var nextLetter = DIGIT_VALUES[input[i + 1]];
//   if (currentLetter === undefined) {
//     return 'null';
//   } else {
//     if (currentLetter < nextLetter) {
//       result += nextLetter - currentLetter;
//       i++;
//     } else {
//       result += currentLetter;
//     }
//   }
// };

// Although the above solution would work for smaller numbers, I don't think it would work with unmbers greater than 100 as it becomes more complex. 

// console.log(romanToInt("III")); // 3
// console.log(romanpToInt("IV")); // 4
// console.log(romanToInt("IX")); // 9
// console.log(romanToInt("LVIII")); // L = 50, V= 5, III = 3; 58
// console.log(romanToInt("MCMXCIV")); // M = 1000, CM = 900, XC = 90 and IV = 4; 1994

// const romanValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
// const romanNumeral = ["M", "CM", "D","CD", "C", "XC", "L", "XL", "X", "IX", "V","IV", "I"];

// A refactored way is to itterate through the input, save the current and next letter, then we will check the values of the current and next letter and if the current is less than the next, we will add that current letter minus the next letter variable.
// If we checked two letters, we will just double increment in our loop.

const romanToInt = (romanStr) => {
  const ROMANS = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let value = 0;

  for (let i = 0; i < romanStr.length; i++) {
    let currentRomanVal = ROMANS[romanStr[i]];
    let nextRomanVal = ROMANS[romanStr[i + 1]];
    if (currentRomanVal < nextRomanVal) {
      value += nextRomanVal - currentRomanVal;
      i++
    } else {
      value += currentRomanVal;
    }
  }
  return value
}

console.log(romanToInt("III")); // 3
console.log(romanToInt("IV")); // 4
console.log(romanToInt("IX")); // 9
console.log(romanToInt("LVIII")); // L = 50, V= 5, III = 3; 58
console.log(romanToInt("MCMXCIV")); // M = 1000, CM = 900, XC = 90 and IV = 4; 1994

// This method works better with a hash map to store data. Hash's has an O(1) look up time and to score key,value pairs it is better.
// We know that we can itterate through the string once if its I's and just add them up with their corresponding values.
// In the cases of where thee is a letter ex (IV) we know that I = 1 and V = 5. If the first index is I and the next index is 5, we know that V - I or 5 - 1 will equal 4 so we can make a conditional off that. And if thats one case, then we will itterate through our loop twice.
  // This works just as well with 1000 and 900 as C = 100 and M === 1000, and M - C === 900 (1000-100) so It will work for alll cases and we dont have to hardcode anything.
//Since we are only itterating through once and saving each itteration look up into a variable, it will be linear space and time.