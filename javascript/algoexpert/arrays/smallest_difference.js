// Write a function that takes in two non-empty arrays of integers. The function should find the pair of numbers (one from the first array, one from the second array) whose absolute difference is closest to zero. The function should return an array containing these two numbers, with the number from the first array in the first position. Assume that there will only be one pair of numbers with the smallest difference.

//We could use pointers for array one and array two while keeping track of the smallest array, and smallest difference between them and move the pointers accordingly.

const smallestDifference = (arrayOne, arrayTwo) => {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let smallDiff;
  let diff = Infinity;
  let i = 0;
  let j = 0;

  while (i < arrayOne.length && j < arrayTwo.length) {
    // potentialDiff = Math.abs(arrayOne[i] - arrayTwo[j]);
    let potentialDiff = 0;
    let firstNum = arrayOne[i];
    let secondNum = arrayTwo[j];

    if (arrayOne[i] < arrayTwo[j]) {
      // if (potentialDiff < diff) {
      //   diff = potentialDiff;
      //   smallDiff = [arrayOne[i], arrayTwo[j]]
      // }
      potentialDiff = Math.abs(arrayOne[i] - arrayTwo[j]);
      i++;
    } else if (arrayOne[i] > arrayTwo[j]) {
      // if (potentialDiff < diff) {
      //   diff = potentialDiff;
      //   smallDiff = [arrayOne[i], arrayTwo[j]]
      // }
      potentialDiff = Math.abs(arrayOne[i] - arrayTwo[j]);
      j++;
    } else {
      return [arrayOne[i], arrayTwo[j]]
    }
    if (potentialDiff < diff) {
        diff = potentialDiff;
        // smallDiff = [arrayOne[i], arrayTwo[j]]
        smallDiff = [firstNum, secondNum];
      }
  }
  return smallDiff;
}

// Time Complexity: O(n log (n) * m log (m) where n and m are the input of the two arrays;
// Space Complexity: O(1) we are only returning the two numbers;



console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17])) // [28, 26]
