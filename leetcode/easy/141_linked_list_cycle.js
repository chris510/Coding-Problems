// Given a linked list, determine if it has a cycle in it.

// To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

// Can you solve it using O(1) (i.e. constant) memory?

// THOUGHTPROCESS: We need to check all the values of the linked list to see if its connected to each other to be considered a cycle. We could use a set to check for the values and then see if its belongs in the list, if it does, then we can return true and theres a cycle.

// Naive solutions is we can traverse the linked list and put every node into a hash table and if we see that node value in the hash table then we know that its a cycle;

// var hasCycle = function(head) {
//   let seen = new Set();
//   let node = head;
  
//   while (node) {
//     if (seen.has(node)) {
//       return true;
//     } else {
//       seen.add(node);
//       node = node.next;
//     }
//   }
//   return false;
// };

// TimeComplexity: O(n); we are itterating through the whole linked list
// Space Complexity : O(n); we are saving the nodes we seen in a set.

const hasCycle = (head) => {
  if (!head) return false;
  let result = false;
  let hash = new Set();
  
  while (head !== null) {
    if (hash.has(head)) {
      result = true
      break
    } else {
      hash.add(head);
      head = head.next;
    }
  }
  return result;
};

// Time Complexity: O(n) because we have to itterate through the whole linked list in the worst case scenario to find the match.
// Space Complexity: O(n) because we are using a set to create a new data structure which is then used to find the result.

//To get O(1) space, use flyods cycle detection algorithm (using two pointers), Two pointers will traverse the linked list at different speeds. They will eventually collide if he linkedlist is looped.

var hasCycle = function(head) {
  if (!head) return false;
  let slow = head;
  let fast = head.next;
  
  while (fast !== null && fast.next !== null) {
    if (slow === fast) return true;
    
    slow = slow.next;
    fast = fast.next.next;
  }
  return false;
};

// Using the cycle detection algorithm;
// Time Complexity : O(n) worst case, is we go through the whole linked list;
// Space Complexity: O(1) by using pointers, we are not saving any infromation in a data table and just going through each counter.

// Example 1:

// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where tail connects to the second node.


// Example 2:

// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where tail connects to the first node.


// Example 3:

// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.
