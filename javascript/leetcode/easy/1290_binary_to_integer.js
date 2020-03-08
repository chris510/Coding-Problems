// Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

// Return the decimal value of the number in the linked list.

//THOUGHTPROCESS: To convert a binary number into an integer, we take the number and continue dividing by 2 until you get 0 and keep track of the remainder. 12/2 = 6 R0 6/2 = 3 R0 3/2 = 1R1 1/2 = 0R1. So the binary number would be 0011 and we would write the reverse which is 1100. So the binary of 12 is 1100

//To convert an integer to the binary number. Start with the left digit and multiply by 2. Then add every multiplication by 2 then adding the digit.

//We want to traverse the link list until we get to the end, and then add the values to a counter while multiply by 2.

const getDecimalValue = (head) => {
  let num = 0;
  while (head !== null) {
    num = num * 2 + head.val;
    head = head.next;
  }
  return num;
};

//The pattern is the sum = value + sum*2 with the value always being 1 or 0. We are always multiplying the new sum by 2 and then adding 1 or 2 to get the next number in the binary.

//Time Complexity: O(n), have to traverse through the length of the linked list.
//Space Complexity: O(1), just a number counter returning the conversion. 

// Example 1:


// Input: head = [1,0,1]
// Output: 5
// Explanation: (101) in base 2 = (5) in base 10
// Example 2:

// Input: head = [0]
// Output: 0
// Example 3:

// Input: head = [1]
// Output: 1
// Example 4:

// Input: head = [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]
// Output: 18880
// Example 5:

// Input: head = [0,0]
// Output: 0
 

// Constraints:

// The Linked List is not empty.
// Number of nodes will not exceed 30.
// Each node's value is either 0 or 1.