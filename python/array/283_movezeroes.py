# Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

# Example:

# Input: [0,1,0,3,12]
# Output: [1,3,12,0,0]
# Note:

# You must do this in-place without making a copy of the array.
# Minimize the total number of operations.

def moveZeroes(self, nums: List[int]) -> None:
  zero = 0
  for non_zero in range(len(nums)):
    if nums[non_zero] == 0:
      continue
        
    nums[zero], nums[non_zero] = nums[non_zero], nums[zero]

    zero += 1

# Time: O(n) | Space: O(1)

#       left = 0
#       right = left + 1

#       while right < len(nums) - 1:
#         if nums[left] == 0 and nums[right] == 0:
#           right += 1
          
#         if nums[left] == 0:
#           print('yes')
#           if nums[right] != 0:
#             self.swap(nums, left, right)
#           else:
#             right += 1
#         else:
#           left += 1
#       return nums
    
#     def swap(self, nums, left, right):
#       nums[left], nums[right] = nums[right], nums[left]