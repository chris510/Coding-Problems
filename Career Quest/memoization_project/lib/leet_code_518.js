// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

var change = function(amount, coins) {
  const nWays = [];
  for (let i = 0; i <= amount; i++) {
      nWays[i] = 0;
  }
  
  nWays[0] = 1;
  
  for (let j = 0; j < coins.length; j++) {
      const coin = coins[j];
      
      for (let higherAmount = coin; higherAmount <= amount; higherAmount++) {
          const higherAmountRemainder = higherAmount - coin;
          nWays[higherAmount] += nWays[higherAmountRemainder];
      }
  }
  console.log(nWays)
  return nWays[amount];
};
