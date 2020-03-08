// Write a function that reverses a string. The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.

// We can use the reverse method which will be linear, or we can itterate back words taking linear space and time.
// But the technique to do this is to do it with pointers so that it will be linear time and constant space.

var reverseString = function(s) {
  let left = 0;
  let right = s.length - 1;
  
  while (left < right) {
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
  return s
};

// Time Complexity: O(n), itterating through the string;
// Space Complexity: O(1) using pointers so we are just returning the string.

// Example 1:

// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
