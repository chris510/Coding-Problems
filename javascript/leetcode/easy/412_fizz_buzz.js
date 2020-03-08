// Write a program that outputs the string representation of numbers from 1 to n.

// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

const fizzBuzz = (n) => {
  const fizz = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      fizz.push("FizzBuzz");
    } else if (i % 3 === 0) {
      fizz.push("Buzz");
    } else if (i % 5 === 0) {
      fizz.push("Fizz");
    } else {
      fizz.push(`${i}`);
    }
  }
  return fizz;
}

//Time Complexity: O(N) we are just ittearting once for however big our number is.
//Space Compleixty: O(N) we are just creating a new array for each time we run our function.

// Example:

// n = 15,

// Return:
// [
//     "1",
//     "2",
//     "Fizz",
//     "4",
//     "Buzz",
//     "Fizz",
//     "7",
//     "8",
//     "Fizz",
//     "Buzz",
//     "11",
//     "Fizz",
//     "13",
//     "14",
//     "FizzBuzz"
// ]