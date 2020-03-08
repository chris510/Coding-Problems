// Given a list of scores of different students, return the average score of each student's top five scores in the order of each student's id.

// Each entry items[i] has items[i][0] the student's id, and items[i][1] the student's score.  The average score is calculated using integer division.

// Constraints
// 1 <= items.length <= 1000
// items[i].length == 2
// The IDs of the students is between 1 to 1000
// The score of the students is between 1 to 100
// For each student, there are at least 5 scores

// THOUGHTPROCESS: We are given a 2D array of students grades, the first index of each sub array is the student by ID, and the second is the grade scores. Make a hash map, of the top 5 scores of the student and then return it. How about we use a set to distinguish a user's ID, then use a array in a hash to put that users scores into the ID and then take the Math.floor top 5 average?

const highFive = (items) => {
  let map = {};
  let ans = [];

  // If there is no ID in the map, then we will set a new ID with that score, otherwise we push the following score into the corresponding ID.
  // items.map(([id, score]) => !map[id] ? map[id] = [score] : map[id].push(score));
  items.map(([id, score]) => !map[id] ? map[id] = [score] : map[id].push(score));
  
  Object.keys(map).map(key => {
    let scores = map[key];
    scores.sort((a,b) => b - a)
    scores = scores.slice(0, 5)

    let avg = Math.floor(scores.reduce((acc, num) => acc + num) / scores.length)

    ans.push([Number(key), avg])
  })

  return ans
}




// var highFive = function(items) {
//   const users = items.reduce((total, item) => {
//       const user = item[0]
//       const grade = item[1]
//       if (total.hasOwnProperty(user)) {
//           total[user].push(grade)
//       } else {
//           total[user] = [grade]
//       } 
//       return total
//   }, {})
  
//   return Object.keys(users).reduce((total,user) => {
//       const grades = users[user].sort((a, b) => b-a).slice(0,5)
//       const gradeAvg = grades.reduce((avg,grade) => avg + grade, 0) /5
//       total.push([user, Math.floor(gradeAvg)])
//       return total
//   },[])
// };

console.log(highFive([[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]])) //[[1,87],[2,88]]
  // The average of the student with id = 1 is 87.
  // The average of the student with id = 2 is 88.6. But with integer division their average converts to 88.
