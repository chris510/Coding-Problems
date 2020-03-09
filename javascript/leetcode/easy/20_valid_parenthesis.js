// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

const isValid = (str) => {
  const chars = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (chars[str[i]] !== undefined) {
      stack.push(str[i]);
    } else if (chars[stack.pop()] !== str[i]) {
      return false;
    }
  }
  return stack.length ? false : true
};

// Time Complexity: O(n) - we are only itterating once through the array given its input size.
// We are creating a stack so the Space Complexity is O(n);

console.log(isValid('()')); // true
// console.log(isValid('()[]{}')); // true 
// console.log(isValid('(]')); // false
// console.log(isValid('([)]')); // false 
// console.log(isValid('{[]}')); // true

var isValid = function(s) {
  if (s.length === 0) return true;
  if (s.length === 1) return false;
  if (s.length % 2 !== 0) return false;
  
  const dictionary = {
    ')': '(',
    '}': '{',
    ']': '['
  }
  const stack = [];
  
  for (let char of s) {
    const currChar = char;
    const lastChar = stack[stack.length - 1];
    const delChar = dictionary[currChar];
    
    if (delChar) {
      if (delChar === lastChar) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(currChar);
    }
  }
  return stack.length ? false : true
};