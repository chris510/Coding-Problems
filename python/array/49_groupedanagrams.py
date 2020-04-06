# Given an array of strings, group anagrams together.

# Example:

# Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
# Output:
# [
#   ["ate","eat","tea"],
#   ["nat","tan"],
#   ["bat"]
# ]

# def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
#       grouped = {}
      
#       for word in strs:
#         sorted_word = tuple(sorted(word))
#         grouped[sorted_word] = grouped.get(sorted_word, []) + [word]
#       return grouped.values()

# Time: O(n * k) where n is the length of the str and k is the largest length of all the strings
# Space: O(n * k)