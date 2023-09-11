//reduce
const number = [1, 2, 3, 4, false, "", NaN, 5, 6];

//structure

// we want this -> '1234falseNaN56'
const result = number.reduce((acc, cur) => {
  acc += cur.toString();
  return acc;
}, "");
console.log("Result", result);

// we want this -> remove all falsy value
const result2 = number.reduce((acc, cur) => {
  if (cur) {
    acc += cur.toString();
  }
  return acc;
}, "");
console.log("Result-2", result2);

// we want this -> number element with , and add []
const result3 = number.reduce((acc, cur, index) => {
  if (index === 0) acc += "[";
  if (cur) {
    acc += cur.toString() + (index < number.length - 1 ? "," : "");
  }
  if (index === number.length - 1) acc += "]";
  return acc;
}, "");
console.log("Result-3", result3);

// we make easily filter and map by using reduce and return array
const result4 = number.reduce((acc, cur) => {
  if (cur) {
    acc.push(cur.toString());
  }
  return acc;
}, []);
console.log("Result-4", result4);

// Comparison abort map, filter, reduce

const arr = [];

for (let i = 0; i <= 500000000; i++) {
  arr.push[i];
}

console.time("filter-map");
arr.filter((item) => item % 2 === 0).map((item) => item * 2);
console.timeEnd("filter-map");

console.time("reduce");
arr.reduce((acc, cur) => {
  if (cur % 2 === 0) {
    acc.push(cur * 2);
  }
  return acc;
}, []);
console.timeEnd("reduce");
