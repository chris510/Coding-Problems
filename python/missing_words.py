# s = 'I am using HackerRank to improve programming'
# t = 'am HackerRank to improve'

s = 'Python is an easy to learn powerful programming language It has efficient high-level data structures and a simple but effective approach to objectoriented programming Python elegant syntax and dynamic typing'
t = 'Python is an easy to learn powerful programming language'

def findMissingWords(s, t):
  all_words = s.split(' ') + t.split(' ')
  word_count = dict()

  for word in all_words:
    word_count[word] = word_count.get(word, 0) + 1
  
  for other_word in s.split(' '):
    if word_count[word] > 1:
      word_count[word] -= 1

  return word_count

  


# It
# has
# efficient
# high-level
# data
# structures
# and
# a
# simple
# but
# effective
# approach
# to
# objectoriented
# programming
# Python
# elegant
# syntax
# and
# dynamic
# typing


print(findMissingWords(s, t))