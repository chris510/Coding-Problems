// You are given coins of different denominations and a total amount of money. Write a function to compute the number of combinations that make up that amount. You may assume that you have infinite number of each kind of coin.

const change = (amount, coins) => {
  // initialize an array with zeros as initial amounts, will use to hold past cents 
  const waysOfDoingAmount = [];
  for (let i = 0; i <= amount; i++) {
    waysOfDoingAmount[i] = 0;
  }
  // amount of times to calculate an amount of 0 is always 1.
  waysOfDoingAmount[0] = 1

  for (let j = 0; j < coins.length; j++) {
    const coin = coins[j];

    //Check the possibilities used for each coin that is given.
    for (let higherAmount = coin; higherAmount <= amount; higherAmount++) {
      console.log(`higherAmount ${higherAmount}`)
      // reduce the change amount with the current coin;
      const higherAmountRemainder = higherAmount - coin;
      console.log(`higherAmountRemainder: ${higherAmountRemainder}`)
      // create change by breaking into smaller subset of problems;
      waysOfDoingAmount[higherAmount] += waysOfDoingAmount[higherAmountRemainder];
    }
  }

  return waysOfDoingAmount[amount];
}

// Space Complexity: O(n);
// Time Complexity: O(n);

console.log(change(5, [1, 2, 5])) // 4
// console.log(change(3, [2])) // 0
// console.log(change(10, [10])) // 1


