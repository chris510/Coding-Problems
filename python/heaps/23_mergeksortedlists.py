# Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

# Example:

# Input:
# [
#   1->4->5,
#   1->3->4,
#   2->6
# ]
# Output: 1->1->2->3->4->4->5->6

# Brute force solution:
#   Traverse over all the linked lists and collect the values in the array
#   sort and itterate over the array ot get the proper value of the nodes
#   Create a new linked list with the sorted values as the new nodes

# class Solution:
#     def mergeKLists(self, lists: List[ListNode]) -> ListNode:
#       self.nodes = []
#       head = point = ListNode(0)
#       for l in lists:
#         while l:
#           self.nodes.append(l.val)
#           l = l.next
#       for x in sorted(self.nodes):
#         point.next = ListNode(x)
#         point = point.next
#       return head.next
        
# Time: O(N Log N)
# Space: O(N)

# Priority Queue
  # Comparing every node which is the head of each linked lists and then putting them into a new node.

#from queue import PriorityQueue

# class Solution:
#   def mergeKLists(self, lists: List[ListNode]) -> ListNode:
#     head = curr_node = ListNode(None)
#     q = PriorityQueue()
#     for idx, node in enumerate(lists):
#       if node: 
#         q.put((node.val, idx, node))
#     while not q.empty():
#       _, idx, curr_node.next = q.get()
#       curr_node = curr_node.next
#       if curr_node.next:
#         q.put((curr_node.next.val, idx, curr_node.next))
#     return head.next

# Time: O(N log k) where k is the number of linked lists
# Space:  O(N) where creating a new linked lists takes n space and k nodes

# Merge with divide and conquer
  # Kind of like merge sort where we separate the lists intwo 2, and then merge them both toghete 

# from queue import PriorityQueue

# class Solution:
#   def mergeKLists(self, lists: List[ListNode]) -> ListNode:
#     if not lists:
#       return
#     if len(lists) == 1:
#       return lists[0]
#     mid = math.floor(len(lists)/2)
#     left = self.mergeKLists(lists[:mid])
#     right = self.mergeKLists(lists[mid:])
#     return self.merge(left, right)
  
#   def merge(self, left, right):
#     dummy = curr = ListNode(0)
#     while left and right:
#       if left.val < right.val:
#         curr.next = left
#         left = left.next
#       else:
#         curr.next = right
#         right = right.next
#       curr = curr.next
#     curr.next = left or right
    # return dummy.next

# Time: O(N log k) where k is the number of linked lists
# Space: O(1)
