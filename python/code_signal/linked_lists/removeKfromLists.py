# Note: Try to solve this task in O(n) time using O(1) additional space, where n is the number of elements in the list, since this is what you'll be asked to do during an interview.

# Given a singly linked list of integers l and an integer k, remove all elements from list l that have a value equal to k.

# Example

# For l = [3, 1, 2, 3, 4, 5] and k = 3, the output should be
# removeKFromList(l, k) = [1, 2, 4, 5];
# For l = [1, 2, 3, 4, 5, 6, 7] and k = 10, the output should be
# removeKFromList(l, k) = [1, 2, 3, 4, 5, 6, 7].
# Input/Output

# [execution time limit] 4 seconds (py3)

# [input] linkedlist.integer l

# A singly linked list of integers.

# Guaranteed constraints:
# 0 ≤ list size ≤ 105,
# -1000 ≤ element value ≤ 1000.

# [input] integer k

# An integer.

# Guaranteed constraints:
# -1000 ≤ k ≤ 1000.

# [output] linkedlist.integer

# Return l with all the values equal to k removed.

def removeKFromList(head, k):
  # in the beginning to check if the first value is what we're looking for
  if head is None:
      return head
  elif head.value == k:
      head = head.next

  new_head = head

  # in the middle of the linked list to check for the element being removed
  while new_head and new_head.next:
      if new_head.next.value == k:
          new_head.next = new_head.next.next
      else:
          new_head = new_head.next
  
  # in the end of the linked list to check for the element being removed.
  if new_head and new_head.value == k:
      head = head.next
  
  return head

# Time: O(n) - traverse the whole list | Space: O(1)

def removeKFromList(head, k):
    dummy = head
    while dummy:
        if dummy.next and dummy.next.value == k:
            dummy.next = dummy.next.next
        else:
            dummy = dummy.next
    return head.next if head and head.value == k else head