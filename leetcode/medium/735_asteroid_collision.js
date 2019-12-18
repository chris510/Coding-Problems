// We are given an array asteroids of integers representing asteroids in a row.

// For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

// two asteroids meet if they are in the same direction towards each other(positive and negative) and if they are the same size, both explode, the greater number will live.

// We will move from left to right until we meet a positive with a negative number. or negative number and vice versa.

// const asteroidCollison = asteroids => { 
//   let ast = asteroids[0];
//   let i = 1;

//   while (i < asteroids.length) {
//     let currAst = asteroids[i];
//     console.log(asteroids)
//     if (currAst > 0) {
//       ast = currAst;
//     } else if (currAst + ast === 0) {
//       asteroids = asteroids.slice(i, i-1);
//     } else if (currAst < 0 && Math.abs(currAst) > ast && ast > currAst) {
//       console.log('hey')
//       asteroids = asteroids.slice(asteroids.length -1)
//     } else if (currAst < 0 && currAst < ast)  {
//       console.log('hello')
//       asteroids = asteroids.slice(0,i);
//     }
//     i++
//   }
//   return asteroids;
// };

// const asteroidCollison = asteroids => {
//   let stack = [];
//   for (let i = 0; i < asteroids.length; i++) {
//     let currAst = asteroids[i]
//     if ((stack.length === 0 || stack[stack.length-1] < 0 && currAst < 0 )) {
//       stack.push(currAst);
//     } else if (currAst > 0) {
//       stack.push(currAst);
//     } else {
//       const poppedAst = stack.pop();

//       if (Math.abs(poppedAst) > Math.abs(currAst)) {
//         stack.push(poppedAst);
//       } else if (Math.abs(poppedAst) < Math.abs(currAst)) {
//         i--;
//       } else {
//         continue;
//       }
//     }
//   }
//   return stack;
// }

// Lisa Wen
// var asteroidCollison = function(asteroids) {
//     let i = 1;
//     while (i < asteroids.length) {
//         if (asteroids[i] < 0 && asteroids[i - 1] > 0) {
//             if (asteroids[i] * -1 > asteroids[i - 1]) {
//                 asteroids = asteroids.slice(0, i - 1).concat(asteroids.slice(i));
//             } else if (asteroids[i] * -1 < asteroids[i - 1]) {
//                 asteroids = asteroids.slice(0, i).concat(asteroids.slice(i + 1));
//             } else {
//                 asteroids = asteroids.slice(0, i - 1).concat(asteroids.slice(i + 1));
//             }
//             i--;
//         } else {
//             i++;
//         }
//     }
//     return asteroids;
// };

const asteroidCollison = asteroids => {
  let i = 1;
  while (i < asteroids.length) {
    if (asteroids[i] < 0 && asteroids[i - 1] > 0) {
      //we remove the bcckwards element then decrement by 1 because we need to check
      if (Math.abs(asteroids[i]) > asteroids[i - 1]) {
        asteroids.splice(i-1, 1);
        i--;
        //  remove the forward element
      } else if ((Math.abs(asteroids[i])) < asteroids[i - 1]) {
        asteroids.splice(i, 1);
        //remove both elements
      } else {
        asteroids.splice(i-1, 2);
        i--;
      }
    } else {
      i++;
    }
  }
  return asteroids;
}

console.log(asteroidCollison([5, 10, -5])) // [5, 10]
console.log(asteroidCollison([8, -8])) // []
console.log(asteroidCollison([10, 2, -5])) // [10]
console.log(asteroidCollison([-2,-2,1,2])); // [-2, -1, 1, 2]
console.log(asteroidCollison([-2,-2,1,-2])) // [-2,-2,-2]


// The length of asteroids will be at most 10000.
// Each asteroid will be a non-zero integer in the range [-1000, 1000]..