// On a plane there are n points with integer coordinates points[i] = [xi, yi]. Your task is to find the minimum time in seconds to visit all points.

// You can move according to the next rules:

// In one second always you can either move vertically, horizontally by one unit or diagonally (it means to move one unit vertically and one unit horizontally in one second).
// You have to visit the points in the same order as they appear in the array.

//THOUGHTPROCESS: For this problem, we are given a 2D array of points with an x and y coordinate. We want to find the shortest amount of time it takes to reach each consecutive point from the start.
  // I think we can itterate through the sub arrays and define the x and y coordinates, after that, we will subtract the x and y. If the x and y difference are the same, that means we only moved diagonally, but if we moved 1 side to the left or right, then it would be the same and we need conditionals to check if the x and y are the same or different.

const minTimeToVisitAllPoints = (points) => {
  let seconds = 0;
  for (let i = 0; i < points.length -1; i++) {
      let startX = points[i][0]; // 3
      let startY = points[i][1]; // 2
      let endX = points[i + 1][0]; // -2
      let endY = points[i + 1][1]; // 2
      xDiff = endX - startX; // -2 - 3 = -5
      yDiff = endY - startY; // 2 - 2 = 0
      let timeTook = Math.max(Math.abs(xDiff), Math.abs(yDiff));
      seconds += timeTook;
  }
  return seconds
};

// Time Complexity: O(n) because we are only itterating through the array once'
// Space Complexity: O(1) We necessarily don't have to save so many variables but we will always have one variable that we are saving which is seconds no matter how big the distance of points given to us are.

// This method we are taking two points and checking their x and y axis. The distance between two points, will be different if youre moving diagonal in one direction or another. So we will just take the highest difference between those two points x and y values and then add that into the time the second took, as a movement in the diagonal direction will always be having offset x and y coordinates
// Then we take the absolute value because if you move in the negative direction, the 'seconds' that we use will be negative so we want to have that as an increasing positive number each time.

console.log(minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]])) // 7seconds
  // One optimal path is [1,1] -> [2,2] -> [3,3] -> [3,4] -> [2,3] -> [1,2] -> [0,1] -> [-1,0]   
console.log(minTimeToVisitAllPoints([[3,2],[-2,2]])) // 5