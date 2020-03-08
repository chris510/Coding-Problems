// Given a collection of intervals, merge all overlapping intervals.

//We will add an inital interval to the output array and then check if it overlaps. If it doens't then we will push that new currInterval which is the next item in the for looop and check that with our current interval.

var merge = function(intervals) {
  if (intervals.length <= 1) return intervals;
  
  intervals.sort((arr1, arr2) => arr1[0] - arr2[0])
  
  const result = [];
  let currInterval = intervals[0];
  result.push(currInterval);
  
  for (let interval of intervals) {
    let currBegin = currInterval[0];
    let currEnd = currInterval[1];
    let nextBegin = interval[0];
    let nextEnd = interval[1];
    
    if (currEnd >= nextBegin) {
      currInterval[1] = Math.max(currEnd, nextEnd);
    } else {
      currInterval = interval;
      result.push(currInterval);
    }
  }
  
  return result;
};

// Time Complexity: O(n log n) since the array given to us is not sorted, we need to sort it to find adjacent intervals that are overlapping.
// Space Complexity: O(1) we are sorting in place and only returning an output with new intervals. Linear since if the result counts as extra space.
// Example 1:

// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
// NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.