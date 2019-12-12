// Given a string S, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.

// S consists of lowercase English letters only.
// 1 <= S.length <= 1000

// We are given a string and we want to remove the vowels from the string, there are only 5 vowels in the alphabet and since the constraint is only lowercase, theres only 5. Itterate through, if its a vowel, we put an empty string, otherwise we put the consonant"

const removeVowels = (str) => {
  const vowels = "aeiou";
  let noVowels = "";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      continue
    } else {
      noVowels += str[i];
    }
  }
  return noVowels;
}

// TimeComplexity, since we are only itterating once, its a O(n).
// Space Complexity, if the input gets bigger, we are still only returning a single variable. So O(1).

console.log(removeVowels("leetcodeisacommunityforcoders")); //"ltcdscmmntyfrcdrs"
console.log(removeVowels("aeiou")); ""
