// There is a special keyboard with all keys in a single row.

// Given a string keyboard of length 26 indicating the layout of the keyboard (indexed from 0 to 25), initially your finger is at index 0. To type a character, you have to move your finger to the index of the desired character. The time taken to move your finger from index i to index j is |i - j|.

// You want to type a string word. Write a function to calculate how much time it takes to type it with one finger.

// Constraints:

// keyboard.length == 26
// keyboard contains each English lowercase letter exactly once in some order.
// 1 <= word.length <= 10^4
// word[i] is an English lowercase letter.

// THOUGHTPROCESS: We are given a single line keyboard with indices from 0-25 for all 26 letters on the keyboard. We want to find the time it takes for each key to move on to the next. The next index - previous index equals the time where every letter in the keyboard move represents 1 second.
// We can itterate through the word starting at the first index and always look at the previous index then calculate the space inbetween. If we're moving to the right, the number will be negative so we have to take the absolute values of this.

const calculateTime = (keyboard, word) => {
  let time = keyboard.indexOf(word[0]);
  for (let i = 1; i < word.length; i++) {
    let firstIdx = keyboard.indexOf(word[i]);
    let secondIdx = keyboard.indexOf(word[i - 1]);
    let timeTook = Math.abs(firstIdx - secondIdx);
    time += timeTook;
  }
  return time;
};

// Time Complexity: O(n), we are only ittearintg through the word for each function call so as the input size gets bigger, we need to itterate through more words.
// Space Complexity: O(n), we are only creating a time variable for every function call.

console.log(calculateTime(("abcdefghijklmnopqrstuvwxyz"), ('cba'))) // 4
  //Explanation: The index moves from 0 to 2 to write 'c' then to 1 to write 'b' then to 0 again to write 'a'. Total time = 2 + 1 + 1 = 4. 
console.log(calculateTime(("pqrstuvwxyzabcdefghijklmno"), ('leetcode'))); // 73
