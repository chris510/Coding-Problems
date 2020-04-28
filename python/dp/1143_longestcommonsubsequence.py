# Given two strings text1 and text2, return the length of their longest common subsequence.

# A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.

# If there is no common subsequence, return 0.

# Example 1:

# Input: text1 = "abcde", text2 = "ace" 
# Output: 3  
# Explanation: The longest common subsequence is "ace" and its length is 3.
# Example 2:

# Input: text1 = "abc", text2 = "abc"
# Output: 3
# Explanation: The longest common subsequence is "abc" and its length is 3.
# Example 3:

# Input: text1 = "abc", text2 = "def"
# Output: 0
# Explanation: There is no such common subsequence, so the result is 0.

def longestCommonSubsequence(text1, text2):
  if not text1 or not text2: return 0
  row = len(text1)
  col = len(text2)
  
  # shallow results where every element in the array is pointed to one object
  # DO NOT USE
  # dp = [[0] * (col + 1)] * (row + 1) 
  dp = [[0 for i in range(col + 1)] for j in range(row + 1)]
  
  for i in range(1, row + 1):
    for j in range(1, col + 1):
      if text1[i - 1] == text2[j - 1]:
        dp[i][j] = 1 + dp[i - 1][j - 1]
      else:
        dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
  
  return dp[row][col]

# Time: O(m * n) | Space: O(m * n)