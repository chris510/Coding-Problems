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