// Split a String in Balanced Strings
// Balanced strings are those who have equal quantity of 'L' and 'R' characters.

// Given a balanced string s split it in the maximum amount of balanced strings.

// Return the maximum amount of splitted balanced strings.


const balancedStringSplit = (str) => {
  let count = 0;
  let matched = 0;

  for (let i = 0; i < str.length; i++) {
    if (count === "R") count++;
    if (count === "L") count--;
    if (count === 0) matched++;
  }
  return matched;
}

console.log(balancedStringSplit("RLRRLLRLRL")) // 4
  // s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
console.log(balancedStringSplit("RLLLLRRRLR")) // 3 
  // s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.
console.log(balancedStringSplit("LLLLRRRR")) // 1
  // s can be split into "LLLLRRRR".
console.log(balancedStringSplit("RLLLLRRRLR")) // 2
  // s can be split into "RL", "RRRLLRLL", since each substring contains an equal number of 'L' and 'R'