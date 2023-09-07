// How to find is realy empty object
const empty = {};
console.log(!empty); // its return true
console.log(Boolean(empty)); // its return true

console.log(Object.keys(empty)); //return empty array, its truthy value
console.log(Boolean([])); // its also return true

console.log(Object.keys(empty).length === 0); //Now its show object is empty
