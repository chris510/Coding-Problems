// There are a total of n courses you have to take, labeled from 0 to n-1.

// Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

// Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

var canFinish = function(numCourses, prerequisites) {
  const inDegree = new Array(numCourses).fill(0);
  let count = 0;
  //create the visited for every course, add one because of the prereq
  for (let i = 0; i < prerequisites.length; i++) {
      inDegree[prerequisites[i][0]]++;
  }

  const stack = [];
  // Find the course that requires no prerequisites
  for (let i = 0; i < inDegree.length; i++) {
      if (inDegree[i] === 0) stack.push(i)
  }
  
  while (stack.length) {
      //When we pop off, add it to our list;
      let curr = stack.pop();
      count++;
      // 
     for (let i = 0; i < prerequisites.length; i++) {
         //If whatever node has this class, we can decrement our count and say we took the class already
         if (prerequisites[i][1] === curr) {
          inDegree[prerequisites[i][0]]--;
          //If there are no prereqs for that class, we can take the class now so push it onto the stack.
         if (inDegree[prerequisites[i][0]] === 0) stack.push(prerequisites[i][0])
      }
     }
  }
  return count === numCourses
};

// Time Complexity: O(V + E) because we have to go through all the vertices and edges;
// Space Complexity: O(V) since we're pushing it onto the stack.

// Example 1:

// Input: 2, [[1,0]] 
// Output: true
// Explanation: There are a total of 2 courses to take. 
//              To take course 1 you should have finished course 0. So it is possible.
// Example 2:

// Input: 2, [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take. 
//              To take course 1 you should have finished course 0, and to take course 0 you should
//              also have finished course 1. So it is impossible.
// Note:

// The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
// You may assume that there are no duplicate edges in the input prerequisites.