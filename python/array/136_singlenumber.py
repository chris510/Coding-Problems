# Given a non-empty array of integers, every element appears twice except for one. Find that single one.

# Note:

# Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

# Example 1:

# Input: [2,2,1]
# Output: 1
# Example 2:

# Input: [4,1,2,1,2]
# Output: 4

def singleNumber(self, nums: List[int]) -> int:
  seen = {}
  
  for num in nums:
    seen[num] = seen.get(num, 0) + 1
    
  for key, val in seen.items():
    if val == 1:
      return key

# Time: O(n) | Space: O(n) 

#Note: Can do in O(1) space using bitwise manipulation.
        