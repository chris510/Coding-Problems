// const squareRoot = (n) => {
//   for (var i = 0; i * i <= n; i++) {
//     if (i * i === n)
//       return i;
// }
//   return -1; //
// }

// 25 -> 5 
// 1,2,3,4,5

// (1...n); 1,2,3,4,5,6,

// Time Complexity: O(n) because at most we can traverse the whole loop from 0 to n and not find the number.
// Space Complexity: O(1) because we are not returning anything

// Could also use a two pointer solution cause its kind of like a sorted array.

// For this problem, It is kind of searching through a list of sorted elements because you go from 0 to n. The target is the number that multiplys against it self to find n so its kind of like searching for an identical number in the array.

//

const squareRoot = (n) => {
  let low = 0;
  let high = n;
  let res;
  while (low <= high) {

    let mid = Math.floor((low + high) / 2);
    let potentialMatch = mid * mid;

    if (potentialMatch === n) {
      return mid;
    } else if (potentialMatch > n) {
      high = mid - 1;
    } else {
      low = mid + 1;
      res = mid
    }
  }

  let increase = 0.1;
  for (let i = 0; i <= 1; i++) {
    while (res * res <= n) { 
      console.log(res);
      res += increase; 
    }
    res = res - increase; 
    increase = increase / 10 
  } 

  return res.toFixed(1);
}


// Time Complexity: O(log n) cause at most we are splitting through half the number n.
// Space compelxity: O(1) where the space is constant.

// console.log(squareRoot(25));
console.log(squareRoot(24));
// console.log(squareRoot(64));
// console.log(squareRoot(20));
// console.log(squareRoot(100));
// console.log(squareRoot(50));
