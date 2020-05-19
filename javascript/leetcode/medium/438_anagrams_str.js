// Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

// Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

// The order of output does not matter.

// Build a hash map consists of characters and their counts. Create a count variable the length of characters in the anagram we're looking for
// Iterate the input s using 2 pointers left and right. Make adjustments in hash and count variable
// Keep expanding the right pointer. When the desired searching length is reached, we can start shrinking left pointer as well.
// Unlike other sliding window problems, left pointer, at max, would only move 1 position.

var findAnagrams = function(s, p) {
  let result = [];
  let charCounts = {};
  
  if (!s.length || !s) return result;
  
  for (let char of p) {
    if (charCounts[char]) {
      charCounts[char]++;
    } else {
      charCounts[char] = 1;
    }
  }
  
  let left = 0;
  let right = 0;
  let count = p.length;
  
  while (right < s.length) {
    if (charCounts[s[right++]]-- >= 1) count--;

    if (count === 0) result.push(left);
    
    if (right - left === p.length && charCounts[s[left++]]++ >= 0) count++;
  }
  
  return result;
}

// Time Complexity: O(n) since we are traversing the string;
// Space Complexity: O(m) where m is the length of the string p anagram that we are finding, we can also say its constant since its only dealing with 26 character strings.

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
  const res = []
  const sLen = s.length;
  const pLen = p.length;
  
  if (s.len === 0 || !s) return res;
  
  let freq = {}
  let uniqueChars = 0
  for (let char of p) {
    if (!freq[char]) {
      uniqueChars++;
      freq[char] = 1;
    } else {
      freq[char]++;
    }
  }
  
  let left = 0, right = 0;
  
  for (right; right < sLen; right++) {
    if (freq[s[right]]!=null) freq[s[right]]--;
    if (freq[s[right]]==0) uniqueChars--;
    if (uniqueChars==0) res.push(left);
    if (right - left + 1 == p.length) {
      //   if (freq[s[left]]!=null) freq[s[left]]++;
      //   // left++;
      //   if (freq[s[left] == 1]) {
      //     uniqueChars++;
      //     left++;
      //   }
      // left++;
    }
  }
}