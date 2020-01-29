// Implement a trie with insert, search, and startsWith methods.

//When you insert, we have look at the node, and check if the node is present in the root. If the node doesn't contain the next character, then we set as an empty object and then 'traverse' down that char to check the letters of each word. If there is no path with that word then it will create path and then set the last node to true;

//To traverse, we will start at the root and go down the letters to check if its present with the node. If its not, then we return null and the word is not available.

//To Search, we will use the traverse method and then return if the node is not null and if its a word, then we return true;
//For the strats with(prefix, we will traverse and see if the character prefix is null or not

class Trie {
  constructor() {
    this.root = {};
  }
  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node[char]) node[char] = {}; 
      node = node[char];
    }
    node.isWord = true;
  }
  traverse(word) {
    let node = this.root;
    for (let char of word) {
      node = node[char];
      if (node == null) return null;
    }
    return node;
  }
  search(word) {
    const node = this.traverse(word);
    return node != null && node.isWord === true;
  }
  startsWith(prefix) {
    return this.traverse(prefix) !== null;
  }
}

// Example:

// Trie trie = new Trie();

// trie.insert("apple");
// trie.search("apple");   // returns true
// trie.search("app");     // returns false
// trie.startsWith("app"); // returns true
// trie.insert("app");   
// trie.search("app");     // returns true
// Note:

// You may assume that all inputs are consist of lowercase letters a-z.
// All inputs are guaranteed to be non-empty strings.