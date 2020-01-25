// Write a program to find the node at which the intersection of two singly linked lists begins.

// For example, the following two linked lists:


// begin to intersect at node c1./**

//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */

// /**
//  * @param {ListNode} headA
//  * @param {ListNode} headB
//  * @return {ListNode}
//  */

// THOUGHTPROCESS Switch tracks at the end, so you even out un-even linked lists
  // they will sync up at the intersection that way. Now you can straight up do a comparison
  // For example: 
  // A will follow 4 - 1 - 8 - 4 - 5 - 5 - 0 - 1 - 8
  // B will follow 5 - 0 - 1 - 8 - 4 - 5 - 4 - 1 - 8
  
  // Now we need to account for the case where they don't intersect, or our loop
  // would run forever. If after switching tracks, they both reach null at the same time
  // that's when we know to stop

// We need to traverse both trees and check if they are the same. So we can traverse while doing a while loop to have it run in linear time.
// A while loop will be useful because we are searching wehn both points meet at the same value and if they return null at the same time, then we know to stop and theres no match.
  

var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null;

  let curA = headA;
  let curB = headB;
  
  // our end check. this works because we switch track to sync up
  while (curA !== curB) {
      if (curA.next) {
          // regular follow the path
          curA = curA.next;
      } else {
          if (!curB.next) {
              // if curB also reaches null next, we've ended up at the end without
              // any match found. break out of the loop and return null now.
              curA = null;
              curB = null;
              break;
          }
          // switch tracks to even out uneven length
          curA = headB;
      }
      
      if (curB.next) {
          // regular follow the path
          curB = curB.next 
      } else {
          // switch tracks to even out uneven length
          curB = headA;
      }
  }
  return curB;
};

var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null;
  
  let nodeA = headA;
  let nodeB = headB;
  
  while (nodeA !== nodeB) {
    
    if (nodeA) {
      nodeA = nodeA.next;
    } else {
      nodeA = headB;
    }
    
    if (nodeB) {
      nodeB = nodeB.next;
    } else {
      nodeB = headA;
    }
  }
  return nodeA;
};

//Time Complexity : O(n) -> where n is the total length of both linked lists
//Space Complexity : O(1) : we are only saving the current nodes values as we appproach them so it doesn't change given the input length.

// We can also use a hash set to find the unique number that both have. this is a time complexity of O(n) and also a O(n) space complexity.

const getIntersectionNode = (headA, headB) => {
  if (!headA || !headB) return null;
  let hash = new Set();
  
  while (headA !== null) {
    hash.add(headA);
    headA = headA.next;
  }
  
  while (headB !== null) {
    if (hash.has(headB)) return headB;
    headB = headB.next;
  }
  
  return null
}
 

// Example 1:


// Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
// Output: Reference of the node with value = 8
// Input Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,0,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.
 

// Example 2:


// Input: intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
// Output: Reference of the node with value = 2
// Input Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [0,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.
 

// Example 3:


// Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
// Output: null
// Input Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.
// Explanation: The two lists do not intersect, so return null.