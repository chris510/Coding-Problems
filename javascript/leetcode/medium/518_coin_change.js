// You are given coins of different denominations and a total amount of money. Write a function to compute the number of combinations that make up that amount. You may assume that you have infinite number of each kind of coin.

// const change = (amount, coins) => {
//   // initialize an array with zeros as initial amounts, will use to hold past cents 
//   // const waysOfDoingAmount = [];
//   // for (let i = 0; i <= amount; i++) {
//   //   waysOfDoingAmount[i] = 0;
//   // }

//   const waysOfDoingAmount = new Array(amount + 1).fill(0);
//   console.log(waysOfDoingAmount);
//   // amount of times to calculate an amount of 0 is always 1.
//   waysOfDoingAmount[0] = 1

//   for (let j = 0; j < coins.length; j++) {
//     const coin = coins[j];

//     //Check the possibilities used for each coin that is given.
//     for (let higherAmount = coin; higherAmount <= amount; higherAmount++) {
//       // reduce the change amount with the current coin;
//       const higherAmountRemainder = higherAmount - coin;
//       // create change by breaking into smaller subset of problems;
//       waysOfDoingAmount[higherAmount] += waysOfDoingAmount[higherAmountRemainder];
//     }
//   }
//   console.log(waysOfDoingAmount)
//   return waysOfDoingAmount[amount];
// }


// Space Complexity: O(n);
// Time Complexity: O(n);

// function change(amt, coins, memo = {}) {
//   if (amt === 0) return 1;
//   if (coins.length === 0) return 0;

//   let key = `${amt}-${coins.join(',')}`;
//   if (key in memo) return memo[key];

//   let coinVal = coins[coins.length - 1];

//   let total = 0;
//   for (let quantity = 0; quantity <= (amt / coinVal); quantity++) {
//       total += change(amt - (quantity * coinVal), coins.slice(0, -1), memo);
//   }

//   memo[key] = total;
//   return total;
// }

// const change = (amount, coins) => {
//   let table = new Array(amount).fill(0);
//   table[0] = 1;

//   for (let i = 0; i < coins.length; i++) {
//     const coin = coins[i];

//     for (let higherAmt = coin; higherAmt <= amount; higherAmt++) {
//       const higherAmtRemainder = higherAmt - coin;
//       table[higherAmt] += table[higherAmtRemainder];
//     }
//   }
//   return table[amount];
// }

const change = (amount, coins) => {
    let ways = new Array(amount + 1).fill(0);
    ways[0] = 1; //1 way to make 0 amount;
    
    for (let coin of coins) {
      for (let i = 1; i < amount + 1; i++) {
        console.log(coin, i);
        console.log(ways);
        if (coin <= i) {
          ways[i] += ways[i - coin]
        }
      }
    }
    return ways[amount];
}
console.log(change(5, [1, 2, 5])) // 4
// console.log(change(3, [2])) // 0
// console.log(change(10, [10])) // 1


