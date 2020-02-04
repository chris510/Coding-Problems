// Given a pattern and a string str, find if str follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

var wordPattern = function(pattern, str) {
  let words = str.split(" ");
  if (words.length !== pattern.length) return false;
  
  let keyMap = new Map();
  let valMap = new Map();

  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i];
    
    if (keyMap.has(char)) {
      if (keyMap.get(char) !== words[i]) return false;
    } else {
      // If the character is not in the hash map, we want to check if the word is hashed to another character
      if (valMap.has(words[i])) return false
      keyMap.set(char, words[i]);
      valMap.set(words[i], char);
    }
  }
  return true;
};

// Time Complexity: O(n) where n is the length of the pattern and the string.
// Space Complexity: O(2n) or O(n) since we create two hash maps;

// Example 1:

// Input: pattern = "abba", str = "dog cat cat dog"
// Output: true
// Example 2:

// Input:pattern = "abba", str = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", str = "dog cat cat dog"
// Output: false
// Example 4:

// Input: pattern = "abba", str = "dog dog dog dog"
// Output: false
// Notes:
// You may assume pattern contains only lowercase letters, and str contains lowercase letters that may be separated by a single space.

// Accepted