# Remove all elements from a linked list of integers that have value val.

# Example:

# Input:  1->2->6->3->4->5->6, val = 6
# Output: 1->2->3->4->5

# class Solution:
#     def removeElements(self, head: ListNode, val: int) -> ListNode:
#       dummy_head = head
      
#       while dummy_head:
#         if dummy_head.next and dummy_head.next.val == val:
#           dummy_head.next = dummy_head.next.next
#         else:
#           dummy_head = dummy_head.next
#       return head.next if head and head.val == val else head

# Time: O(n) | Space: O(1)

# class Solution:
#     def removeElements(self, head: ListNode, val: int) -> ListNode:
#       if head is None:
#         return None
      
#       head.next = self.removeElements(head.next, val)
#       if head.val == val:
#         return head.next
#       return head