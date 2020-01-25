// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// var addTwoNumbers = function(l1, l2) {
//   let dummyHead = new ListNode(0);
//   let l3 = dummyHead;
//   let carry = 0;
//   while (l1 && l2) {
//     let l1Num = (l1 ) ? l1.val : 0;
//     let l2Num = (l2) ? l2.val : 0;
//     let currentSum = l1Num + l2Num + carry;
//     if (currentSum >= 10) {
//       carry = currentSum / 10;
//     }
//     let lastDigit = currentSum % 10;
//     console.log(l1Num, l2Num, currentSum, carry, lastDigit);
//     let newNode = new ListNode(lastDigit);
//     l3.next = newNode
    
//     if (l1) l1 = l1.next;
//     if (l2) l2 = l2.next;
//     l3 = l3.next
   
//   }
  
//   // if (carry > 0) {
//   //   let newNode = new ListNode(carry);
//   //   l3.next = newNode;
//   //   l3 = l3.next;
//   // }
  
//   return dummyHead.next;
// };

var addTwoNumbers = function(l1, l2) {
  let dummyHead = new ListNode(0);
  let l3 = dummyHead;
  let carry = 0;
  let sum = 0;
  while (l1 || l2 || sum > 0) {
    if (l1) {
      sum = sum + l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum = sum + l2.val;
      l2 = l2.next;
    }
    
    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    }

    l3.next = new ListNode(sum);
    l3 = l3.next;
    
    sum = carry;
    carry = 0;
  }
  return dummyHead.next;
};

// Time Complexity : O(max(n * m)) where the highest itteration is the longest linked respectively
// Space Complexity : O(max(n * m)) where the highest new node list that is stored is the longest linked list respectively.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807