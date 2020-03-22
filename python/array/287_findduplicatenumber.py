# Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

# Example 1:

# Input: [1,3,4,2,2]
# Output: 2
# Example 2:

# Input: [3,1,3,4,2]
# Output: 3
# Note:

# You must not modify the array (assume the array is read only).
# You must use only constant, O(1) extra space.
# Your runtime complexity should be less than O(n2).
# There is only one duplicate number in the array, but it could be repeated more than once.

# can do it in O(n^2) by comparing each number in the list and checking if its equal
# can do it in O(n log n) time by sorting it and then itterating through once
# can do it in O(n) time and o(n) space by creating a set and adding it oncec.

class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
      for i in range(len(nums)):
        index = abs(nums[i])
        if nums[index] < 0:
          return index
        else:
          nums[index] = -nums[index]
          
      return -1
        
# Time: O(n)
# Space: O(1)