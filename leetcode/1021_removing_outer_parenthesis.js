// A valid parentheses string is either empty (""), "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.  For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.

// A valid parentheses string S is primitive if it is nonempty, and there does not exist a way to split it into S = A+B, with A and B nonempty valid parentheses strings.

// Given a valid parentheses string S, consider its primitive decomposition: S = P_1 + P_2 + ... + P_k, where P_i are primitive valid parentheses strings.

// Return S after removing the outermost parentheses of every primitive string in the primitive decomposition of S.

// Constraints: 
// S.length <= 10000
// S[i] is "(" or ")"
// S is a valid parentheses string

//INITIAL THOUGHTS: We are given a string with and open and closed parenthesis. There will always be a complete pair and will never have either an open or closed without one or the other. The problem is asking to decompose the given string given parenthesis and take out the outer ones.
//It looks like there is a pattern, we can check two following indices of the string, if they are the same, we will add one of them to a new string, but if they are different, we will add both of them to the string.
//The outer ones will have duplicates along similar indices in the string.

// The above theoretical method only works if the final value is not an empty string and theres no interior parenthesis. To solve this we need to create a counter so that it will keep track of the parenthesis.

const removeOuterParentheses = (str) => {
  let counter = 0;
  let decomposed = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      if (counter !== 0) {
        decomposed += "(";
      }
      counter++;
    } else {
      counter--;
      if (counter > 0) {
        decomposed += ")";
      }
    }
  }
  return decomposed;
};

// Time Complexity: O(N) because we are only itterating once through the input string.
// Space Complexity: O(1) because no matter how large the input size is, there are only two variables that we are keeping track of (counter and another stirng).

console.log(removeOuterParentheses("(()())(())")) // "()()()"
  // The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
  // After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
console.log(removeOuterParentheses("(()())(())(()(()))")) // "()()()()(())"
  // The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
  // After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".
console.log(removeOuterParentheses("()()")) // "()()"
  // The input string is "()()", with primitive decomposition "()" + "()".
  // After removing outer parentheses of each part, this is "" + "" = "".