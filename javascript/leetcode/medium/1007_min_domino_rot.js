// In a row of dominoes, A[i] and B[i] represent the top and bottom halves of the i-th domino.  (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)

// We may rotate the i-th domino, so that A[i] and B[i] swap values.

// Return the minimum number of rotations so that all the values in A are the same, or all the values in B are the same.

// If it cannot be done, return -1.

//There are three possible scenarios for this algorithm
  // 1. We pick arbitrary A[i] and can make either A[i] or B[i] all the same domino number
  // 2. We pick an arbitrary B[i] and can make either A[i] or B[i] the same number;
  // 3. Impossible to make either A[i] or B[i] the same value;

//So knowing this, we can create an algorithm to run a check ont eh whole array of A and B and then use to check if whether we flip all the needed domnios to see if it matches. If we go through the array and cannot find all match, we will return - 1
  // Pick up the first element. It has two sides: A[0] and B[0].
  // Check if one could make all elements in A row or B row to be equal to A[0]. If yes, return the minimum number of rotations needed.
  // Check if one could make all elements in A row or B row to be equal to B[0]. If yes, return the minimum number of rotations needed.
  // Otherwise return -1.

var minDominoRotations = function(A, B) {
  if (A.length !== B.length) return -1;
  let len = A.length;
  let rotations = check(A[0], B, A, len);
  
  if (rotations !== -1 || A[0] == B[0]) {
    return rotations;
  } else {
    return check(B[0], B, A, len);
  }
};

const check = (x, A, B, len) => {
  let aRotations = 0;
  let bRotations = 0;
  
  for (let i = 0; i < len; i++) {
    if (A[i] !== x && B[i] !== x) {
      return -1
    } else if (A[i] !== x) {
      aRotations++;
    } else if (B[i] !== x) {
      bRotations++;
    }
  }
  return Math.min(aRotations, bRotations);
}

// Time Complexity: O(n) itteates the array no more than two times
// Space Complexity: O(1) not saving any extra data structures so constant space
 
// Example 1:

// Input: A = [2,1,2,4,2,2], B = [5,2,6,2,3,2]
// Output: 2
// Explanation: 
// The first figure represents the dominoes as given by A and B: before we do any rotations.
// If we rotate the second and fourth dominoes, we can make every value in the top row equal to 2, as indicated by the second figure.
// Example 2:

// Input: A = [3,5,1,2,3], B = [3,6,3,3,4]
// Output: -1
// Explanation: 
// In this case, it is not possible to rotate the dominoes to make one row of values equal.