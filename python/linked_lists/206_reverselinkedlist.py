# Reverse a singly linked list.

# Example:

# Input: 1->2->3->4->5->NULL
# Output: 5->4->3->2->1->NULL
# Follow up:

# A linked list can be reversed either iteratively or recursively. Could you implement both?

# class Solution:
#     def reverseList(self, head: ListNode) -> ListNode:
#       if head is None or head.next is None:
#         return head
      
#       node = self.reverseList(head.next)
#       head.next.next = head
#       head.next = None
#       return node

# class Solution:
#     def reverseList(self, head: ListNode) -> ListNode:
#       prev = None
#       curr = head
#       nxt = None
      
#       while curr:
#         nxt = curr.next
#         curr.next = prev
#         prev = curr
#         curr = nxt
#       return prev