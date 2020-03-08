// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

// We can solve this in linear time by going through each bad version from 0 to n and finding the first 'bad version' and returning it.
// But this problem is in sorted array and we are locating a bad version so we can use binary search to find the first bad version.

var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let left = 0;
    let right = n;
    
    while (right - left !== 1) {
      let mid = Math.floor((left + right) / 2)
      
      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid;
      }
    }
    return right
  };
};

// Time Complexity: O(log n) because we are using binary search;
// Space Complexity: O(1) not using any space.

// Example:

// Given n = 5, and version = 4 is the first bad version.

// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true

// Then 4 is the first bad version.