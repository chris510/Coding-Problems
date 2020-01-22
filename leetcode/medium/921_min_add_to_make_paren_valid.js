// Given a string S of '(' and ')' parentheses, we add the minimum number of parentheses ( '(' or ')', and in any positions ) so that the resulting parentheses string is valid.

// Formally, a parentheses string is valid if and only if:

// It is the empty string, or
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.
// Given a parentheses string, return the minimum number of parentheses we must add to make the resulting string valid.

/*
The given constraints about the input of this problem makes using a stack an intuitive approach, with few edge cases!
Start/Input: String with strictly open and closing parenthesis
Goal/Out: Record the number of non-paired parenthesis
Plan: Make a stack that will hold any unmatched parenthesis
    -> IF the first element in the stack (the .peek() in java/conventional stack) is an opening and the next character is        a closing parenthesis, we can pop the current top, and disregard the closing one we are looking at
          If they don't complement each other, we add it!
       ELSE
       Push it to the stack
    Once we are done the stack contains all the parenthesis that are missing their complement.
     All that is left to do is return how many are still there so we return the size of the stack
*/

var minAddToMakeValid = function(S) {
  let stack = [];
  
  for (let char of S) {
      let len = stack.length
      
      if (!len) {
        stack.push(char);
      } else {
        if (stack[len - 1] === '(' && char === ')') {
        stack.pop();
        }  else {
        stack.push(char);
        }    
      }
  }
  return stack.length
};

// Time Complexity: O(n) going through the whole string
// Space Complexity: O(n) creating a stack to calculate if theres any parenthesis without a pair.

// To do this we will make two counters to keep track of the parenthesis as we are going through the array. The first one we, will add one if its open or -1 if its close. At any time there is a -1 in the first variable, we know there isn't an open one that pairs with it because closes go last. So we will increase the valid number of moves that we need to make by 1 and alsoincrementing our initial value cause we already accounted for that.

var minAddToMakeValid = function(S) {
  if (!S.length) return 0;
  let currBracket = 0, validNum = 0;
  
  for (let char of S) {
      currBracket += (char === '(') ? 1 : -1
      if (currBracket === -1) {
        currBracket++;
        validNum++;
      }
  }
  return currBracket + validNum;
};

// Time Complexity : O(n);
// SPace Complexity : O(1);