// Given a string, determine if a permutation of the string could form a palindrome.

// We can do this multiple ways, use ASCI set of 128 characters which will have constant space. Use a hash map or hash set accordingly.
var canPermutePalindrome = function(s) {
  let chars = {};
  
  for (let i = 0; i < s.length; i++) {
      if (!chars[s[i]]) {
          chars[s[i]] = 1;
      } else {
          chars[s[i]]++;
      }
  }
  
  let dupes = 0;
  
  Object.values(chars).forEach(count => {
    dupes += count % 2;
  })
  
  return dupes <= 1 
};

// Time Complexity: O(n) traversing through the whole string;
// Space Complexity: O(n) storing each value into the hash map.

// Example 1:

// Input: "code"
// Output: false
// Example 2:

// Input: "aab"
// Output: true
// Example 3:

// Input: "carerac"
// Output: true