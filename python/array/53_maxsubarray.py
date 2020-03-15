# Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

# Example:

# Input: [-2,1,-3,4,-1,2,1,-5,4],
# Output: 6
# Explanation: [4,-1,2,1] has the largest sum = 6.
# Follow up:

# If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

# class Solution:
#     def maxSubArray(self, nums: List[int]) -> int:
      
#       max_seq = nums[0]
#       curr_sum = nums[0]
      
#       for num in nums[1:]:
#         if curr_sum < 0:
#           curr_sum = num
#         else:
#           curr_sum += num
        
#         if curr_sum > max_seq:
#           max_seq = curr_sum
          
#       return max_seq

# class Solution:
#     def maxSubArray(self, nums: List[int]) -> int:
#         max_sum = nums[0]
#         curr_sum = max_sum
        
#         for num in nums[1:]:
#           curr_sum = max(curr_sum + num, num)
#           max_sum = max(curr_sum, max_sum)
        
#         return max_sum

# Time: O(N)
# Space: O(1)

# Divide and Conquer

class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
      return self.divide_and_conq(nums, 0, len(nums) - 1)
      
    def divide_and_conq(self, nums, left, right):
      if left > right:
        return float(-inf)
      mid = math.floor((left + right)/2)
      
      left_max = curr_sum = 0
      for i in range(mid - 1, left - 1, -1):
        curr_sum += nums[i]
        left_max = max(left_max, curr_sum)
        
      right_max = curr_sum = 0
      for i in range(mid + 1, right + 1):
        curr_sum += nums[i]
        right_max = max(right_max, curr_sum)
        
      left_ans = self.divide_and_conq(nums, left, mid - 1)
      right_ans = self.divide_and_conq(nums, mid + 1, right)
      
      return max(left_max + nums[mid] + right_max, max(left_ans, right_ans))


# Time: O(N log N) because we're going through the whole array but splitting it into n sub problems
# Space: O(log N) recursion 