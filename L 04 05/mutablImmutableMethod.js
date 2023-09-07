const numbers = [
  { id: 1, value: 10 },
  { id: 2, value: 20 },
  { id: 3, value: 30 },
  { id: 4, value: 40 },
  { id: 5, value: 50 },
];

// splice --> mutable
const index = numbers.findIndex((item) => item.id === 4);
const arr1 = numbers.splice(index, 1);

console.log(numbers);
console.log("splice", arr1);

// filter --> immutable
const arr2 = numbers.filter((item) => item.id !== 4);
console.log(numbers);
console.log("filter", arr2);

/**
 * @Mutable Array Methods (Modify the Original Array):
 *
 * push(): Adds one or more elements to the end of an array.
 * pop(): Removes the last element from an array.
 * shift(): Removes the first element from an array.
 * unshift(): Adds one or more elements to the beginning of an array.
 * splice(): Adds or removes elements at a specific index in an array.
 */

/**
 * @Immutable Array Methods (Create New Arrays Without Modifying the Original):
 *
 * concat(): Combines two or more arrays and returns a new array.
 * slice(): Returns a shallow copy of a portion of an array.
 * map(): Creates a new array by applying a function to each element of an array.
 * filter(): Creates a new array with all elements that pass a test.
 * reduce(): Applies a function to reduce the array to a single value.
 * forEach(): Iterates over the array and applies a function to each element.
 * every(): Checks if all elements in the array pass a test.
 * some(): Checks if at least one element in the array passes a test.
 * find(): Returns the first element in the array that satisfies a test.
 * findIndex(): Returns the index of the first element that satisfies a test.
 *
 */
