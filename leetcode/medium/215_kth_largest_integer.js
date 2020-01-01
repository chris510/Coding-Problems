// Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

// You may assume k is always valid, 1 ≤ k ≤ array's length.

// We are given an array and a number k where we want to find that number in the array indicating the kth largest number. I think this is a sliding window problem and we can use pointers to indicate which is the largest integer.
// We can sort initially and then use pointers to itterate through the whole array with a time complexity of n log n? Space is constant given we only return a number.

// const findKthLargest = (nums, k) => {
//   nums.sort((a, b) => a - b)
//   return nums[nums.length - k];
// };

//Time Complexity: O(n log n) since we are only sorting the array, its takes n log n time to sort and retrieval of any element in an array is constant.
// Space Complexity: O(1) because we are just changing the original input array given.

// Above works and is the fastest but for an interview, they will probably ask for the quicksort function
// In order to find the kth largest number in an array, it is basically saying we are looking for a target index of array.length-k. When we get our pivot index after partition, if the target index is smaller than the pivot index, that means the number we are looking for must exists in the left part of the partition. Same goes for the other side, if our target index is greater than the pivot index, that means our target number must exist in the right part of the partition. Since we already know which part of the partition includes our result, there is no need for us to even care about the other side of the partition. This will cut our computing time by half everytime. We found the result when our pivot index is equal to the target index.

const findKthLargest = (nums, k) => {

}

console.log(findKthLargest([3,2,1,5,6,4], 2)) // 5
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4)) // 4

function quickSort(array) {
  if (array.length <= 1) return array;

  let pivot = array.shift();
  let left = array.filter(el => el < pivot);
  let right = array.filter(el => el >= pivot);

  let leftSorted = quickSort(left);
  let rightSorted = quickSort(right);

  return [ ...leftSorted, pivot, ...rightSorted ];
}
