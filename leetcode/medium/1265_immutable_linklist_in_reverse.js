// You are given an immutable linked list, print out all values of each node in reverse with the help of the following interface:

// ImmutableListNode: An interface of immutable linked list, you are given the head of the list.
// You need to use the following functions to access the linked list (you can't access the ImmutableListNode directly):

// ImmutableListNode.printValue(): Print value of the current node.
// ImmutableListNode.getNext(): Return the next node.
// The input is only given to initialize the linked list internally. You must solve this problem without modifying the linked list. In other words, you must operate the linked list using only the mentioned APIs.

// THOUGHTPROCESS: We are given a linked list that is not immmutable so we are not able to rearrange the order and then count the node from the 'new head' Since we are given two functions for the node, we can traverse te node through get next and then print starting at the end. What if we do this recursively to reach that end first. and then print the values in order from tail to the head. We can write a helper function to do this reverse.

//recursively
const printLinkedListInReverse = head => {
  const reverseTraverse = (node) => {
    if (node == null) return;
    reverseTraverse(node.getNext());
    node.printValue();
  }
  reverseTraverse(head)
};

// TimeComplexity: O(n) we have to recursively itterate through the node list no matter which order so the time it takes to get to the whoe length of the node is relative to the input size.
// SpaceComplexity: O(n) that values we store take up space which corresponds to each node so as the input space increases, the value that gets printed for each node also increases.

// itteratively

const printLinkedListinReverseItterative = head => {
  const prev = null;
  const curr = head;
  const next = null

  while (curr !== null) {
    next = curr.next;
    // we need to break the link and turn it into null value.
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

// TimeComplexity: O(n) time because we are only looping through the linked list;
// SpaceComplexity: O(1) constant because we only have prev,curr,next pointers for the itteration and no matter how large the input list, then the time is still 1
 

// Follow up:

// Could you solve this problem in:

// Constant space complexity?
// Linear time complexity and less than linear space complexity?
 

// Example 1:

// Input: head = [1,2,3,4]
// Output: [4,3,2,1]
// Example 2:

// Input: head = [0,-4,-1,3,-5]
// Output: [-5,3,-1,-4,0]
// Example 3:

// Input: head = [-2,0,6,4,4,-6]
// Output: [-6,4,4,6,0,-2]
