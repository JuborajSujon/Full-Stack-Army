//If a function is not able to change any value of a variable, the function is called pure function. If input is same, output is same for forever. For example:

// Pure Function
function sum(a, b) {
  return a + b;
}

sum(10, 20); // 30

//Now let's talk about the side effect. If a function can update the value of a variable, it's called side effect. Examples are given below:

// Pure Function
let limit = 100;
function changeLimit(limit) {
  limit = 500;
  return limit;
}

console.log(changeLimit()); //500
console.log(limit); // 100
//This will not change the value of limit. That is why This is a pure function.

// Side effect
let limit1 = 100;
function changeLimit1() {
  limit1 = 500;
}

console.log(changeLimit1(limit1)); // undefined
console.log(limit1); // 500

//This will change the value of limit. So, it is the example of side effect. There are more examples are given below:
// Pure Function
const arr = [1, 2, 3];
function add(arr, data) {
  arr = [...arr, data];
  return arr;
}

console.log(add(arr, 5)); //[1,2,3,5]
console.log(arr); //[1,2,3]

// Side Effect
const arr1 = [1, 2, 3];
function add1(arr1, data) {
  arr1.push(data);
}

console.log(add(arr1)); // [1,2,3,undefined]

// Impure Function
function log(msg) {
  console.log(msg);
}

//This function looks like a pure function, but it is an impure function. Because the console logs are side effects because they're logging out to the console. So if a function consists console logs there is a possibility that the function has some side effects.
