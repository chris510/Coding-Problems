// Share
// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"

// var longestPalindrome = function(s) {
//   let longestPal = "";
  
//   for (let i = 0; i < s.length; i++) {
//     for (let j = i; j < s.length; j++) {
//       let substr = s.slice(i, j + 1);
//       if (substr.length > longestPal.length && isPalindrome(substr)) {
//         longestPal = substr;
//       }
//     }
//   }
//   return longestPal;
// };

// const isPalindrome = (substr) => {
//   let left = 0;
//   let right = substr.length - 1;
//   while (left < right) {
//     if (substr[left] === substr[right]) {
//       left++;
//       right--;
//     } else {
//       return false;
//     }
//   }
//   return true;
// }

// Time Complexity: O(n^3) since we have to loop to create a substring with nested, then check if its a palindrome.
// Space Complexity: O(1) we are returning a string with the final return input;

var longestPalindrome = function(s) {
  var max = '';
  for (var i = 0; i < s.length; i++) {
    // this loop is to take into account 
    // different palindromes like 'aba' and 'abba'
    for (var j = 0; j < 2; j++) {
      var left = i;
      var right = i + j;
      while (s[left] && s[left] === s[right]) {
        left--;
        right++;
      }
      // here imagine we get into string like
      // "sabbad", then
      // right = 5
      // left = 0
      // and actual length of "abba" should be "4"
      // 5 - 0 - 1 === 4
      if ((right - left - 1) > max.length) {
        max = s.substring(left + 1, right);
      }
        
    }
  }
  return max;
};

var longestPalindrome = function(s) {
  let longestPal = [0, 1];
  
  for (let i = 0; i < s.length; i++) {
    let odd = expandFromCenter(s, i - 1, i + 1);
    let even = expandFromCenter(s, i - 1, i);
    let longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even
    longestPal = longestPal[1] - longestPal[0] > longest[1] - longest[0] ? longestPal : longest
  }
  return s.slice(longestPal[0], longestPal[1]);
};

const expandFromCenter = (str, left, right) => {
  while (left >= 0 && right < str.length) {
    if (str[left] !== str[right]) break;
    left--;
    right++;
  }
  return [left + 1, right];
}

// Time Complexity: O(n^2);
// Space Complexity: O(1);