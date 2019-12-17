// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.


// First method is using tabulation in order to keep track of the string length. We will initiate a new 'table' with the same length as the str. We will fill it with false and then everytime we are able to see a word in the word dictionary, then we are able to set the value 

//How big do we need to make our table?
//What does the table represent? (Values we are storing? return value?)
//Initial value and how that initial value can lead to further entries down the line.

const wordBreak = (str, wordDictionary) => {
  let table = new Array(str.length + 1).fill(false);
  table[0] = true;

  for (let i = 0; i < table.length; i++) {
    if (table[i] === false) continue;

    for (let j = i + 1; j < table.length; j++) {
      let word = str.slice(i, j);
      if (wordDictionary.includes(word)) {
        table[j] =  true;
      }
    }
  }
  return table[table.length - 1]
};

console.log(wordBreak('leetcode', ['leet', 'code']));
console.log(wordBreak("applepenapple", ["apple", "pen"]));
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));
