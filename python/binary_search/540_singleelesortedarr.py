# You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Find this single element that appears only once.

# Example 1:

# Input: [1,1,2,3,3,4,4,8,8]
# Output: 2
# Example 2:

# Input: [3,3,7,7,10,11,11]
# Output: 10
 
# Note: Your solution should run in O(log n) time and O(1) space.

def singleNonDuplicate(self, nums):
  left = 0
  right = len(nums)
  
  while left < right:
    mid = left + (right - left) // 2
    print(mid)
    if mid > 0 and nums[mid] == nums[mid - 1]:
      if (mid - 1) % 2 == 1:
        right = mid - 1
      else:
        left = mid + 1
    elif mid + 1 < len(nums) and nums[mid] == nums[mid + 1]:
      if mid % 2 == 1:
        right = mid - 1
      else:
        left = mid + 2
    else:
      return nums[mid]
  return nums[left]