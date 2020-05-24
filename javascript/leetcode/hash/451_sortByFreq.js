// Given a string, sort it in decreasing order based on the frequency of characters.

// Example 1:

// Input:
// "tree"

// Output:
// "eert"

// Explanation:
// 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
// Example 2:

// Input:
// "cccaaa"

// Output:
// "cccaaa"

// Explanation:
// Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
// Note that "cacaca" is incorrect, as the same characters must be together.
// Example 3:

// Input:
// "Aabb"

// Output:
// "bbAa"

// Explanation:
// "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.

var frequencySort = function(s) {
  const counts = getFreq(s);
  let res = "";
  const chars = Object.keys(counts);
  chars.sort((a, b) => {
    return counts[a] > counts[b] ? -1 : 1;
  })
  
  for (const char of chars) {
    let charCount = counts[char];
    res += char.repeat(charCount);
  }
  
  
  return res;
};

const getFreq = (str) => {
  const freq = {};
  
  for (const char of str) {
    if (freq[char]) {
      freq[char]++;
    } else {
      freq[char] = 1;
    }
  }
  
  return freq;
}

// Time: O(n log n) | Space: O(n)

// Since we sort the keys it takes n log n time and putting the keys into a hash map takes linear time.