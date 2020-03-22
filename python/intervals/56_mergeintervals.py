# Given a collection of intervals, merge all overlapping intervals.

# Example 1:

# Input: [[1,3],[2,6],[8,10],[15,18]]
# Output: [[1,6],[8,10],[15,18]]
# Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
# Example 2:

# Input: [[1,4],[4,5]]
# Output: [[1,5]]
# Explanation: Intervals [1,4] and [4,5] are considered overlapping.
# NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.

# class Solution:
#     def merge(self, intervals: List[List[int]]) -> List[List[int]]:
#       if len(intervals) <= 1:
#         return intervals
      
#       intervals.sort()
    
#       res = []
#       curr_interval = intervals[0]
#       res.append(curr_interval)
      
#       for interval in intervals[1:]:
#         curr_end = curr_interval[1]
#         next_begin = interval[0]
#         next_end = interval[1]
        
#         if curr_end >= next_begin:
#           curr_interval[1] = max(curr_end, next_end)
#         else:
#           curr_interval = interval
#           res.append(curr_interval)
#       return res

# Time: O(n log n) because we have to sort the intervals
# Space: O(1) since we are sorting inplace and not including the results array