//In JavaScript, all function arguments are always passed by value. It means that JavaScript copies the values of the variables into the function arguments.

// Pass by value of primitives values
function square(x) {
  x = x * x;
  return x;
}

let y = 10;
let result = square(y);

console.log(result); // 100
console.log(y); // 10 -- no change

// pass by value of reference value
const person = {
  name: "Sujon",
  age: 33,
};

function increaseAge(obj) {
  obj.age += 1;
}

increaseAge(person);

console.log(person); // {name: "Sujon", age: 34}

// what does effect on array
const array = [1, 2, 3, 4];
function increaseElement(arr) {
  arr[arr.length] = 5;
  console.log(arr); // [1, 2, 3, 4 ,5]
}

increaseElement(array);
console.log(array); // [1, 2, 3, 4 ,5]
