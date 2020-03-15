# Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

# Example 1:

# Input: "babad"
# Output: "bab"
# Note: "aba" is also a valid answer.
# Example 2:

# Input: "cbbd"
# Output: "bb"

class Solution:
    def longestPalindrome(self, s: str) -> str:
      if len(s) == 1:
        return s
      res = ""
      for i, char in enumerate(s):
        odd = self.expand_from_center(i, i, s)
        if len(odd) > len(res):
          res = odd
        even = self.expand_from_center(i, i + 1, s)
        if len(even) > len(res):
          res = even
      return res
    
    def expand_from_center(self, left, right, str):
      if right < left or len(str) == 0:
        return null
      
      while left >= 0 and right < len(str) and str[left] == str[right]:
        left -= 1
        right += 1
      
      return str[left + 1: right]

# Time: O(n^2) since we are looping through the string once, expanding from the center could take another linear time.
# Space: O(1)
        