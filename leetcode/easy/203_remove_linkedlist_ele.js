// Remove all elements from a linked list of integers that have value val.

// Example:

// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5

// We will traverse the linked list keeping track of the previous variable and the current variable since we need to point the previous.next to the curr.next and skip the value thats equal to the target

var removeElements = function(head, val) {
  let newHead = new ListNode(null);
  newHead.next = head
  
  let curr = head;
  let prev = newHead;
  
  while (curr) {
      if (curr.val === val) {
          prev.next = curr.next;
      } else {
          prev = curr;
      }
      curr = curr.next;
  }
  return newHead.next
};

// Time Complexity: O(n) where we traverse through the whole linked list;
// Space Complexity: O(1) since we are only creating auxillary variables.

var removeElements = function(head, val) {
  if (!head) return null;
  if (head.val === val) return removeElements(head.next, val);
  
  const recurse = (node) => {
    if (!node) return;
    
    while (node.next && node.next.val === val) {
      node.next = node.next.next;
    }
    recurse(node.next)
  }
  
  recurse(head);
  return head;
};

// Time Complexity: O(n) since we might have to go through the whole linked list;
// Space Complexity: O(n) for each nodes in the list stack frames