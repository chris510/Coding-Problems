// Given a string s of '(' , ')' and lowercase English characters. 

// Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

// Formally, a parentheses string is valid if and only if:

// It is the empty string, contains only lowercase characters, or
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.

// We can use a stack for for this problem just like other parenthesis problem and keep track of the open and close. For every open, we push into the stack, for every close we pop the stack contents and 

var minRemoveToMakeValid = function(str) {
  str = str.split("");
  let stack = [];
  for(let i = 0; i<str.length; i++){
    if(str[i]==="(")
      stack.push(i);
    else if(str[i]===")"){
      if (stack.length) {
        stack.pop();
      } else {
        str[i] = "";
      }
    }
  }
  
  for(let i of stack) str[i] = "";
  
  return str.join("");

}

// Time Complexity: O(n) since we are traversing the length of the string
// Space Complexity: O(n) since the stack we have can keep at most all the characters in the string.
 

// Example 1:

// Input: s = "lee(t(c)o)de)"
// Output: "lee(t(c)o)de"
// Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
// Example 2:

// Input: s = "a)b(c)d"
// Output: "ab(c)d"
// Example 3:

// Input: s = "))(("
// Output: ""
// Explanation: An empty string is also valid.
// Example 4:

// Input: s = "(a(b(c)d)"
// Output: "a(b(c)d)"
 

// Constraints:

// 1 <= s.length <= 10^5
// s[i] is one of  '(' , ')' and lowercase English letters.