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
