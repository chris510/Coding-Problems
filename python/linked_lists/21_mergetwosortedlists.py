# Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

# Example:

# Input: 1->2->4, 1->3->4
# Output: 1->1->2->3->4->4

# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class RecursionSolution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
      if l1 is None:
        return l2
      elif l2 is None:
        return l1
      elif l1.val < l2.val:
        l1.next = self.mergeTwoLists(l1.next, l2)
        return l1
      else:
        l2.next = self.mergeTwoLists(l1, l2.next)
        return l2

# Time: O(n), Space: O(n)


class ItterativeSolution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
      
      dummyhead = ListNode(None)
      l3 = dummyhead
      
      while l1 and l2:
        if (l1.val < l2.val):
          l3.next = l1
          l1 = l1.next
        else:
          l3.next = l2
          l2 = l2.next
        l3 = l3.next
        
      l3.next = l1 or l2
      
      return dummyhead.next

# Complexity: Time - O(N), Space - O(1)