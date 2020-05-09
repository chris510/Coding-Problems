// H-Tree Construction
// An H-tree is a geometric shape that consists of a repeating pattern resembles the letter “H”.

// It can be constructed by starting with a line segment of arbitrary length, drawing two segments of the same length at right angles to the first through its endpoints, and continuing in the same vein, reducing (dividing) the length of the line segments drawn at each stage by √2.

// Here are some examples of H-trees at different levels of depth:

// altdepth = 1

// altdepth = 2

// altdepth = 3

// Write a function drawHTree that constructs an H-tree, given its center (x and y coordinates), a starting length, and depth. Assume that the starting line is parallel to the X-axis.

// Use the function drawLine provided to implement your algorithm. In a production code, a drawLine function would render a real line between two points. However, this is not a real production environment, so to make things easier, implement drawLine such that it simply prints its arguments (the print format is left to your discretion).

// Analyze the time and space complexity of your algorithm. In your analysis, assume that drawLine's time and space complexities are constant, i.e. O(1).

// Constraints:

console.log('Practice makes Perfect!');

const drawHTree = (x, y, length, depth) => {
  if (depth < 1) return;
  // x - length / 2, y
  
  let leftMid = [(x - length) / 2, y];
  let rightMid = [(x + length) / 2, y]
  let leftTop = [(x - length) / 2, (y + length) / 2];
  let leftBot = [(x - length) / 2, (y - length) / 2];
  let rightTop = [(x + length) / 2, (y + length) / 2];
  let rightBot = ([x + length) / 2, (y - length) / 2];
  // leftmid = [x, y]
  // 2 vertical, 1 horizonal
  drawLine(...leftMid, ...rightMid);
  drawLine(...leftTop, ...leftBot);
  drawLine(...rightTop, ...rightBot);
  
  let newLength = length / Math.sqrt(2);
  
  depth -= 1
  
  drawHTree(leftTop[0], leftTop[1], newLength, depth)
  drawHTree(leftBot[0], leftBot[1], newLength, depth)
  drawHTree(rightTop[0], rightTop[1], newLength, depth)
  drawHTree(rightBot[0], rightBot[1], newLength, depth)
}


const drawLine = (x1,y2,x2,y2) => {
  console.log('new depth')
}
// O(n^4) Time Complexity
// O(n) space complexity; n = depth
// 4^n

console.log(drawHTree(0, 0, 4, 4))


// x:y is a number? continue function, else return null
// assume always 4 children

// variable to see which depth we're at(x = 1);
// depth = n
  // line to connect each parent node to children (4)
  // 4 children x 3 lines = 12 lines


// Answer

// H-Tree Construction
// We will start from the center point. Compute the coordinates of the 4 tips of the H. Then we shall draw the 3 line segments of the H, i.e. left and right vertical of the H, and the connection of the two vertical segments. We will update the length and recursively draw 4 half-size H-trees of order one less than the current depth.

// Pseudocode:

// function drawLine(x1, y1, x2, y2):
//     # draws line, assume implementation available

// function drawHTree(x, y, length, depth):
//     # recursion base case
//     if (depth == 0):
//         return

//     x0 = x - length/2
//     x1 = x + length/2
//     y0 = y - length/2
//     y1 = y + length/2

//     # draw the 3 line segments of the H-Tree
//     drawLine(x0, y0, x0, y1)    # left segment
//     drawLine(x1, y0, x1, y1)    # right segment
//     drawLine(x0,  y, x1,  y)    # connecting segment

//     # at each stage, the length of segments decreases by a factor of √2
//     newLength = length/√2

//     # decrement depth by 1 and draw an H-tree
//     # at each of the tips of the current ‘H’
//     drawHTree(x0, y0, newLength, depth-1)     # lower left  H-tree
//     drawHTree(x0, y1, newLength, depth-1)     # upper left  H-tree
//     drawHTree(x1, y0, newLength, depth-1)     # lower right H-tree
//     drawHTree(x1, y1, newLength, depth-1)     # upper right H-tree
    
// Time Complexity: every call of drawHTree invokes 9 expressions whose time complexity is O(1) and 4 calls of drawHTree until depth (denoted here as D) reaches to 0. Therefore: T(D) = 9 + 4 * T(D-1), where T is the time complexity function and D is the depth of the H-Tree. Now, if we expand T(D-1) recursively all the way to T(0), it’ll be easy to see that T(D) = O(4^D).

// Space Complexity: recursive calls add overhead since we store them in the execution stack. The space occupied in the stack will be then O(D), in the worst case scenario. The stack space occupied will be no more than O(D) at any given point since a sibling drawHTree will not be called before the current one being executed returns (i.e. finishes its execution).