// Given a linked list, remove the n-th node from the end of list and return its head.

// We want to remove the node from the nth spot from the end of the list or the tail.
// We can do this the long way in O(n) time and O(1) by reversing the linked list, and then count from the new head from n and then remove the proper node and then reverse the node again.

// Use two pointers, we set the second pointer away from the first by n. Then we will traverse the link list til the second reaches null. When we finally get to that point, we know that the first pointer will be n away from the end. Then we can just remove it and then return the new head of the linked list.

var removeNthFromEnd = function(head, n) {
  let dummyHead = new ListNode(null);
  dummyHead.next = head;
  let slow = dummyHead
  let fast = dummyHead
  
  for (let i = 0; i < n + 1; i++) {
    fast = fast.next;  
  }

  while (fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }
  
  slow.next = slow.next.next
  return dummyHead.next
};

// Time Complexity: O(n) => traverse the whole node;
// Space Complexity: O(1) =

// Example:

// Given linked list: 1->2->3->4->5, and n = 2.

// After removing the second node from the end, the linked list becomes 1->2->3->5.
// Note:

// Given n will always be valid.

// Follow up:

// Could you do this in one pass?