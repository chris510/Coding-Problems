// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.


//Thought process: We can use two pointers to itterate through both arrays. We look at each point and then use the method splice depending on which number is greater. If the nums1 array is larger, then we can just move forward.

const merge = (nums1, m, nums2, n) => {
  nums1.splice(m, nums1.length);
  nums2.splice(n, nums2.length);

  let a = 0;
  let b = 0;

  while (b < n) {
    // If the second array number is bigger or we run out of the first array to itterate through.
    if (nums2[b] < nums1[a] || nums1[a] === undefined) {
      nums1.splice(a, 0, nums2[b]);
      a++;
      b++;
    } else { // first number in the array is bigger, so we will continue with the next comparison.
      a++;
    }
  }
  return nums1;
};

// Time Complexity: O(n * k) where n and k are the lengths of both arrays.
// Space Complexity: O(1) where space is constant since we are just modifying the original array.

// Example:

// Input:
nums1 = [1,2,3,0,0,0]
m = 3
nums2 = [2,5,6]
n = 3

console.log(merge(nums1, m, nums2, n)); // [1,2,2,3,5,6]
