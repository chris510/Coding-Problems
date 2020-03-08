// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// const climbStairs = (num) => {
//   if (num < 0) return 0;
//   if (num === 1) return 1;
//   if (num === 2) return 2;

//   let oneStep = 2;
//   let twoStep = 1;
//   let allWays = 0;

//   for (let i = 2; i < num; i++) {
//     allWays = oneStep + twoStep;
//     twoStep = oneStep;
//     oneStep = allWays;
//   }
//   return allWays;
// }

// console.log(climbStairs(2));
// console.log(climbStairs(3));

const climbStairs = (n) => {
  //initiate a new array to fill in values of how many steps when moving forward
  let table = new Array(n + 1);
  table[0] = 1;
  table[1] = 1;

  for (let i = 2; i < table.length; i++) {
    table[i] = table[i - 1] + table[i - 2]; // add the possible steps you can take
  }
  return table[table.length - 1];
}

console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
