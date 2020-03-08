// Smallest Substring of All Characters
// Given an array of unique characters arr and a string str, Implement a function getShortestUniqueSubstring that finds the smallest substring of str containing all the characters in arr. Return "" (empty string) if such a substring doesn’t exist.

// Come up with an asymptotically optimal solution and analyze the time and space complexities.

// function getShortestUniqueSubstring(arr, str) {
//   let counts = {};
//   let uniqueCount = 0;
//   let i = 0;
//   let j = 0;
//   let result = '';
  
//   for (let i = 0; i < arr.length; i++) {
//     counts[arr[i]] = 0;
//   }
  
//   for (j = 0; j < str.length; j++) {
//     let currentChar = str[j];
    
//     if (counts[currentChar] !== undefined) {
//       counts[currentChar]++;
//       if (counts[currentChar] === 1) uniqueCount++;
//     }
//   }
 
  
//   while (uniqueCount === arr.length) {
//     let tempSubStr = str.substring(i, j + 1)
    
//     if (tempSubStr.length === arr.length) {
//       return tempSubStr;
//     } else if (!result || tempSubStr.length < result.length) {
//       result = tempSubStr;
//     }
    
//     let firstChar = str[i];
//     let firstCharCount = counts[firstChar];
    
//     if (counts[firstChar] !== undefined) {
//       firstCharCount--;
//       if (firstCharCount === 0) {
//         uniqueCount--;
//       }
//     }
//     counts[firstChar] = firstCharCount;
//     i++;
//   }
//   return result
// }

function getShortestUniqueSubstring(t, s) {
  let map = {}
  let min = '';
  let left = 0;
  let right = -1;
  
  t.forEach(ele => {
    if (!map[ele]) {
      map[ele] = 1;
    } else {
      map[ele]++;
    }
  });
  
  let count = Object.keys(map).length;
  while (right <= s.length) {
    if (count === 0) {
      let current = s[left];
      
      if (map[current] !== null) map[current]++;
      if (map[current] > 0) count++;
      let temp = s.substring(left, right+1)

      if (min == "") {
        min = temp;
      } else {
        min = min.length < temp.length ? min : temp;
      } 
      left++;
    } else {
      right++;
      let current = s[right];
      if (map[current] !== null) map[current]--;
			if (map[current] === 0) count--;
    }
  }
  return min;
}

console.log(getShortestUniqueSubstring("xyyzyzyx", ['x','y','z'] ))


// Example:

// input:  arr = ['x','y','z'], str = "xyyzyzyx"

// output: "zyx"
// Constraints:

// [time limit] 5000ms

// [input] array.character arr

// 1 ≤ arr.length ≤ 30
// [input] string str

// 1 ≤ str.length ≤ 500
// [output] string