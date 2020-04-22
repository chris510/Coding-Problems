# Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

# Example 1:
# Input:nums = [1,1,1], k = 2
# Output: 2
# Note:
# The length of the array is in range [1, 20,000].
# The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].

def subarraySum(nums, k):
  if not nums: return 0
  
  count, sums, seen = 0, 0, dict()
  seen[0] = 1
  for i in range(len(nums)):
    sums += nums[i]
    numSeen = sums - k
    count += seen.get(numSeen, 0)
    seen[sums] = seen.get(sums, 0) + 1
        
  return count

# Time: O(n) | Space: O(n)