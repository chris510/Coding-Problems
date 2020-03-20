# Given a string, find the length of the longest substring without repeating characters.

# Example 1:

# Input: "abcabcbb"
# Output: 3 
# Explanation: The answer is "abc", with the length of 3. 
# Example 2:

# Input: "bbbbb"
# Output: 1
# Explanation: The answer is "b", with the length of 1.
# Example 3:

# Input: "pwwkew"
# Output: 3
# Explanation: The answer is "wke", with the length of 3. 
#              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        used = {}
        max_start = start = 0
        
        for idx, char in enumerate(s):
          if char in used and start <= used[char]:
            start = used[char] + 1
          else:
            max_start = max(max_start, idx - start + 1)
          used[char] = idx
          print(used)
        
        return max_start

# Time: O(n)
# Space: O(n)        