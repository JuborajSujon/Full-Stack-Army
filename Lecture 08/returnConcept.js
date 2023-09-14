// let some simple function make to understand function composition

// function sum(a, b) {
//   console.log(a + b);
// }

function sum(a, b) {
  return a + b;
}

// function subtract(a, b) {
//   console.log(a - b);
// }

function subtract(a, b) {
  return a - b;
}

// function times(a, b) {
//   console.log(a * b);
// }

function times(a, b) {
  return a * b;
}

const a = 10;
const b = 20;

const r1 = sum(a, b); // 30
console.log("R1", r1); // 'R1' undefined
const r2 = subtract(a, b); // -10
console.log("R2", r2); // 'R2' undefined
const r = times(r1, r2); // NaN
console.log(r); // undefined

// Math.abs(n) -> F    (Function Composition)
//F(G(10,20))

const rfull = Math.abs(times(sum(a, b), subtract(a, b)));
console.log(rfull);
