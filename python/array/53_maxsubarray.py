# Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

# Example:

# Input: [-2,1,-3,4,-1,2,1,-5,4],
# Output: 6
# Explanation: [4,-1,2,1] has the largest sum = 6.
# Follow up:

# If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
      
      max_seq = nums[0]
      curr_sum = nums[0]
      
      for num in nums[1:]:
        if curr_sum < 0:
          curr_sum = num
        else:
          curr_sum += num
        
        if curr_sum > max_seq:
          max_seq = curr_sum
          
      return max_seq

# Time: O(N)
# Space: O(1)