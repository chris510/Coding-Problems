//Given three integer arrays arr1, arr2 and arr3 sorted in strictly increasing order, return a sorted array of only the integers that appeared in all three arrays.

//This is just like the facebook intersection problem. Two ways to do this, use sets or use a hashh man and take it accordingly.

 
// const arraysIntersection = (arr1, arr2, arr3) => {
//   const unique = new Set(arr1.concat(arr2).concat(arr3));
//   const intersection = [...unique].filter(num => arr1.includes(num) && arr2.includes(num) && arr3.includes(num));

//   return intersection;
// }

// Time Complexity: O(n * m * o), since we are given an 3 differeent arrays of input sizes. We can have to check all of them for the corresponding number in order for it to put in the darray.

// Space Complexity: We are creating a new array to store these intersection values no matter the itteration so O(n) space.

// Another solution is to use 3 pointers as we are itterating through the array.

const arraysIntersection = (arr1, arr2, arr3) => {
  let result = [];
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < arr1.length && j < arr2.length && k < arr3.length) {
    if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
      result.push(arr1[i]);
      i++;
      j++;
      k++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr2[j] < arr3[k]) {
      j++;
    } else {
      k++;
    }
  }
  return result;
}

// Time Complexity: O(n * m * o), we are only itterating through each length of input array times given their size.
// Space Complexity: O(n) since we are only keep tracking of 3 pointers and the new array that we create could be atmost the length of the input. The space complexity will be O(n);

arr1 = [1,2,3,4,5]
arr2 = [1,2,5,7,9] 
arr3 = [1,3,4,5,8]
console.log(arraysIntersection(arr1, arr2, arr3)); // [1,5]
 