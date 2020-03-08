// Find The Duplicates
// Given two sorted arrays arr1 and arr2 of passport numbers, implement a function findDuplicates that returns an array of all passport numbers that are both in arr1 and arr2. Note that the output array should be sorted in an ascending order.

// Let N and M be the lengths of arr1 and arr2, respectively. Solve for two cases and analyze the time & space complexities of your solutions: M ≈ N - the array lengths are approximately the same M ≫ N - arr2 is much bigger than arr1.

// Example:

// input:  arr1 = [1, 2, 3, 5, 6, 7], arr2 = [3, 6, 7, 8, 20]

// output: [3, 6, 7] # since only these three values are both in arr1 and arr2
// Constraints:

// [time limit] 5000ms

// [input] array.integer arr1

// 1 ≤ arr1.length ≤ 100
// [input] array.integer arr2

// 1 ≤ arr2.length ≤ 100
// [output] array.integer

function findDuplicates(arr1, arr2) {
  const dupes = [];
  
  let one = 0;
  let two = 0;
  
  while (one < arr1.length && two < arr2.length) {
    let numOne = arr1[one];
    let numTwo = arr2[two];
    
    if (numOne === numTwo) {
      dupes.push(numOne);
      one++;
      two++;
    } else if (numOne < numTwo) {
      one++;
    } else {
      two++;
    }
  }
  
  return dupes;
}

// Time Complexity: O(n) - we only have auxillary variables
// Space Complexity: O(1) - not returning anything besides the dupes array

function findDuplicates(arr1, arr2) {
  let dupes = [];
  
  let shorterArr = arr1.length > arr2.length ? arr2 : arr1;
  let longerArr = arr1.length > arr2.length ? arr1 : arr2;
  
  for (let num of shorterArr) {
    if (binarySearch(longerArr, num)) dupes.push(num);
  }
  
  return dupes
}

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
}

// Time Complexity : O(m log n) Itterate through the smaller number array and then binary search that.
// Space Complexity: O(1) // Same as above problem