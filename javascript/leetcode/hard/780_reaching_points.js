// A move consists of taking a point (x, y) and transforming it to either (x, x+y) or (x+y, y).

// Given a starting point (sx, sy) and a target point (tx, ty), return True if and only if a sequence of moves exists to transform the point (sx, sy) to (tx, ty). Otherwise, return False.

// This is a binary tree that we have to recursively travel to find whether we are able to access the target coordiantes with our starting coordinates based on the moves we are able to make.

const reachingPoints = (sx, sy, tx, ty) => {
  // we want to traverse the coordinate and take the modulo with the largest coordinate so we check if x > y and vice versa.
  if (ty > tx) {
    return recursePoints(sx, sy, tx, ty);
  } else {
    return recursePoints(sy, sx, ty, tx);
  }
}

const recursePoints = (sx, sy, tx, ty) => {
  // if we pass any of these coordinates, we know that we aren't able to make it so we return false;
  if (sx > tx || sy > ty) {
    return false;
    // if they are equal, we only need to check either x or y, and if the modulo remainder is 0, then know its true.
  } else if (sx === tx) {
    return ((ty - sy) % sx) === 0;
  } else {
    // if any of the coordinates are too big, then we have to recursively and move down the tree from the target to the starting.
    return recursePoints(sy, sx, ty % tx, tx);
  }
}

// Time Complexity: Log of Math.max(tx, ty) because of we are binary searching half the trees.
// Space Complexity: O(1), we are returning a boolean value and not saving any values.

// Examples:
// Input: sx = 1, sy = 1, tx = 3, ty = 5
// Output: True
// Explanation:
// One series of moves that transforms the starting point to the target is:
// (1, 1) -> (1, 2)
// (1, 2) -> (3, 2)
// (3, 2) -> (3, 5)

// Input: sx = 1, sy = 1, tx = 2, ty = 2
// Output: False

// Input: sx = 1, sy = 1, tx = 1, ty = 1
// Output: True

// Note:

// sx, sy, tx, ty will all be integers in the range [1, 10^9].