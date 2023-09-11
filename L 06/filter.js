// filter
const number = [1, 2, 3, 4, false, "", NaN, 5, 6];
const filtered = number.filter((v) => !!v);
const filtered1 = number.filter((v) => !v);
const strs = number.filter((v) => v).map((v) => v.toString());
console.log(filtered);
console.log(filtered1);
console.log(strs);
