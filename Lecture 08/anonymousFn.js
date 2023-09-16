// define an anonymous function
// ((params) {

// })

// assign the anonymous function to the show variable

const show = function () {
  console.log("Anonymous function");
};

show();

// Using anonymous function as arguments
// pass an anonymous function into the setTimeout() function
setTimeout(function () {
  console.log("Execute later after 1 second");
}, 1000);

// Immediately invoked function execution
(function () {
  console.log("Immediately invoked function execution");
})();

// Arrow function expressions that provide a shorthand for declaring anonymous functions
const arrowFn = function () {
  console.log("Anonymous function");
};

// Can be shorterned using the following arrow function
const arrowFn1 = () => console.log("Anonymous shorterned function");
