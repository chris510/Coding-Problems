// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

//Given two linked list, we want to first initially reverse the link list, put the digits together, and then add them together and then return the corresponding 3 digit number as a linked list.

// So we have to use recursion to get the end of the link list, and then add their values accordingly together, then add the values of the two link list, get that sum, and then put each digit into its own node.

const addTwoNumbers = (l1, l2) => {
  let listSumOne = 0;
  let listSumTwo = 0;
  const traverseReverse = (node, sum) => {
    if (node === null) return;
      traverseReverse(node);
      sum += Node.val();
      return sum
  }
  listSumOne = traverseReverse(l1, listSumOne);
  listSumTwo = traverseReverse(l2, listSumTwo);
};

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.