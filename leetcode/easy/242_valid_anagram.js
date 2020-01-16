// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// One way we could do this is sort both strings and check if their equal. Constant space and n logn time. Most optimal version is to use a hash map.

var isAnagram = function(s, t) {
  if (s.length !== t.length) return false
  let ana = {};
  
  for (let i = 0; i < s.length; i++) {
    if (ana[s[i]]) {
      ana[s[i]]++;
    } else {
      ana[s[i]] = 1;
    }
  }
  
  for (let j = 0; j < t.length; j++) {
    if (ana[t[j]]) {
      ana[t[j]]--;
    } else {
      return false;
    }
  }
  return true;
};

// Time Complexity: O(n * m) where n and m are the lengths of the two strings;
// Space Complexity: O(1) because the max is 26 letters in this case can be stored max in the hash table. Doesn't get bigger with input size;

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?