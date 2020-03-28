# Given a singly linked list, determine if it is a palindrome.

# Example 1:

# Input: 1->2
# Output: false
# Example 2:

# Input: 1->2->2->1
# Output: true
# Follow up:
# Could you do it in O(n) time and O(1) space?

# class Solution:
#     def isPalindrome(self, head: ListNode) -> bool:
#       slow = head
#       fast = head
      
#       while fast and fast.next:
#         fast = fast.next.next
#         slow = slow.next
        
#       slow = self.reverseLinkedList(slow)
#       fast = head
      
#       while slow:
#         if slow.val != fast.val:
#           return False
#         else:
#           slow = slow.next
#           fast = fast.next
#       return True
      
#     def reverseLinkedList(self, head):
#       prev = None
#       curr = head

#       nxt = None
      
#       while curr:
#         nxt = curr.next
#         curr.next = prev
#         prev = curr
#         curr = nxt
      
#       return prev

# Time: O(n) | Space: O(1)