# Implement a trie with insert, search, and startsWith methods.

# Example:

# Trie trie = new Trie();

# trie.insert("apple");
# trie.search("apple");   // returns true
# trie.search("app");     // returns false
# trie.startsWith("app"); // returns true
# trie.insert("app");   
# trie.search("app");     // returns true
# Note:

# You may assume that all inputs are consist of lowercase letters a-z.
# All inputs are guaranteed to be non-empty strings.

class Trie(object):
  def __init__(self):
    self.root = {}
      
  def insert(self, word):
    root = self.root
    for char in word:
      if char not in root:
        root[char] = {}
      root = root[char]
    root["-"] = True
    print(root)

  def search(self, word):
    root = self.root
    for char in word:
      if char not in root:
        return False
      root = root[char]
    
    return "-" in root
      

  def startsWith(self, prefix):
    root = self.root
    for char in prefix:
      if char not in root:
        return False
      root = root[char]
    return True
        
trie = Trie();

trie.insert("apple");
trie.search("apple");   # returns true
trie.search("app");     # returns false
trie.startsWith("app"); # returns true
trie.insert("app");   
trie.search("app");     # returns true

