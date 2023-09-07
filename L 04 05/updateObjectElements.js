const numbers = [
  { id: 1, value: 10 },
  { id: 2, value: 20 },
  { id: 3, value: 30 },
  { id: 4, value: 40 },
  { id: 5, value: 50 },
];

const index = numbers.findIndex(function (v) {
  return v.id === 4;
});

numbers[index].value = 400;
console.log(numbers);

const obj = numbers.find(function (v) {
  return v.id === 4;
});

obj.value = 400;
console.log(numbers);
