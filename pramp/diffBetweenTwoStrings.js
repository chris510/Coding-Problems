// Diff Between Two Strings
// Given two strings of uppercase letters source and target, list (in string form) a sequence of edits to convert from source to target that uses the least edits possible.

// For example, with strings source = "ABCDEFG", and target = "ABDFFGH" we might return: ["A", "B", "-C", "D", "-E", "F", "+F", "G", "+H"

// More formally, for each character C in source, we will either write the token C, which does not count as an edit; or write the token -C, which counts as an edit.

// Additionally, between any token that we write, we may write +D where D is any letter, which counts as an edit.

// At the end, when reading the tokens from left to right, and not including tokens prefixed with a minus-sign, the letters should spell out target (when ignoring plus-signs.)

// In the example, the answer of A B -C D -E F +F G +H has total number of edits 4 (the minimum possible), and ignoring subtraction-tokens, spells out A, B, D, F, +F, G, +H which represents the string target.

// If there are multiple answers, use the answer that favors removing from the source first.

const findDiff = (str, target) => {
  let steps = [];
  let i = 0;
  let j = 0;
  let srcLen = str.length;
  let tarLen = target.length;

  while (i < srcLen || j < tarLen) {
    let srcChar = str[i];
    let tarChar = target[j];
    let srcNum = str.charCodeAt(i);
    let tarNum = target.charCodeAt(j);

    if (srcNum === tarNum) {
      steps.push(`${srcChar}`);
      i++;
      j++;
    } else if (srcNum < tarNum) {
      steps.push(`-${srcChar}`);
      i++;
    } else {
      steps.push(`+${srcChar}`);
      j++;
    }
  }

  let nextChars = str.length || target.length
  return steps;
}

console.log(findDiff("ABCDEFG", "ABDFFGH")) // ["A", "B", "-C", "D", "-E", "F", "+F", "G", "+H"]

// Constraints:

// [time limit] 5000ms
// [input] string source
// 2 ≤ source.length ≤ 12
// [input] string target
// 2 ≤ target.length ≤ 12
// [output] array.string