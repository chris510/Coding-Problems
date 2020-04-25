# Given an array of non-negative integers, you are initially positioned at the first index of the array.

# Each element in the array represents your maximum jump length at that position.

# Determine if you are able to reach the last index.

# Example 1:

# Input: [2,3,1,1,4]
# Output: true
# Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
# Example 2:

# Input: [3,2,1,0,4]
# Output: false
# Explanation: You will always arrive at index 3 no matter what. Its maximum
#              jump length is 0, which makes it impossible to reach the last index.

# Greedy - Time: O(n) | Space: O(1)

def canJump(self, nums: List[int]) -> bool:
  lastGoodIndexPos = len(nums) - 1
  numsLen = len(nums) - 1
  for i in range(numsLen, -1, -1):
    if i + nums[i] >= lastGoodIndexPos:
      lastGoodIndexPos = i
  return lastGoodIndexPos == 0

#Dynamic Programming - Time: O(n) | Space: O(1)

def canJump(self, nums):
  length = len(nums)
  dp = [0] * length
  
  dp[0] = nums[0]
  
  for i in range(1, length - 1):
    if dp[i - 1] < i:
        return False
  
    dp[i] = max(i + nums[i], dp[i - 1])
    
    if dp[i] >= length - 1:
      return True
  return dp[length - 2] >= length - 1