// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

var strStr = function(haystack, needle) {
  if (!needle.length) return -0;
  return haystack.indexOf(needle);
};

// Time Complexity: O(n) since indexOf itterates through the data structure once.
// Space Compelxity: O(1) returning nothing besides an indicator whether the needle is in the haystack or not.

var strStr = function(haystack, needle) {
  if (!needle.length) return -0;
  let len = haystack.length;
  let needLen = needle.length
  
  for (let i = 0; i < len; i++) {
    if (haystack.substring(i, i + needLen) === needle) return i;
  }
  return -1
};

// Linear Time complexity and constant space where we check each substring the length of the needle to the needl to see if its the same.

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().