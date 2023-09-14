/**
 * Higher Order function
 *
 * Function can be passed as an argument
 * Function can be return from another function
 *
 */

/**
 * Hidden concepts
 *
 * Scope
 * Closure
 * Execution Context
 * Hosting
 *
 */

//Function can be passed as an argument
function randomSum(max) {
  const random1 = Math.floor(Math.random() * max);
  const random2 = Math.floor(Math.random() * max);
  return random1 + random2; // placeholder
}

function randomSub(max) {
  const random1 = Math.floor(Math.random() * max);
  const random2 = Math.floor(Math.random() * max);
  return random1 - random2; // placeholder
}

function randomSqrSum(max) {
  const random1 = Math.floor(Math.random() * max);
  const random2 = Math.floor(Math.random() * max);
  return random1 * random1 + random2 * random2; // placeholder
}

//There are many repetitive codes in the example. To follow the DRY (Don't Repeat Yourself) we can write the functions like this:

function generateTwoRandNumber(max, cb) {
  const random1 = Math.floor(Math.random() * max);
  const random2 = Math.floor(Math.random() * max);
  const result = cb(random1, random2);
  return result;
}
const cb = function (rand1, rand2) {
  console.log(rand1, rand2);
};
generateTwoRandNumber(100, cb);

console.log(generateTwoRandNumber(1000, (rand1, rand2) => rand1 + rand2));
console.log(generateTwoRandNumber(10, (rand1, rand2) => rand1 * rand2));
console.log(
  generateTwoRandNumber(10, (rand1, rand2) => rand1 * rand1 + rand2 * rand2)
);

//Function can be return from another function
function power(p) {
  return function (n) {
    let result = 1;
    for (let i = 1; i <= p; i++) {
      result *= n;
    }
    return result;
  };
}

const sqr = power(2);
const cube = power(3);

console.log(sqr(5));
console.log(cube(6));
