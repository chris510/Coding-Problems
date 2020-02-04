// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// For example, given n = 3, a solution set is:

//We can generate all the sequences of 2^2n and check if its a valid sequence and then return it. Brute force approach and not really efficient.

//Use a back tracking method
  //Instead of adding a bracket each time, we can only add it when we know its a valid sequence

var generateParenthesis = function(n) {
  let res = new Array();
  backTrack(res, "", 0, 0, n);
  return res;
};

const backTrack = (res, currStr, open, close, max) => {
  if (currStr.length === max * 2) {
    res.push(currStr);
    return;
  }
  
  if (open < max) backTrack(res, currStr + "(", open + 1, close, max);
  if (close < open) backTrack(res, currStr + ")", open, close + 1, max);
}


// Time and Space Complexity : 4^n / square root n because each step has at most n. Analysis is out of scope.

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]