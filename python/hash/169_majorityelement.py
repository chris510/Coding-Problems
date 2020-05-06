# Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

# You may assume that the array is non-empty and the majority element always exist in the array.

# Example 1:

# Input: [3,2,3]
# Output: 3
# Example 2:

# Input: [2,2,1,1,1,2,2]
# Output: 2

def majorityElement(nums):
  ele_count = dict()
  
  for num in nums:
    ele_count[num] = ele_count.get(num, 0) + 1
    
  list_len = len(nums)
  
  for num in ele_count:
    if ele_count[num] > list_len / 2:
      return num

# Time: O(n) | Space: O(n)
      