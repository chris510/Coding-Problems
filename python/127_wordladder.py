# Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

# Only one letter can be changed at a time.
# Each transformed word must exist in the word list.
# Note:

# Return 0 if there is no such transformation sequence.
# All words have the same length.
# All words contain only lowercase alphabetic characters.
# You may assume no duplicates in the word list.
# You may assume beginWord and endWord are non-empty and are not the same.
# Example 1:

# Input:
# beginWord = "hit",
# endWord = "cog",
# wordList = ["hot","dot","dog","lot","log","cog"]

# Output: 5

# Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
# return its length 5.
# Example 2:

# Input:
# beginWord = "hit"
# endWord = "cog"
# wordList = ["hot","dot","dog","lot","log"]

# Output: 0

# Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.

from collections import deque, defaultdict
def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
  if endWord not in wordList or not endWord or not beginWord or not wordList:
    return 0
  
  wordLen = len(beginWord)
  allCombos = defaultdict(list)
  
  for word in wordList:
    for i in range(wordLen):
      allCombos[word[:i] + "*" + word[i+1:]].append(word)
  
  queue = deque([])
  queue.append((beginWord, 1))
  seenWords = set()
  seenWords.add(beginWord)
  
  while queue:
    currentWord, level = queue.popleft()
    for i in range(wordLen):
      comboWord = currentWord[:i] + "*" + currentWord[i + 1:]
      for word in allCombos[comboWord]:
        if word == endWord:
          return level + 1
        if word not in seenWords:
          seenWords.add(word)
          queue.append((word, level + 1))
  return 0

#Time: O(m * n) | Space: O(m * n)