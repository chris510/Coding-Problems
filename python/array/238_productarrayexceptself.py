# Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

# Example:

# Input:  [1,2,3,4]
# Output: [24,12,8,6]
# Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

# Note: Please solve it without division and in O(n).

# Follow up:
# Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

# class Solution:
#     def productExceptSelf(self, nums: List[int]) -> List[int]:
#       length = len(nums)
#       res = [0]*length
#       res[0] = 1
      
#       for i in range(1, length):
#         res[i] = nums[i - 1] * res[i - 1]
        
#       right = 1;
#       for i in reversed(range(length)):
#         res[i] = res[i] * right
#         right *= nums[i]
        
#       return res

# Time: O(N) since we are looping through the number array from left and right once; technically 2N
# Space: O(1) answer array doesn't count towards the space complexity