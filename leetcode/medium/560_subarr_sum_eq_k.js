// Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

// Use a hash map and sum variable. As we go through the itteration of the nums array, we will keep track of every number added to the sum and we do sum - k. If its a new usm, we will add it to the hash map, if we don't we increment the times we seen that sum and then we increment  the count by that same amount that we seen it which is in our hash map. Since we are incrementing the sums hash with the count nxt to each other. They should be the same by the time we ittearte throught the entire array. 

var subarraySum = function(nums, k) {
  let count = 0; sum = 0;
  let seen = new Map();
  seen.set(0, 1);
  
  for (let i = 0; i < nums.length; i ++) {
    sum += nums[i];
    
    if (seen.has(sum - k)) count += seen.get(sum - k);
    if (seen.has(sum)) {
       seen.set(sum, seen.get(sum) + 1)
    } else {
      seen.set(sum, 1)
    }
  }
  return count;
};

// Time Complexity: O(n) where we traverse the n once;
// Space Complexity: O(n) because we need to store the values in the hash map;

// Brute force by going through each subarray and hhecking the sum and then returning the counter if the subarray equals the sum;
var subarraySumBF = function(nums, k) {
    let counter = 0;
    for (let i=0;i<nums.length;i++) {
        let base = 0;
        for (let j=i;j<nums.length;j++) {
            base+=nums[j];
            if (base == k) counter++;
        }
    }
    return counter;
};

// Time Complexity: O(n^3) because we have to find the subarray using a nested for loop and then checking if the sum === k takes linear time;
// Space Complexity: O(1);

// Example 1:
// Input:nums = [1,1,1], k = 2
// Output: 2
// Note:
// The length of the array is in range [1, 20,000].
// The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].