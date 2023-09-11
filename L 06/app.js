const arr = [];
const arrToObj = {};
for (let i = 0; i < 5000000; i++) {
  const o = {
    id: i,
    value: i,
  };
  arr.push(o);
  arrToObj[i] = o;
}

console.log(arr.length);
/**Find how mach time we need this operation */

console.time("array");
let id = 4999999;
const obj = arr.find((item) => item.id === id);
obj.value = 555;
console.timeEnd("array");

console.time("obj");
arrToObj[id].value = 999;
console.timeEnd("obj");

console.time("array");
arr.unshift({
  id: 5000000,
  value: 5000000,
});
console.timeEnd("array");

console.time("obj");
arrToObj[5000000] = {
  id: 5000000,
  value: 5000000,
};
console.timeEnd("obj");

console.time("array");
const index = arr.findIndex((item) => item.id === 4000000);
arr.splice(index, 1);
console.timeEnd("array");

console.time("obj");
delete arrToObj[4000000];
console.timeEnd("obj");

/**
 * Task - we need order data but data store in object
 */

// map, filter, reduce
/**
 * map -> [Same length as the original array]
 * filter -> [with filtered item]
 * reduce -> Know one knows (only you know) its may number, string, boolean, func, arr, object all of them you can return.
 *
 */

map;
const number = [1, 2, 3, false, "", NaN, 5, 6];
const strs = number.map((v) => v.toString());
console.log(strs);

//filter
const filtered = number.filter((v) => !!v);
const filtered1 = number.filter((v) => !v);
const strs1 = number.filter((v) => v).map((v) => v.toString());
console.log(filtered);
console.log(filtered1);
console.log(strs1);

//reduce
// const number = [1, 2, 3, 4, false, "", NaN, 5, 6];

//structure

// we want this -> [1,2,3,4,5,6]
const result = number.reduce(
  (previousValue, currentValue, currentIndex, array) => {
    if (currentIndex === 0) previousValue += "[";
    if (currentIndex) {
      previousValue +=
        currentValue.toString() + (currentIndex < number.length - 1 ? "," : "");
    }
    if (currentIndex === number.length - 1) previousValue += "]";
    // previousValue += currentValue.toString();
    return previousValue;
  },
  ""
);

// const result = number.reduce((acc, cur) => {
//   if (cur) {
//     acc.push(cur.toString());
//   }
//   return acc;
// }, []);

console.log(result);

// Comparison abort map, filter, reduce

const arr1 = [];

for (let i = 0; i <= 500000000; i++) {
  arr.push[i];
}

console.time("filter-map");
arr1.filter((item) => item % 2 === 0).map((item) => item * 2);
console.timeEnd("filter-map");

console.time("reduce");
arr1.reduce((acc, cur) => {
  if (cur % 2 === 0) {
    acc.push(cur * 2);
  }
  return acc;
}, []);
console.timeEnd("reduce");

const axios = require("axios").default;
const url = "https://jsonplaceholder.typicode.com/posts";

async function getData() {
  const { data } = await axios.get(url);
  const result1 = data.slice(0, 10).map((item) => {
    return {
      userId: item.userId,
      id: item.id,
      title: item.title,
    };
  });

  // const result = data.slice(0, 10).reduce((acc, cur) => {
  //   acc[cur.id] = { ...cur };
  //   delete acc[cur.id].body;

  //   return acc;
  // }, {});

  return result1;
}
getData()
  .then((data) => console.log(data))
  .catch((e) => console.log(e));

//create phonebook

const names = [
  "Ayman",
  "Abu Rayman",
  "Anik",
  "Engr Sabbir",
  "Fahim Faisal",
  "Feroz Khan",
  "Habib",
  "HM Azizul",
  "Jahid Hassan",
  "Johir",
  "Md Al-amin",
  "Md Arafatul",
  "Md Ashraful",
  "parvez",
];

// sample data structure
/*
const namesGrouped = {
  A: ["Ayman", "Abu Rayman", "Anik"],
  E: ["Engr Sabbir"],
  F: ["Fahim Faisal", "Feroz Khan"],
};

*/

const namesGrouped = names.reduce((acc, cur) => {
  const firstLetter = cur[0].toUpperCase();
  if (firstLetter in acc) {
    console.log("found", firstLetter);
  } else {
    acc[firstLetter] = [];
    console.log("not Found for", firstLetter);
  }
  return acc;
}, {});

Object.keys(namesGrouped).forEach((groupKey) => {
  console.log("========", groupKey, "========");
  namesGrouped[groupKey].forEach((name) => console.log(name));
  console.log();
});
