// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all triplets in the array that sum up to the target sum and return a two-dimensional array of all these triplets. The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold. If no three numbers sum up to the target sum, the function should return an empty array.

// Use the same sliding window technique but instead use three pointers. We will have a number, its corresponding number to the right and then one at the end of the array.

const threeNumberSum = (arr, target) => {
  arr.sort((a, b) => a - b);
  let triple = [];

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      let match = num + arr[left] + arr[right];
      if (match === target) {
        triple.push([num, arr[left], arr[right]]);
        left++;
        right--
      } else if (match < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return triple
}

// Time Complexity: (n^2) We have to itterate through each number and then find the corresponding second and third digits to reach the sum if there is any. We have to go through the whole arrays to find the match cause in this case, there could be multiple.
//Space Complexity: O(n), at most we will have every number in the given input array we can have.

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0)); // [[-8, 2, 6][-8, 3, 5], [-6, 1, 5]]
