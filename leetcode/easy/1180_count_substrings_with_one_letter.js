// Given a string S, return the number of substrings that have only one distinct letter.


//The number of substrings is indicated by the length of the string given. We can do this in n squared time complexity if we create an array of substrings and only look at the substrings that are made if its unique.
//But we need to do it in a way that we only itterate once through the string in order to create it with linear space.

//for "aaa"; "a" appears 3 times, "aa" repeats 2 times, and "aaa" repeats 1 time for a total of 6 times. I think we would itterate through the string and check each itteration, and if its the same, we will add that to the repeat number and if its not, then thats the end of the itteration and we move in to the next.

// So if the current character matches the next character we increment the repeat and proceed to the next itteration of the loop.

// When the current character does not match the next character we have found the end of the repeat and can calculate how many substrings that set would have. We add that to the answer variable and reset the repeat to 0. We step out of the if block and increment the repeat variable to 1.

// We stop the loop at the penultimate character because looping through for the final character would throw off the repeat variable and there is no character past the last one to check against.
// a, aa, aaa, aaaa = 1, 3, 6, 10 => n * (n + 1) / 2
const countLetters = (S) => {
  let repeat = 1;
  let answer = 0;
  for (let i = 0; i < S.length - 1; i++) {
    if (S[i] !== S[i + 1]) {
      answer += repeat * (repeat + 1) / 2;
      repeat = 0;
    }
    repeat++;
  }
  return answer + repeat * (repeat + 1) / 2;
};

console.log(countLetters('aaaba')); // 8
// Explanation: The substrings with one distinct letter are "aaa", "aa", "a", "b".
// "aaa" occurs 1 time.
// "aa" occurs 2 times.
// "a" occurs 4 times.
// "b" occurs 1 time.
console.log(countLetters("aaaaaaaaaa")); // 55
 

// Example 1:

// Input: S = "aaaba"
// Output: 8
// Explanation: The substrings with one distinct letter are "aaa", "aa", "a", "b".
// "aaa" occurs 1 time.
// "aa" occurs 2 times.
// "a" occurs 4 times.
// "b" occurs 1 time.
// So the answer is 1 + 2 + 4 + 1 = 8.
// Example 2:

// Input: S = "aaaaaaaaaa"
// Output: 55
 

// Constraints:

// 1 <= S.length <= 1000
// S[i] consists of only lowercase English letters.