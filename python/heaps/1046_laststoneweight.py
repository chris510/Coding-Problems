# We have a collection of stones, each stone has a positive integer weight.

# Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:

# If x == y, both stones are totally destroyed;
# If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
# At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

# Example 1:

# Input: [2,7,4,1,8,1]
# Output: 1
# Explanation: 
# We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
# we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
# we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
# we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.
 

# Note:

# 1 <= stones.length <= 30
# 1 <= stones[i] <= 1000

import heapq
# min heap by default so we have to multiply by -1 to make it a max heap

# class Solution(object):
#     def lastStoneWeight(self, stones):
#       if not stones: return 0
#       if len(stones) == 1: return stones[0]
      
#       for i in range(len(stones)):
#         stones[i] *= -1
        
#       heapq.heapify(stones)
      
#       while len(stones) >= 2:
#         stone_1 = heapq.heappop(stones) * -1
#         stone_2 = heapq.heappop(stones) * -1
        
#         if stone_1 == stone_2:
#           continue
#         new_stone = (stone_1 - stone_2) * -1
        
#         heapq.heappush(stones, new_stone)
        
#       if stones:
#         return stones[0] * -1
#       return 0

# Time: O(N log N) since we have to heapify the whole tree at the worse case
# Time: O(N) since we are putting the whole input array into heap.