// A recursive function is a function that calls itself until it doesn’t. And this technique is called recursion.

function recursive() {
  if (codition) {
    // Stop it self
  } else {
    recursive();
  }
}

//Generally, you use recursive functions to break down a big problem into smaller ones. Typically, you will find the recursive functions in data structures like binary trees and graphs and algorithms such as binary search and quicksort.

//count down from 3 to 1
// function countDown(fromNumber) {
//   console.log(fromNumber);
//   let nextNumber = fromNumber - 1;
//   if (nextNumber > 0) {
//     countDown(fromNumber - 1);
//   }
// }
// countDown(5);

let countDown = function f(fromNumber) {
  console.log(fromNumber);

  let nextNumber = fromNumber - 1;

  if (nextNumber > 0) {
    f(nextNumber);
  }
};

let newYearCountDown = countDown;
countDown = null;
newYearCountDown(10);

// Calculate the sum of n natural numbers example
function sum(n) {
  if (n <= 1) {
    return n;
  }
  return n + sum(n - 1);
}
