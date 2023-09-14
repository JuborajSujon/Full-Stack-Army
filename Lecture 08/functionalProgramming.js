// Function is a first class citizen. Because we can treat function as a value.

// Benefits of a function treat as a value:

// we can store functions in a variable
function testFunction() {
  console.log("I am a test function");
}

const fn = testFunction;
console.log(fn.toString());
fn();

// we can store function inside an object / array
const arr = [fn, testFunction];
const obj = {
  fn: testFunction,
};

// we can pass function as an argument
function fnArgument(fn) {
  return fn();
}
fnArgument(testFunction);

// we can also return a function from another function
function returnFn() {
  return testFunction;
}
