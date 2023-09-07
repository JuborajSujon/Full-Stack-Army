// Make to only number data type to exiting array form its elements by imperative way

const array = [1, 2, 3, null, false, true, 4, 5, " ", "test", 6, 7, undefined];

let writeIndex = 0;

for (let i = 0; i < array.length; i++) {
  const currentElement = array[i];

  if (typeof currentElement === "number" && isNaN(currentElement)) {
    array[writeIndex] = currentElement;
    writeIndex++;
  }
}

// Truncate the array to remove extra elements
array.length = writeIndex;

console.log("imperative", array);

// Make to only number data type to exiting array from its elements by declarative way

const numb = [1, 2, 3, null, false, true, 4, 5, " ", "test", 6, 7, undefined];
const filteredArray = numb.filter((v) => {
  typeof v === "number";
});
console.log("declarative", filteredArray);
