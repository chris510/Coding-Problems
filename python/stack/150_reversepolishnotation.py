# Evaluate the value of an arithmetic expression in Reverse Polish Notation.

# Valid operators are +, -, *, /. Each operand may be an integer or another expression.

# Note:

# Division between two integers should truncate toward zero.
# The given RPN expression is always valid. That means the expression would always evaluate to a result and there won't be any divide by zero operation.
# Example 1:

# Input: ["2", "1", "+", "3", "*"]
# Output: 9
# Explanation: ((2 + 1) * 3) = 9
# Example 2:

# Input: ["4", "13", "5", "/", "+"]
# Output: 6
# Explanation: (4 + (13 / 5)) = 6
# Example 3:

# Input: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
# Output: 22
# Explanation: 
#   ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
# = ((10 * (6 / (12 * -11))) + 17) + 5
# = ((10 * (6 / -132)) + 17) + 5
# = ((10 * 0) + 17) + 5
# = (0 + 17) + 5
# = 17 + 5
# = 22

# Edge case: 
  # Floats
  # No tokens
  # Letters
  # Consecutive numbers (more than 2) and then an operand 

def evalRPN(self, tokens):     
  if not tokens: return 0  
  stack = []
  
  for t in tokens:
    if t in ('+', '-', '*', '/'):
      num2, num1 = stack.pop(), stack.pop()
      newNum = self.mathProcess(num1, num2, t)
      stack.append(int(newNum))
    else:
      stack.append(int(t))
  return stack.pop()

def mathProcess(self, num1, num2, op):
  if op == '+':
    return num1 + num2
  elif op == '-':
    return num1 - num2
  elif op == '*':
    return num1 * num2
  elif op == '/':
    return int(num1/num2)

# Time: O(n) | Space: O(n)