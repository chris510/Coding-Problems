// We are given two strings, A and B.

// A shift on A consists of taking string A and moving the leftmost character to the rightmost position. For example, if A = 'abcde', then it will be 'bcdea' after one shift on A. Return True if and only if A can become B after some number of shifts on A.

var rotateString = function(A, B) {
  let str = A;
  
  while(A !== B){
      let temp = A.split('');
      let first = temp.shift();
      temp.push(first);
      A = temp.join('');
      if(A === str){
          return false;
      }
  }
  return true;
};

//If we double A which is the original string, it contains all the possible shfits because you only have a.length shifts;
// 'abcde' + 'abcde' = 'abcdeabcde'
//                       'cdeab' ==== true;

var rotateString = function(A, B) {
  return (A.length === B.length && (A + A).includes(B));
};

// Time Complexity: O(a * b)
// Space Complexity: O(1) since we are not saving any variables

// Example 1:
// Input: A = 'abcde', B = 'cdeab'
// Output: true

// Example 2:
// Input: A = 'abcde', B = 'abced'
// Output: false