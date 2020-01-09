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