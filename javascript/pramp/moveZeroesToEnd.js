// Move Zeros To End
// Given a static-sized array of integers arr, move all zeroes in the array to the end of the array. You should preserve the relative order of items in the array.

// We should implement a solution that is more efficient than a naive brute force.

function moveZerosToEnd(arr) {
  let left = 0;
  let right = left + 1;
  let len = arr.length;
  
  while (right < len) {
    console.log([arr[left], left], [arr[right], right])
    if ((arr[left] !== 0 && arr[right] !== 0) || (arr[left] !== 0 && arr[right] === 0)) {
      left++;
      right++;
    } else if (arr[left] === 0 && arr[right] !== 0) {
      swap(arr, left, right);
      left++;
      // right++;
    } else if (arr[left] === 0 && arr[right] === 0) {
      right++;
    }
  }
  
  return arr;
}

const swap = (arr, left, right) => {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}

// Time Complexity : O(n); 
// Space Complexity : O(1);

// Examples:

// input:  arr = [1, 10, 0, 2, 8, 3, 0, 0, 6, 4, 0, 5, 7, 0]
// output: [1, 10, 2, 8, 3, 6, 4, 5, 7, 0, 0, 0, 0, 0]
// Constraints:

// [time limit] 5000ms
// [input] array.integer arr
// 0 ≤ arr.length ≤ 20
// [output] array.integer