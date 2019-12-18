// Given a binary matrix A, we want to flip the image horizontally, then invert it, and return the resulting image.

// To flip an image horizontally means that each row of the image is reversed.  For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].

// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting [0, 1, 1] results in [1, 0, 0].

// 1 <= A.length = A[0].length <= 20
// 0 <= A[i][j] <= 1

const flipAndInvertImage = array => {
  let newArr = []
  for (let i = 0; i < array.length; i++) {
    temp = reverse(array[i]);
    newArr.push(flip(temp));
  }
  return newArr;
};

const reverse = arr => {
  newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      newArr.push(1);
    } else if (arr[i] === 1) {
      newArr.push(0);
    }
  }
  return newArr;
}

const flip = arr => {
  newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

// console.log(flip([1,1,0]))
// console.log(reverse([1,0,0]));
console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]])); // [[1,0,0],[0,1,0],[1,1,1]]
console.log(flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]])) // [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]