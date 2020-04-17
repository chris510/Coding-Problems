# Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

# Example 1:
# Input: [0,1]
# Output: 2
# Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
# Example 2:
# Input: [0,1,0]
# Output: 2
# Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
# Note: The length of the given binary array will not exceed 50,000.

def findMaxLength(nums):
  if len(nums) == 1: return 0
  
  max_len = 0
  count = 0
  table = {0: -1}
  
  for i, num in enumerate(nums):
    if num == 0:
      count += 1
    else:
      count -= 1
      
    if count in table:
      max_len = max(max_len, i - table[count])
    else:
      table[count] = i

  return max_len

# Time: O(n) | # Space: O(n)
        