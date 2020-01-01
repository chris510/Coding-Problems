// Given two arrays, write a function to compute their intersection.

// Note:

// Each element in the result must be unique.
// The result can be in any order.

//Use a set and check the set to see if nums 1 and nums 2 are the same. Brute force but super inefficient.

// const intersection = (nums1, nums2) => {
//   let numsOne = new Set(nums1);
//   let inter = [];

//   for (num of nums2) {
//     if (numsOne.has(num)) {
//       inter.push(num);
//       numsOne.delete(num);
//     }
//   }
//   return inter;
// };

//Time Complexity: O(n * k) because we have to itterate through both arrays and the shortest one is the bottle neck;
//Space Complexity : O(N) beacuse we create a new set;

//We can only check the lower length array cause thats our bottle neck;
//Use a hash map?
//Sort the arrays and use the pointer method;

const intersection = (nums1, nums2) => {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let result = [];

  let i = 0;
  let j = 0;
  while (i < nums1.length || j < nums2.length) {
    if (nums1[i] == nums2[j]) {
      if (!result.includes(nums1[i])) {
        result.push(nums1[i]);
      }
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return result;
}

// Time Complexity: O(n log n * k log k) input sizes of nums1 and nums 2 since we are sorting it.
// Space Complexity: O(n * k), at most we will have a result array the size of the inputs.

// They ask for the intersection, which has a trivial solution using a hash or a set.

// Then they ask you to solve it under these constraints:
// O(n) time and O(1) space (the resulting array of intersections is not taken into consideration).
// You are told the lists are sorted.

// Cases to take into consideration include:
// duplicates, negative values, single value lists, 0's, and empty list arguments.
// Other considerations might include
// sparse arrays.

console.log(intersection([1,2,2,1], [2,2])) // [2]
console.log(intersection([4,9,5], [9,4,9,8,4])) // [9,4]