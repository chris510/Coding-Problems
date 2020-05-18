// Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

// Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

// The order of output does not matter.

// Example 1:

// Input:
// s: "cbaebabacd" p: "abc"

// Output:
// [0, 6]

// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
// Example 2:

// Input:
// s: "abab" p: "ab"

// Output:
// [0, 1, 2]

// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".

var findAnagrams = function(s, p) {  
  if(!s || s.length < p.length) return [];
  
  // Result is the output array that stores start indices, 
  // freqMap maps each character in p to its count
  
  const result = [], freqMap = { };
  let count = 0, start = 0, end = 0;
  
  for(let char of p){
    if(freqMap[char] === undefined) count++
    freqMap[char] = (freqMap[char] || 0) + 1
  }
  
  // Iterate over s using two pointers (start and end)
  while(end < s.length){
    let char = s[end] // The 'current' character
    // If the current character exists in the frequency map, then decrement it's count
    // and if the count reaches 0, then we know we got the right # of occurences for it
    if(freqMap[char] !== undefined){
      freqMap[char] -= 1
      if(freqMap[char] === 0) count--;
    }
    
    end++
    
    // Once we reach count = 0, then check to see if it is 
    // a valid anagram and move the window to the right
    while(count === 0){
      let temp = s[start]
      if(freqMap[temp] !== undefined){
        freqMap[temp] += 1
        if(freqMap[temp] > 0) count++
      }
      
      // If it is valid, then add the start index to the result
      if(end - start === p.length) result.push(start)
      start++
    }
  }
  
  return result
};