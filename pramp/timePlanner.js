// Time Planner
// A naive solution would loop through both input arrays and check the intersection of every possible pair slots to find an overlap of at least dur seconds. This isn’t an efficient solution and its time complexity is O(N⋅M). We can do better than that.

// Since the arrays are sorted by the slots’ start times, we can iterate over both arrays in a single loop. We use two indices, one for each array, while incrementing one index at a time according the following rules: If there is a minimal overlap of dur between two given times slots, return the pair [start, start + dur], where start is the start time of said overlap. Otherwise, increment the index of the array with the earlier time slot.

//Implement a function meetingPlanner that given the availability, slotsA and slotsB, of two people and a meeting duration dur, returns the earliest time slot that works for both of them and is of duration dur. If there is no common time slot that satisfies the duration requirement, return an empty array.

// Time is given in a Unix format called Epoch, which is a nonnegative integer holding the number of seconds that have elapsed since 00:00:00 UTC, Thursday, 1 January 1970.

// Each person’s availability is represented by an array of pairs. Each pair is an epoch array of size two. The first epoch in a pair represents the start time of a slot. The second epoch is the end time of that slot. The input variable dur is a positive integer that represents the duration of a meeting in seconds. The output is also a pair represented by an epoch array of size two.

// In your implementation assume that the time slots in a person’s availability are disjointed, i.e, time slots in a person’s availability don’t overlap. Further assume that the slots are sorted by slots’ start time.

// Implement an efficient solution and analyze its time and space complexities.

// Examples:

// input:  slotsA = [[10, 50], [60, 120], [140, 210]]
//         slotsB = [[0, 15], [60, 70]]
//         dur = 8
// output: [60, 68]

// input:  slotsA = [[10, 50], [60, 120], [140, 210]]
//         slotsB = [[0, 15], [60, 70]]
//         dur = 12
// output: [] # since there is no common slot whose duration is 12
// Constraints:

// [time limit] 5000ms

// [input] array.array.integer slotsA

// 1 ≤ slotsA.length ≤ 100
// slotsA[i].length = 2
// [input] array.array.integer slotsB

// 1 ≤ slotsB.length ≤ 100
// slotsB[i].length = 2
// [input] integer

// [output] array.integer

function meetingPlanner(slotsA, slotsB, dur) {
  let i = 0;
  let j = 0;
  
  while (i < slotsA.length && j < slotsB.length) {
    let start = Math.max(slotsA[i][0], slotsB[j][0]);
    let end = Math.min(slotsA[i][1], slotsB[j][1]);
    
    if (start + dur <= end) {
      return [start, start + dur];
    }
    
    if (slotsA[i][1] < slotsB[j][1]) {
      i++;
    } else {
      j++;
    }
  }
  
  return [];

}
// Time Complexity: we are traversing every input array at most once, hence the time complexity is linear, i.e O(N+M), where N and N are lengths of slotsA and slotsB, respectively.

// Space Complexity: it’s O(1). We are using four auxiliary variables, all of which are occupying only a constant amount of space.