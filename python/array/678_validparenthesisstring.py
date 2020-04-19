# Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

# Any left parenthesis '(' must have a corresponding right parenthesis ')'.
# Any right parenthesis ')' must have a corresponding left parenthesis '('.
# Left parenthesis '(' must go before the corresponding right parenthesis ')'.
# '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
# An empty string is also valid.
# Example 1:
# Input: "()"
# Output: True
# Example 2:
# Input: "(*)"
# Output: True
# Example 3:
# Input: "(*))"
# Output: True
# Note:
# The string size will be in the range [1, 100].

def checkValidString(s):
  open, star = [], []
  
  for i in range(len(s)):
    if s[i] == "(":
      open.append(i)
    elif s[i] == "*":
      star.append(i)
    else:
      if open:
        open.pop()
      elif star:
        star.pop()
      else:
        return False
  
  while open:
    if not star:
      return False
    if open[-1] < star[-1]:
      open.pop()
      star.pop()
    else:
      return False
  return True

# Time: O(n) | Space: O(n)

def checkValidString(s):
  if len(s) < 1: return True
  
  balance = 0
  for char in s:
    if char == ")":
      balance -= 1
    else:
      balance += 1
    if balance < 0:
      return False
  if balance == 0: return True
  balance = 0
  for char in reversed(s):
    if char == "(":
      balance -= 1
    else:
      balance += 1
    if balance < 0:
      return False
  return True

# Time: O(n) | Space: O(1)
        
        