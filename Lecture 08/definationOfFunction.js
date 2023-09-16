/*
 * Name: Human_Lifecycle
 * Param: human_name
 * :human_name, awake from sleep
 * :human_name, go to washroom
 * :human_name, take breakfast
 * :human_name, go to school/college/office
 * :human_name, Return from office
 * :human_name, Take dinner
 * :human_name", Go to sleep
 */

// Call Human_Lifecycle for 'Abu Musa'
// Call Human_Lifecycle for 'Easin Islam'
// Call Human_Lifecycle for 'Saiful Islam'
// Call Human_Lifecycle for 'Akib Ahmed'
// Call Human_Lifecycle for 'Alamin Mir'

/*
 * Function: Sleep
 * Param: name
 * Definition: How to sleep
 */

/*
 * Function: Awake
 * Param: name
 * Definition: How to awake
 */

/*
 * Function: Eat
 * Param: name
 * Param: Time
 * Definition: How to eat
 */

/*
 * Function: Walk
 * Param: name
 * Param: Destination
 * Definition: How to walk
 */

/*
 * Function: Study
 * Param: name
 * Definition: How to study
 */

/*
 * Function: Work
 * Param: name
 * Definition: How to work
 */

/*
 * Function: Job_Holder_Lifecycle
 * Param: name
 * Definition:
 * - Awake -> name
 * - Eat -> name, 'breakfast'
 * - Walk -> name, 'office'
 * - Work -> name
 * - Eat -> name, 'lunch'
 * - Walk -> name, 'home'
 * - Eat -> name, 'dinner'
 * - Sleep -> name
 */

/*
 * Function: Student Lifecycle
 * Param: name
 * Definition:
 * - Awake -> name
 * - Eat -> name, 'breakfast'
 * - Study -> name
 * - Eat -> name, 'lunch'
 * - Study -> name
 * - Eat -> name, 'dinner'
 * - Sleep -> name
 */

// Function declarations

// Print the name and value of each property of object.  Return undefined.

const obj = {
  name: "Sujon Miah",
  age: 33,
};

function printProps(object) {
  for (let p in object) {
    console.log(`${p} : ${object[p]}`);
  }
}

printProps(obj);

// Compute the distance between Cartesian points (x1,y1) and (x2,y2)

const x1 = 5,
  x2 = 8,
  y1 = 8,
  y2 = 12;

function distance(x1, y1, x2, y2) {
  const dx = x2 - x1;
  console.log(dx); //3
  const dy = y2 - y1;
  console.log(dy); //4
  return Math.sqrt(dx * dx + dy * dy);
}

console.log(distance(x1, y1, x2, y2)); // 5

// A recursive function ( one that calls itself) that computes factorials, recall that x! is the product of x and all positive inttegers less that it

function factorial(x) {
  if (x <= 1) return 1;
  return x * factorial(x - 1);
}

const result = factorial;

console.log(result(55));

// function Expression (Anonymous function)

/**
 *
 * 1. we can assign a variable
 * 2. include name , which is usful for recursion
 * 3. as arguments for other function
 * 4. Immidiatly invoke
 * 5. Arrow Function
 */

// Note that we assign it to a variable
const square = function (x) {
  return x * x;
};

// Function expression can include names, which is useful for recursion

const f = function fact(x) {
  if (x <= 1) return 1;
  else return x * fact(x - 1);
};

// Function expressions can also be used as arguments to other function
const fnResult = [1, 4, 2, 3].sort(function (a, b) {
  return a - b;
});

console.log(fnResult); //[1,2,3,4]

// Function expression are sometime defined and immediately invoked

const tensqured = (function (x) {
  return x * x;
})(10);
console.log(tensqured); //100

// Arrow function
const arrowFn = (x) => {
  // Function body
  // code here
  return x;
};

// Function Constructor
// const functionName = new Function("parameters", "function body")
const greet = new Function("name", 'console.log("Hello, " + name + "!");');

greet("sujon");

const fn = (x) => {
  return { value: x };
};
const g = (x) => ({ value: x });
