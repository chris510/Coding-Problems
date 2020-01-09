
// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function(s) {
  if (!s) return ""
  
  let max = 0;
  let left = 0;
  let right = 0
  
  let seen = new Set();
  
  while (right < s.length) {
    if (!seen.has(s[right])) {
      seen.add(s[right]);
      right++;
      max = Math.max(seen.size, max);
    } else {
      seen.delete(s[left]);
      left++;
    }
  }
  return max;
};

// Time Complexity : O(n) itterate through the length of the string once.
// Space Complexity: O(n) using a hash set so space is correlated with the length of the string