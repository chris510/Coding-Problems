# You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

# You may assume the two numbers do not contain any leading zero, except the number 0 itself.

# Example:

# Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
# Output: 7 -> 0 -> 8
# Explanation: 342 + 465 = 807.

def addTwoNumbers(self, l1: ListNode, l2: ListNode):
  dummyHead = ListNode(0)
  l3 = dummyHead
  sum = 0
  carry = 0
  
  while l1 or l2 or sum:
    if l1:
      sum += l1.val
      l1 = l1.next
    
    if l2:a
      sum += l2.val
      l2 = l2.next
    
    if sum >= 10:
      sum -= 10
      carry = 1
      
    l3.next = ListNode(sum)
    l3 = l3.next
    sum = carry
    carry = 0

  return dummyHead.next

# Time: O(n * m) where n and m are the lengths of both linked lists
# Space: O(n * m) where we are creating a new linkedlist with the length of the list att most the length of both linked lists
        