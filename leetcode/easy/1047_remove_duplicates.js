// Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.

// We repeatedly make duplicate removals on S until we no longer can.

// Return the final string after all such duplicate removals have been made.  It is guaranteed the answer is unique.

//using a stack
const removeDuplicates = s => {
  const stack = [];
  for (const char of s) {
    stack[stack.length - 1] === char ? stack.pop() : stack.push(char);
  }
  return stack.join('');
};

//Two pointers, one for traversal, and one to store the result;
const removeDuplicates = s => {
  const arr = s.split('');
  let ans = 0;
  for (let i = 0; i < arr.length; ++i) {
    ans === 0 || arr[i] !== arr[ans - 1] ? (arr[ans++] = arr[i]) : --ans;
  }
  return arr.slice(0, ans).join('');
};

const removeDuplicates = s => {
  const s2 = s.replace(/(.)\1/g, '');
  return s2.length === s.length ? s : removeDuplicates(s2);
};

// Time Complexity: O(n); we have to traverse the whole string;
// Space Complexity: O(n); where n is the length of the string that gets pushed into the stack;
 

// Example 1:

// Input: "abbaca"
// Output: "ca"
// Explanation: 
// For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".
 

// Note:

// 1 <= S.length <= 20000
// S consists only of English lowercase letters.