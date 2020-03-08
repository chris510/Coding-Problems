// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Use regular expression to remove all non word characters and replace with an empty string. Then we will collapse it together. White sapce is considered non word characters.
// Then use left and right pointers to find the palindrome expanding into the center;

var isPalindrome = function(s) {
  const clean = s.replace(/\W/g, '').toLowerCase();
  let left = 0;
  let right = clean.length - 1;

  while (left < right) {
    if (clean[left] !== clean[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  
  return true;
};

// Time Complexity: O(n) I think removing the white spaces in a string is considered linear time since it has to check each element value.
// Space Complexity: O(n) since we are creating a new string with s.length...? or if we modify the string in place then it counts as constant.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false