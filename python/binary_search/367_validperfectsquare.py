# Given a positive integer num, write a function which returns True if num is a perfect square else False.

# Note: Do not use any built-in library function such as sqrt.

# Example 1:

# Input: 16
# Output: true
# Example 2:

# Input: 14
# Output: false

def isPerfectSquare(self, num):
    """
    :type num: int
    :rtype: bool
    """ 
    if num < 2:
      return True
    
    left, right = 2, num // 2
    
    while left <= right:
      mid = left + (right - left) // 2
      approx_num = mid * mid
      if approx_num == num:
        return True
      if approx_num > num:
        right = mid - 1
      else:
        left = mid + 1
    return False

# Time: O(log n) | Space: O(1)