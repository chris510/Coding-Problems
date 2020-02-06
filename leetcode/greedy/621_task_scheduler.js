// Given a char array representing tasks CPU need to do. It contains capital letters A to Z where different letters represent different tasks. Tasks could be done without original order. Each task could be done in one interval. For each interval, CPU could finish one task or just be idle.

// However, there is a non-negative cooling interval n that means between two same tasks, there must be at least n intervals that CPU are doing different tasks or just be idle.

// You need to return the least number of intervals the CPU will take to finish all the given tasks.

var leastInterval = function(tasks, n) {
  if (tasks.length < 2) return tasks.length;
  
  const total = tasks.length;
  const count = {};
  
  for (let i = 0; i < total; i++) {
    if (!count[tasks[i]]) {
      count[tasks[i]] = 1;
    } else {
      count[tasks[i]]++;
    }
  }
  
  const max = Math.max(...Object.values(count));
  const maxCount = Object.values(count).filter((num) => num === max).length;
  return Math.max(total, max * maxCount + (max - 1) * (n + 1 - maxCount)) ;
};

//Time Complexity: O(n) since we have to go through the whole list;
//Space Compleixty: O(1) since the max character is the alphabet its constant.

var leastInterval = function(tasks, n) {
  if (tasks.length < 2) return tasks.length;
  
  let charCounts = {};
  
  for (let task of tasks) {
    if (charCounts[task]) {
      charCounts[task]++;
    } else {
      charCounts[task] = 1;
    }
  }
  let countArr = Object.values(charCounts).sort((a, b) => b - a)
  let maxVal = Math.max(...countArr) - 1;
  let idleSlots = maxVal * n;
  
  for (let i = 1; i < countArr.length; i++) {
    idleSlots -= Math.min(maxVal, countArr[i])
  }
  
  return idleSlots > 0 ? idleSlots + tasks.length : tasks.length
};
// Example:

// Input: tasks = ["A","A","A","B","B","B"], n = 2
// Output: 8
// Explanation: A -> B -> idle -> A -> B -> idle -> A -> B.
 

// Note:

// The number of tasks is in the range [1, 10000].
// The integer n is in the range [0, 100].