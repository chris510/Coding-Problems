// Write a function, FindIntersection, that reads an array of strings which will contain two elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a string of numbers that occur in both elements of the input array in sorted order. If there is no intersection, return the string “false”.

// For example: if the input array is [“1, 3, 4, 7, 15”, “1, 2, 4, 15, 21”] the output string should be “1, 4, 15” because those numbers appear in both strings (they are the common elements). The array given will not be empty, and each string inside the array will be of numbers sorted in ascending order and may contain negative numbers.

// Another example: if the input array is [“1, 3, 9, 10, 17, 18”, “1, 4, 9, 10”] the output string should be “1, 9, 10” because those numbers appear in both of the strings.

//Thoughtprocess, we are given an array separating two strings. and we want to return the number that appears in both strings. 
  // First way we could use is a set, and then iterrate through one string and check it with the other. And if its avaiable, we will filter it into a variable and then check to see if it returns the unique numbers.
  //Or create a hash map and increase the count by one of the key is there or decrease if the key is therer.

const findIntersection = (arr) => {
  const [s1, s2] = arr.map(x => new Set(x.split(', ')));
  const intersection = [...s1].filter(number => s2.has(number));
  // console.log(intersection)
  return intersection.length === 0 ? 'false' : intersection.join(', ');
}

//Time Complexity: O(n) We have to itterate through the whole array given the input size;
//Space Complexity; O(n) The array we return will always be less than the input size so the space at best will be up there.

const findIntersection = (arr) => {
  let nums = {};
  const [s1, s2] = arr.map(str => str.split(','));

  for (let i = 0; i < s1.length; i++) {
    if (!nums[s1[i]]) {
      nums[s1[i]] = 0;
      nums[s1[i]]++;
    } else {
      nums[s1[i]]++;
    }
  }

  for (let j = 0; j < s2.length; j++) {
    if (!nums[s2[j]]) {
      nums[s2[j]] = 0;
      nums[s2[j]]++;
    } else {
      nums[s2[j]]--;
    }
  }

  let intersection = Object.keys(nums).filter(key => nums[key] === 0);
  return intersection.join(',')
}

// Time Complexity: O(n * m), we will itterate through the length of the array so the time increases with the input size.
// Space Complexity:O(n), the size we save is relative to the input size of the input array.

console.log(findIntersection(['1, 3, 4, 7, 15', '1, 2, 4, 15, 21']));
// console.log(findIntersection(['1, 3, 9, 10, 17, 18', '1, 4, 9, 10']));