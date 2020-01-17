// Given a singly linked list, determine if it is a palindrome.

var isPalindrome = function(head) {
  let array = [];
  let node = head;
  while (node) {
    array.push(node.val);
    node = node.next
  }
  
  let left = 0;
  let right = array.length - 1;
  
  while (left < right) {
    if (array[left] === array[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
};

// Time Complexity: O(n) because we are traversing through the linked list length and putting the value into the array and then traversing the array.
// Space Complexity: O(n) creating an array with the length of linked list.

// How to do in constant space?

// The goal of the below algorithm is that we will have slow and fast pointers. when the fast pointer gets to the end, then the slow pointer will be in the middle of the linked list. After that, we will reverse where ethe slow pointer is and reset the fast pointer to the head. then itterate through each node to check values. If they are different before the end of the loop, then they are not palindromes.

var isPalindrome = function(head) {
  let fast = head;
  let slow = head;
  
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  
  slow = reverse(slow);
  fast = head;
  
  while (slow) {
    if (slow.val !== fast.val) {
      return false;
    } else {
      slow = slow.next;
      fast = fast.next;
    }
  }
  return true;
};

const reverse = (node) => {
  let prev = null;
  let curr = node;
  let next = null
  
  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

// Time Complexity: O(n) traversing through the linked list;
// Space Complexity: O(1) since we are not making any data structures and using two pointers then its constant space.

// Example 1:

// Input: 1->2
// Output: false
// Example 2:

// Input: 1->2->2->1
// Output: true
// Follow up:
// Could you do it in O(n) time and O(1) space?