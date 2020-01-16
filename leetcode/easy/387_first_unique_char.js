// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

var firstUniqChar = function(s) {
  let dupes = {};
  
  for (let char of s) {
    if (dupes[char]) {
      dupes[char]++;
    } else {
      dupes[char] = 1;
    }
  }
  
  for (let i = 0; i < s.length; i++) {
    if (dupes[s[i]] === 1) {
      return i;
    }
  }
  return -1
};

// Time Complexity: O(2n) or linear, we make two passes. One to create the hash, and one to create the search
// Space Complexity: O(n), we create a hash table to count the numbers in the string so we can check if its non repeating.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.
// Note: You may assume the string contain only lowercase letters.