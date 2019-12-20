// You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// Example 1:

const coinChange = (coins, amount) => {
  let table = new Array(amount + 1).fill(Infinity);
  table[0] = 0;

  coins.forEach((val) => {
      // itterate through the full table; amt will be the sub problems
      for (let amt = 0; amt < table.length; amt++) {
          // finding how many coins of a current value can fit into the amount
          for (let qty = 0; qty * val <= amt; qty++) {
              //sub problem to find the amount left after you take the certain coins
              remainder = amt - qty * val;
              // look in our table for the remainder of coins + the quantity to find the minimum 
              attempt = table[remainder] + qty;
              //if the attempt is better meaning less number of coins, we will replace the table amount.
              if (attempt < table[amt]) table[amt] = attempt;
          }
      }
  });

  return table[amount] > amount ? -1 : table[amount];

}

console.log(coinChange([1, 2, 5], 11)); // 3
console.log(coinChange([2], 3)); // -1

// Input: coins = [1, 2, 5], amount = 11
// Output: 3 
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1