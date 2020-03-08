// Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.

// Constraints:

// 1 <= arr.length <= 1000
// -1000 <= arr[i] <= 1000

//We want to itterate through the array and count the number of occurances of each individual value. If the number of occurances is unique for each key, we will return true; otherwise we return false

//Lets itterate through and create a hash map, then check the values of the object to see if its uniqe or not.

const uniqueOccurrences = (arr) => {
  let occur = {}
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (!occur[arr[i]]) {
      occur[num] = 0;
      occur[num]++;
    } else {
      occur[num]++
    };
  };
  let numberOfOccur = Object.values(occur);
  const uniqueOccur = new Set(numberOfOccur);

  if (numberOfOccur.length === uniqueOccur.size) {
    return true;
  } else {
    return false;
  }
};

//The above method puts the count into a hash map and then we take the values. Since a set only allows unique elements, we put the values into the set and then compare the size and length, if they are the same, returns true for unique occurances, otherwise false.

//Time Complexity: O(N) since we only have to itterate through the array once and we create a new Set and Object.values which is O(3N) total.
//Space Complexity: O(N) since we only need to create a hash, set, and new array no mattter how big the input array is given.


// Below is a refactored code since above is a little long.

// const uniqueOccurrences = arr => {
//   let res = {}
  
//   for(let i = 0; i < arr.length; i++) {
//       res[arr[i]] = (res[arr[i]] || 0) + 1
//   }
  
//   const values = Object.values(res)
  
//   return new Set(values).size === values.length
// }


console.log(uniqueOccurrences([1,2,2,1,1,3])) // true
console.log(uniqueOccurrences([1,2])); // false
console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0])); // true
 
var uniqueOccurrences = function (arr) {
  // Let's make a map to keep track of how many times each number occurs in our array
  let myMap = new Map()

  //For every number in our array using the for-of loop
  for (let num of arr) {
      //If we have the key already, we know the value is a number, so increment it by one
      if (myMap.has(num)) {
          myMap.set(num, (myMap.get(num) + 1))
      } else {
          //If we dont have the key in our map...
          myMap.set(num, 1)
      }
  }
  //Make a new set and add the value of each key. If at any point we already saw the value we know the occurrences are NOT unique
  let mySet = new Set()
  //Grab the key and value of each myMap entry
  for (const val of myMap.values()) {
      //If the set already has it, return false
      if (mySet.has(val)) return false
      //Otherwise add it
      mySet.add(val)
  }
  //If we got though the code above, return true, since the occurrences are all unique
  return true
};