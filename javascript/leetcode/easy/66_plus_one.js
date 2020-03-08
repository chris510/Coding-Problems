// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// We will itterate baackwards and checking for the first digit to add one. Then we will have a carry variable that is used when the sum of the new value goes over 1.

var plusOne = function(digits) {
  let plusOne = [];
  let i = digits.length - 1;
  
  let carry = 0;
  while (i >= 0) {
    let value = 0;
    if (carry > 0) {
      value += 1 
    }
    
    if (i === digits.length - 1) {
      value += digits[i] + 1;
    } else {
      value += digits[i];
    }
    
    if (value >= 10) {
      carry = 1;
      value -= 10;
    } else {
      carry = 0;
    }
    
    plusOne.unshift(value);
    i--;
  }
  
  if (carry > 0) {
    plusOne.unshift(carry)
  }
  
  return plusOne;
};

// Time Complexity: O(n) because we have to traverse through the whole array incase all the numbers are 9's to increase it by one.
// Space Complexity: O(n) creating a new array same size as the input.

// We can do it with constant space complexity by changing the initial aray

var plusOne = function(digits) {
  for(var i = digits.length - 1; i >= 0; i--){
    digits[i]++; 
    if(digits[i] > 9){
      digits[i] = 0;
    }else{
      return digits;
    }
  }
  // if theres more 9's we will reach this part of the loop and we just add 1 to the end
  digits.unshift(1);
  return digits;
};

const plusOne = digits => {
  let carry = 1;
  for(let i = digits.length-1; i>=0; i--) {
      let temp = digits[i] + carry;
      if(temp >= 10) {
        digits[i] = 0;
        carry = 1;
      } else {
        digits[i] = temp;
        carry = 0;
        break;
      }
  }
  if (carry > 0) {
    return [carry, ...digits];
  } else {
    return digits
  }
}
// Example 1:

// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.