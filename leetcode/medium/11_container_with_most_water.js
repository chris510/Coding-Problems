// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

// Note: You may not slant the container and n is at least 2.

var maxArea = function(height) {
  let maxArea = -Infinity;
  let hLen = height.length;
  for (let i = 0; i < hLen; i++) {
    for (let j = i + 1; j < hLen; j++) {
      let currMin = Math.min(height[i], height[j]);
      maxArea = Math.max(currMin * (j - i), maxArea);
    }
  }
  return maxArea;
};

// Time Complexity: O(n^2) since we are going through the loop twice and checking every pair of bars to see if its the max area or not.
// Space Complexity: O(1) we are not using a separate data structure

// Can use two pointer approach to bring this to linear time.

var maxArea = function(height) {
  let max = -Infinity;
  
  let left = 0;
  let right = height.length - 1;
  
  while (left < right) {
    let min = Math.min(height[left], height[right]);
    max = Math.max(max, min * (right - left));
    
    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  } 
  
  return max;
};

// Time Complexity: O(n) one pass using two pointers
// Space Complexity: O(1)
 



// The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

 

// Example:

// Input: [1,8,6,2,5,4,8,3,7]
// Output: 49