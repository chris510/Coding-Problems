# Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

# (i.e., [0,0,1,2,2,5,6] might become [2,5,6,0,0,1,2]).

# You are given a target value to search. If found in the array return true, otherwise return false.

# Example 1:

# Input: nums = [2,5,6,0,0,1,2], target = 0
# Output: true
# Example 2:

# Input: nums = [2,5,6,0,0,1,2], target = 3
# Output: false
# Follow up:

# This is a follow up problem to Search in Rotated Sorted Array, where nums may contain duplicates.
# Would this affect the run-time complexity? How and why?

# class Solution:
#     def search(self, nums: List[int], target: int) -> bool:
#         for num in nums:
#           if num == target:
#             return True
#         return False

# Time: O(n) since we have to go through the whole array
# Space: O(1)

# class Solution:
#     def search(self, nums: List[int], target: int) -> bool:
#         left = 0
#         right = len(nums) - 1 
#         while left <= right:
#             mid = math.floor((left + right) / 2)
#             if nums[mid] == target:
#                 return True
#             if nums[mid] == nums[right]:
#                 right -= 1
#             elif nums[left] <= nums[mid]:
#                 if  nums[left] <= target and target < nums[mid]: 
#                     right = mid - 1
#                 else:
#                     left = mid + 1
#             else:
#                 if  nums[mid] < target and target <= nums[right]:
#                     left = mid + 1
#                 else:
#                     right = mid - 1
#         return False

# Time: O(log n) since we have to go through the whole array
# Space: O(1)