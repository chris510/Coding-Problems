// Given two arrays, write a function to compute their intersection.

var intersect = function(nums1, nums2) {
  // let length = Math.min(nums1.length, nums2.length);
  
  let hash = {};
  for (let i = 0; i < nums1.length; i++) {
    if (!hash[nums1[i]]) {
      hash[nums1[i]] = 1;
    } else {
      hash[nums1[i]]++;
    }
  }
  
  console.log(hash);
  
  let result = [];
  for (let i = 0; i < nums2.length; i++) {
    if (hash[nums2[i]] && hash[nums2[i]] ) {
      result.push(nums2[i]);
      hash[nums2[i]]--;
    }
  }
  return result
};

// var intersect = function(nums1, nums2) {
//   const map = new Map();
//   for (const n of nums1) {
//       if (map.has(n)) {
//           map.set(n, map.get(n) + 1);
//       } else {
//           map.set(n, 1);
//       }
//   }
//   const result = [];
//   for (const n of nums2) {
//       if (map.has(n) && map.get(n) > 0) {
//           result.push(n);
//           map.set(n, map.get(n) - 1);
//       }
//   }
//   return result;
// };

// Time Complexity: O(n * m) where n and m are the lengths of nums1 and nums2;
// Space Compleixty: O(n) since we are only storing one arrays worth of elements

// How about we sort this and give up some time for some space. We can sort and check and use 2 pointers making O(1) space and O(n log n) time
var intersect = function(nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  
  let res = [];
  
  let i = 0;
  let j = 0;
  
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      res.push(nums1[i]);
      i++;
      j++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else {
      i++;
    }
  }
  
  return res;
};

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Note:

// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.
// Follow up:

// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?