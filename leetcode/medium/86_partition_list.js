// Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

// You should preserve the original relative order of the nodes in each of the two partitions.


//Given a node linked list and a value. We want to reorganize the list. What we can do is separate a list thats less than x and greater than x. Then we comebin the list accordingly. make sure to create dummyheads because when we are done traversing the list, our pointers are at the end of the list and we want to return the beginning.

var partition = function(head, x) {
  let beforeHead = new ListNode(null);
  let before = beforeHead;
  let afterHead = new ListNode(null);
  let after = afterHead;
  
  while (head) {
    if (head.val < x) {
      before.next = head;
      before = before.next;
    } else {
      after.next = head;
      after = after.next;
    }
    head = head.next;
  }
  
  after.next = null;
  before.next = afterHead.next;
  
  return beforeHead.next;
};

// Example:

// Input: head = 1->4->3->2->5->2, x = 3
// Output: 1->2->2->4->3->5

