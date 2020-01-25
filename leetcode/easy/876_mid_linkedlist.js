// Given a non-empty, singly linked list with head node head, return a middle node of linked list.

// If there are two middle nodes, return the second middle node.

// Can put the values of the whole linked list in an array and find the value of the middle node. And then use that index with a counter and itterate through the linked list til it meets the counter. Then return that node from that point on.

var middleNode = function(head) {
  let vals = [];
  let node = head;
  while (node) {
    vals.push(node.val);
    node = node.next;
  }
  let len = vals.length
  mid = len % 2 === 0 ? Math.ceil(len / 2) : Math.floor(len / 2)
  
  let pass = head;
  let count = 0;
  while (pass) {
    if (count === mid) {
      return pass
    }
    pass = pass.next;
    count++;
  }
};

// Time Complexity: O(n); since we are traversing the linked list twice
// Space Complexity: O(n) since we are storing an array with linked list values

// Could also use slow and fast pointers, since the fast pointer moves twice as fast. THen it will reach the end when the slow pointer reaches 0.

var middleNode = function(head) {
  let slow = head, fast = head;
  
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow
};

// Time Complexity: O(n) and space Complexity: O(1);

// Example 1:

// Input: [1,2,3,4,5]
// Output: Node 3 from this list (Serialization: [3,4,5])
// The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
// Note that we returned a ListNode object ans, such that:
// ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
// Example 2:

// Input: [1,2,3,4,5,6]
// Output: Node 4 from this list (Serialization: [4,5,6])
// Since the list has two middle nodes with values 3 and 4, we return the second one.
 

// Note:

// The number of nodes in the given list will be between 1 and 100.