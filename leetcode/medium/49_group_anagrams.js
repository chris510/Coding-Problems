// Given an array of strings, group anagrams together.

//create a hash function and sort each word as u go through it and keep track of it.

var groupAnagrams = function(strs) {
  let anagrams = {};
  
  for (let word of strs) {
      let sortedWord = word.split('').sort().join();
      
      if (sortedWord in anagrams) {
          anagrams[sortedWord].push(word);
      } else {
          anagrams[sortedWord] = [word];
      }
  }
  
  return Object.values(anagrams);
};

// Time Complexity: (n * m log m) where n is the length of the strs and m is the length the longest word;
// Space Complexity: O(n*m) n is the length of the str and m is the length of the longest word

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.