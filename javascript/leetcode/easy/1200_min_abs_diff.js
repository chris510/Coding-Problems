// Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements. 

// Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

// a, b are from arr
// a < b
// b - a equals to the minimum absolute difference of any two elements in arr

const minimumAbsDifference = (arr) => {
  arr.sort((a, b) => a - b);
  let minDiff = Infinity;
  let mins = [];

  for (let i = 1; i < arr.length; i++) {
    let potentialMinDiff = arr[i] - arr[i - 1]
    console.log(potentialMinDiff, minDiff)
    minDiff = Math.min(potentialMinDiff, minDiff);
  }
  // console.log(minDiff)
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] === minDiff) mins.push([arr[i - 1], arr[i]])
  }

  return mins
}

// Time Complexity: O(n) itterate through the array twice so 2n;
// Space Complexity: O(1) we are only returning the input array
 
// console.log(minimumAbsDifference([4,2,1,3])) // [[1,2],[2,3],[3,4]]
console.log(minimumAbsDifference([1,3,6,10,15])) // [[1,3]]
console.log(minimumAbsDifference([3,8,-10,23,19,-4,-14,27])) // [[-14,-10],[19,23],[23,27]]