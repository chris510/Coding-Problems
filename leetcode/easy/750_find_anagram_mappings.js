// Given two lists A and B, and B is an anagram of A. B is an anagram of A means B is made by randomizing the order of the elements in A.

// We want to find an index mapping P, from A to B. A mapping P[i] = j means the ith element in A appears in B at index j.

// These lists A and B may contain duplicates. If there are multiple answers, output any of them.

// A, B have equal lengths in range [1, 100].
// A[i], B[i] are integers in range [0, 10^5].

// We are given two arrays and we want to test to see if both arguments are anagrams of each other. An anagram is is a value given to two things that can be seen the same if they can be re arranged into the same thing. Create a hash map, and if the hashmap is emmpty, then they are anagrams.

//After doing a second re-reading, we are not checking if they are anagrams, we are looking at the position of the anagram at a certain index.

const anagramMappings = (A, B) => {
  const anaMap = [];

  for (let i = 0; i < A.length; i++ ) {
    let eleA = A[i];
    let idxB = B.indexOf(eleA);
    anaMap.push(idxB);
  }
  return anaMap;
}
// Time Complexity: O(n) because we have to itterate through A and B practically given their input size.
// Space Complexity: O(n), new array indices will not be bigger than the length of the arrays so it will increase with given input size.

// const anagramMappings = (A, B) => {
//   return A.map(i => B.indexOf(i));
// }


A = [12, 28, 46, 32, 50]
B = [50, 12, 32, 46, 28]
console.log(anagramMappings(A, B)) // [1, 4, 3, 2, 0]
  // P[0] = 1 because the 0th element of A appears at B[1], and P[1] = 4 because the 1st element of A appears at B[4], and so on.

