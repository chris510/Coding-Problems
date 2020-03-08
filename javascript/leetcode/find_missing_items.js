// airbnb question in 2016

// given 2 arrays that contain unique values, return the missing number for the output.

const findMissingNumbers = (arr1, arr2) => {
  let set = new Set(arr1);

  for (let i = 0; i < arr2.length; i++) {
    if (set.has(arr2[i])) {
      continue;
    } else {
      return arr2[i];
    }
  }

}

console.log(findMissingNumbers([4, 12, 9, 5, 6], [4, 12, 6, 4]));