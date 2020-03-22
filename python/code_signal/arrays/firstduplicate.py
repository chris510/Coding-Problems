# Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.

# Example

# For a = [2, 1, 3, 5, 3, 2], the output should be firstDuplicate(a) = 3.

# There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a smaller index than the second occurrence of 2 does, so the answer is 3.

# For a = [2, 2], the output should be firstDuplicate(a) = 2;

# For a = [2, 4, 3, 5, 1], the output should be firstDuplicate(a) = -1.

# Input/Output

# [execution time limit] 0.5 seconds (cpp)

# [input] array.integer a

# Guaranteed constraints:
# 1 ≤ a.length ≤ 105,
# 1 ≤ a[i] ≤ a.length.

# [output] integer

# The element in a that occurs in the array more than once and has the minimal index for its second occurrence. If there are no such elements, return -1.
# [C++] Syntax Tips

def firstDuplicate(a):
    seen = set()
    for num in a:
        if num in seen:
            return num
        else:
            seen.add(num)
    return -1

# Time : O(n) | Space: O(n)

# Can use this method because the constraints of the integers in the list is up to the list's length. Visit the index, turn negative. if visited index again is negative, means we found a duplicate

def firstDuplicate(arr):
    for i in range(len(arr)):
        idx = abs(arr[i])
        if arr[idx - 1] < 0:
            return abs(arr[i])
        else:
            arr[idx - 1] = - arr[idx - 1]
    return -1

# Time: O(n) | Space: O(1)