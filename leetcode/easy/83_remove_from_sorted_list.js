// Given a sorted linked list, delete all duplicates such that each element appear only once.

var deleteDuplicates = function(head) {
  if (!head) return null;
  
  let curr = head;
  
  while (curr && curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
};

// Time Complexity: O(n) where we traverse through the whole length of the link list;
// Space Complexit: O(1), we are modifying the link list so constant.

// Recursively, we can check the values and if we make a change, we have to recall the recursive function with the same head beecause thats the first number of that duplicate list.

var deleteDuplicates = function(head) {
  if (!head || !head.next) return head;
  
  if (head.val === head.next.val) {
    head.next = head.next.next;
    return deleteDuplicates(head);
  }
  
  deleteDuplicates(head.next);
  return head;
};

// Time Complexity: O(n) and space complexity: O(n) because we have the length of the linked list in stack frames.

// Example 1:

// Input: 1->1->2
// Output: 1->2
// Example 2:

// Input: 1->1->2->3->3
// Output: 1->2->3