# Note: Try to solve this task in O(n) time using O(1) additional space, where n is the number of elements in l, since this is what you'll be asked to do during an interview.

# Given a singly linked list of integers, determine whether or not it's a palindrome.

# Note: in examples below and tests preview linked lists are presented as arrays just for simplicity of visualization: in real data you will be given a head node l of the linked list

# Example

# For l = [0, 1, 0], the output should be
# isListPalindrome(l) = true;

# For l = [1, 2, 2, 3], the output should be
# isListPalindrome(l) = false.

# Input/Output

# [execution time limit] 4 seconds (py3)

# [input] linkedlist.integer l

# A singly linked list of integers.

# Guaranteed constraints:
# 0 ≤ list size ≤ 5 · 105,
# -109 ≤ element value ≤ 109.

# [output] boolean

# Return true if l is a palindrome, otherwise return false.

def isListPalindrome(list):
  fast = list
  slow = list

  while fast and fast.next:
    fast = fast.next.next
    slow = slow.next
  
  slow = reverseLinkedList(slow)
  fast = list

  while slow:
    if slow.value != fast.value:
      return False
    else:
      slow = slow.next
      fast = fast.next
  return True


def reverseLinkedList(node):
  prev = None
  curr = node
  nxt = None

  while curr:
    nxt = curr.next
    curr.next = prev
    prev = curr
    curr = nxt
  return prev

# Time: O(n) | Space: O(1)