// Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

var minWindow = function(s, t) {
  let min = '', left = 0, right = -1
  let map = {};
  
  t.split('').forEach(ele => {
    if (map[ele]) {
      map[ele]++;
    } else {
      map[ele] = 1;
    }
  })

  let count = Object.keys(map).length;
  
  while (right <= s.length) {
    if (count === 0) {
      let current = s[left];
      if (map[current] !== null) map[current]++;
      if (map[current] > 0) count++;
      
      let substr = s.substring(left, right + 1);
      if (min === '') {
        min = substr;
      } else {
        min = min.length < substr.length ? min : substr;
      }
      left++;      
    } else {
      right++;
      let current = s[right];
      if (map[current] !== null) map[current]--;
      if (map[current] === 0) count--;
    }
  }
  return min
};

// Time Complexity: O(n + m) where n and m represents the lengths of the two arguments given.
// Space Complexity: O(n + m) window size is equal to all the characters of n and we have to use it, and m is the unique.

// Example:

// Input: S = "ADOBECODEBANC", T = "ABC"
// Output: "BANC"
// Note:

// If there is no such window in S that covers all characters in T, return the empty string "".
// If there is such window, you are guaranteed that there will always be only one unique minimum window in S.