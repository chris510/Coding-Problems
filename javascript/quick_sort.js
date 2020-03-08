function quickSort(array) {
  if (array.length <= 1) {
      return array;
  }

  let pivot = array.shift();
  let left = array.filter(el => el < pivot);
  let right = array.filter(el => el >= pivot);

  let leftSorted = quickSort(left);
  let rightSorted = quickSort(right);

  return [...leftSorted, pivot, ...rightSorted];
}


arr1 = [2, -1, 4, 3, 7, 3];
arr2 = [-1, 2, 3, 3, 4, 7];