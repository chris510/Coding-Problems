const s = 'Python is an easy to learn powerful programming language It has efficient high-level data structures and a simple but effective approach to objectoriented programming Python elegant syntax and dynamic typing'
const t = 'Python is an easy to learn powerful programming language'

s1 = 'I like cheese';
t1 = 'like';

s2 = 'I am using HackerRank to improve programming';
t2 = 'am HackerRank to improve';

// Find the missing words in t that is represented in s
  // Can have duplicate words in s and if theres one in t, you just minus the count by 1


// const findMissingWords = (s, t) => {
//   const listA = s.split(' ');
//   const listB = t.split(' ');
//   const missingWords = new Set(listA);
//   const missing = [];
//   for (word of listB) {
//     missingWords.delete(word)
//   }
  
//   for (word of listA) {
//     if (missingWords.has(word)) {
//       missing.push(word);
//     } else {
//       missingWords.add(word);
//     }
//   }
//   return missing
// }

const findMissingWords = (s, t) => {
  const listA = s.split(' ');
  const listB = t.split(' ');
  const missing = [];

  for (let i = 0, j = 0; i < listA.length; i++) {
    if (j < listB.length && listA[i] == listB[j]) {
      j++;
    } else {
      missing.push(listA[i]);
    }
  }
  return missing;
}

result = 'It has efficient high-level data structures and a simple but effective approach to objectoriented programming Python elegant syntax and dynamic typing'

// console.log(findMissingWords(s, t) == result.split(' '));
console.log(findMissingWords(s, t));
console.log(findMissingWords(s1, t1));
console.log(findMissingWords(s2, t2));