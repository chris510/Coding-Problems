function merge(array1, array2) {
  let merged = [];

  while (array1.length || array2.length) {
      let ele1 = array1.length ? array1[0] : Infinity;
      let ele2 = array2.length ? array2[0] : Infinity;

      let next;
      if (ele1 < ele2) {
          next = array1.shift();
      } else {
          next = array2.shift();
      }

      merged.push(next);
  }

  return merged;
}

function mergeSort(array) {
  if (array.length <= 1) {
      return array;
  }

  let midIdx = Math.floor(array.length / 2);
  let leftHalf = array.slice(0, midIdx);
  let rightHalf = array.slice(midIdx);

  let sortedLeft = mergeSort(leftHalf);
  let sortedRight = mergeSort(rightHalf);

  return merge(sortedLeft, sortedRight);
}

arr1 = [2, -1, 4, 3, 7, 3] //[-1, 2, 3, 3, 4, 7]
arr2 = ([1, 5, 10, 15], [0, 2, 3, 7, 10]) //[0, 1, 2, 3, 5, 7, 10, 10, 15]
arr3 = ([10, 13, 15, 25], []) // [10, 13, 15, 25]