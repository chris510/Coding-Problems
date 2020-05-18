# Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

# Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

# The order of output does not matter.

# Example 1:

# Input:
# s: "cbaebabacd" p: "abc"

# Output:
# [0, 6]

# Explanation:
# The substring with start index = 0 is "cba", which is an anagram of "abc".
# The substring with start index = 6 is "bac", which is an anagram of "abc".
# Example 2:

# Input:
# s: "abab" p: "ab"

# Output:
# [0, 1, 2]

# Explanation:
# The substring with start index = 0 is "ab", which is an anagram of "ab".
# The substring with start index = 1 is "ba", which is an anagram of "ab".
# The substring with start index = 2 is "ab", which is an anagram of "ab".

def findAnagrams(self, s, p):
  start = end = counter = 0
  plen = len(p)
  result = []
  # Store counter of the target string.
  pmap = dict()
  for i in p:
    pmap[i] = pmap.get(i, 0) + 1
  # smap keeps the current window counter
  # i.e. all characters in s[start:end] counter is stored in smap
  smap = {}

  while end < len(s):
    c = s[end]
    smap[c] = smap.get(c, 0) + 1
    counter += 1
    if counter == plen:
      # If both pmap and smap matches, we got one result
      if smap == pmap:
          result.append(start)
      # Since we are going to increment start, decrease it's counter in smap
      smap[s[start]] -= 1
      # < 0? Pop it because it's not part of window anymore
      if smap[s[start]] <= 0:
          smap.pop(s[start])
      counter -= 1
      start += 1
    end += 1
  return result

# Time: O(n) | Space: O(1)