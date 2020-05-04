# Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

# Each letter in the magazine string can only be used once in your ransom note.

# Note:
# You may assume that both strings contain only lowercase letters.

# canConstruct("a", "b") -> false
# canConstruct("aa", "ab") -> false
# canConstruct("aa", "aab") -> true

def canConstruct(ransomNote, magazine):
  alphas = dict()
  
  for letter in magazine:
    alphas[letter] = alphas.get(letter, 0) + 1

  for letter in ransomNote:
    if letter in alphas and alphas[letter] > 0:
      alphas[letter] = alphas.get(letter) - 1
    else:
      return False
  return True

# Time: O(n) | Space: O(m)
