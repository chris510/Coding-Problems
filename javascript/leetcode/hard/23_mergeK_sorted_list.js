// Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

//First method is we can put all the values int an array, sort them ascending, then create a linked list out of it.
var mergeKLists = function(lists) {
  if (!lists || !lists.length) return null;
  let res = [];
  
  for (let head of lists) {
    while (head) {
      res.push(head.val);
      head = head.next;
    }
  }
  
  let dummyHead = new ListNode(null);
  let head = dummyHead;
  res.sort((a, b) => a - b);
  
  for (let val of res) {
    let temp = new ListNode(val);
    head.next = temp;
    head = head.next;
  }
  
  return dummyHead.next;
};

// Time Complexity: O(n log n) where we have to traverse all the nodes in the original lists given and then sort them and traverse and create notes again.
// Space Complexity: O(n) we make a list of n nodes

//

// Example:

// Input:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// Output: 1->1->2->3->4->4->5->6