# We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)

# A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

# Return a list of all uncommon words. 

# You may return the list in any order.

# Example 1:

# Input: A = "this apple is sweet", B = "this apple is sour"
# Output: ["sweet","sour"]
# Example 2:

# Input: A = "apple apple", B = "banana"
# Output: ["banana"]

def uncommonFromSentences(A, B):
    a_list = A.split(' ')
    b_list = B.split(' ')
    seen_words = dict()
    
    for word in a_list:
      seen_words[word] = seen_words.get(word, 0) + 1
    
    for word in b_list:
      seen_words[word] = seen_words.get(word, 0) + 1
    return [word for word in seen_words if seen_words[word] == 1]