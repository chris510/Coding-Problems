// Given a list of scores of different students, return the average score of each student's top five scores in the order of each student's id.

// Each entry items[i] has items[i][0] the student's id, and items[i][1] the student's score.  The average score is calculated using integer division.

// Constraints
// 1 <= items.length <= 1000
// items[i].length == 2
// The IDs of the students is between 1 to 1000
// The score of the students is between 1 to 100
// For each student, there are at least 5 scores

// THOUGHTPROCESS: We are given a 2D array of students grades, the first index of each sub array is the student by ID, and the second is the grade scores. Make a hash map, of the top 5 scores of the student and then return it

const highFive = (items) => {

}

console.log(highFive([[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]])) //[[1,87],[2,88]]
  // The average of the student with id = 1 is 87.
  // The average of the student with id = 2 is 88.6. But with integer division their average converts to 88.
