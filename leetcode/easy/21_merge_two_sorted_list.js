// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

// Thoughtprocess: Can do either itteratively O(n*m) time and O(1) space or recursion using O(n * m time and space));

var mergeTwoLists = function(l1, l2) {
  let mergedNode = new ListNode(0);
  let head = mergedNode;
  
  while (l1 && l2) {
    if (l1.val > l2.val) {
      head.next = l2;
      l2 = l2.next;
    } else {
      head.next = l1;
      l1 = l1.next;
    }
    head = head.next;
  }
  head.next = l1 || l2
  return mergedNode.next;
}

// Time Complexity: O(n * m) where n and m is the size of linked list 1 and 2 respectively;
// Space Complexity: O(1) since we are basically using pointer and since we are adjusting the pointers of the first two linked list to a new node, then we are not creating new space in memory or near constant.