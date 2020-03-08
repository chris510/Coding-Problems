// Design a max stack that supports push, pop, top, peekMax and popMax.

/**
 * initialize your data structure here.
 */
var MaxStack = function() {
  this.maxStack = [];
  this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function(x) {
  this.stack.push(x);
  if (this.maxStack.length === 0 || x >= this.maxStack[this.maxStack.length -  1]) {
    this.maxStack.push(x);
  }
}

/**
 * @return {number}
 */
MaxStack.prototype.pop = function() {
  let item = this.stack.pop();
  if (item === this.maxStack[this.maxStack.length - 1]) this.maxStack.pop();
  return item;
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function() {
    return this.stack.length ? this.stack[this.stack.length - 1] : null
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function() {
  return this.maxStack.length ? this.maxStack[this.maxStack.length - 1] : null
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function() {
  let item = this.maxStack.pop();
  const temp = [];
  for (let i = this.stack.length - 1; i >= 0; i--) {
    if (this.stack[i] === item) {
      this.stack.splice(i, 1);
      break;
    } else {
      temp.push(this.stack.pop())
    }
  }
  
  while (temp.length) {
    this.push(temp.pop());
  }
  
  return item;
  
};

// push(x) -- Push element x onto stack.
// pop() -- Remove the element on top of the stack and return it.
// top() -- Get the element on the top.
// peekMax() -- Retrieve the maximum element in the stack.
// popMax() -- Retrieve the maximum element in the stack, and remove it. If you find more than one maximum elements, only remove the top-most one.
// Example 1:
// MaxStack stack = new MaxStack();
// stack.push(5); 
// stack.push(1);
// stack.push(5);
// stack.top(); -> 5
// stack.popMax(); -> 5
// stack.top(); -> 1
// stack.peekMax(); -> 5
// stack.pop(); -> 1
// stack.top(); -> 5
// Note:
// -1e7 <= x <= 1e7
// Number of operations won't exceed 10000.
// The last four operations won't be called when stack is empty.