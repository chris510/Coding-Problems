# Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

# push(x) -- Push element x onto stack.
# pop() -- Removes the element on top of the stack.
# top() -- Get the top element.
# getMin() -- Retrieve the minimum element in the stack.
 

# Example:

# MinStack minStack = new MinStack();
# minStack.push(-2);
# minStack.push(0);
# minStack.push(-3);
# minStack.getMin();   --> Returns -3.
# minStack.pop();
# minStack.top();      --> Returns 0.
# minStack.getMin();   --> Returns -2.

# class MinStack:
  
#     def __init__(self):
#         """
#         initialize your data structure here.
#         """
#         self.stack = []
        

#     def push(self, x: int) -> None:
      
#         if not self.stack:
#           self.stack.append((x, x))
#         else:
#           curr_min = min(x, self.stack[-1][1])
#           self.stack.append((x, curr_min))

#     def pop(self) -> None:
#         if self.stack:
#           self.stack.pop()

#     def top(self) -> int:
#         if self.stack:
#           return self.stack[-1][0]
#         else:
#           return None

#     def getMin(self) -> int:
#         if self.stack:
#           return self.stack[-1][1]


# # Your MinStack object will be instantiated and called as such:
# # obj = MinStack()
# # obj.push(x)
# # obj.pop()
# # param_3 = obj.top()
# # param_4 = obj.getMin()

# Time : O(1) | O(n)