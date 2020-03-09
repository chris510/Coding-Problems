# Given an array of integers, return indices of the two numbers such that they add up to a specific target.

# You may assume that each input would have exactly one solution, and you may not use the same element twice.

# Example:

# Given nums = [2, 7, 11, 15], target = 9,

# Because nums[0] + nums[1] = 2 + 7 = 9,
# return [0, 1].

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
      
      num_dic = dict()
      solution = []
      
      for i, num in enumerate(nums):
        diff = target - num
        i_diff = num_dic.get(diff, None)
        if i_diff is not None and i_diff != i:
          solution = [i, i_diff]
          break
        else:
          num_dic[num] = i
      return solution
        
# Complexity: Time - O(n), Space - O(n)