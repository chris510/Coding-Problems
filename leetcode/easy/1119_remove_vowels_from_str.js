// Given a string S, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.


// Can only itterate and return a new string since strings are immutable in javascript

var removeVowels = function(S) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let set = new Set(vowels);
  let str = "";
  for (let i = 0; i < S.length; i++) {
    if (!set.has(S[i])) {
      str += S[i];
    }
  }
  return str;
};

// Time Complexity: O(n) since we have to itterate through the whole string;
// Space Complexity: O(1) since the set is constant and we're not returning a new string.
 

// Example 1:

// Input: "leetcodeisacommunityforcoders"
// Output: "ltcdscmmntyfrcdrs"
// Example 2:

// Input: "aeiou"
// Output: ""
 

// Note:

// S consists of lowercase English letters only.
// 1 <= S.length <= 1000