const students = [
  {
    id: "0a509473-6674-4427-bcc5-36c8f08bea74",
    name: "Md al-amin",
    email: "alamin@gmail.com",
  },
  {
    id: "6d3531fb-9496-47fa-8fec-be6ad55f7ab3",
    name: "Akib Ahmed",
    email: "akib@gmail.com",
  },
  {
    id: "0aed62f8-41a1-4891-a14a-0f4ddab09373",
    name: "Elias Emon",
    email: "elias@gmail.com",
  },
];

// Delete
/** Mutable way */
const idToDelete = "6d3531fb-9496-47fa-8fec-be6ad55f7ab3";
const findIndex = students.findIndex((item) => item.id === idToDelete);
// console.log(findIndex); //1
students.splice(findIndex, 1);
console.log("Deleted", students);

/** Immutable way */
const updatedStudents = students.filter((student) => student.id !== idToDelete);

console.log("immutable", updatedStudents);

/**
 * @mutable (Modifying the Original Array) -delete from an array
 *
 * Here are some mutable method that you can use to delete element from an array in javaScript
 *
 * 1. pop() - Removes the last element from an array and returns item
 *     const removedElement = array.pop();
 *
 * 2. shift() - Removes the first element from an array and shifts all other elements to a lower index.
 *    const removedElement = array.shift();
 *
 * 3. splice() - Changes the contents of an array by removing elements at a specified index.
 *    array.splice(startIndex, deleteCount);
 *
 * 4. length property - You can modify the length property to remove elements from the end of an array or truncate the array
 *
 *    Removeing elements from the end:
 *    array.length = newLength;
 *
 *    Truncating the array:
 *    array.length = startIndex
 */

/**
 * @Immutabe (Creating a New Array) -delete from an array
 * 
 * Here are some common immutable methods for deleting elements from an array
 * 
 * 
 * 1. filter() - Creates a new array with all elements that pass the provided test.
 *     const newArray = array.filter((element) => element !== elementToDelete);
 * 
 * 2. slice() - Creates a new array by extracting elements from the original array based on specified start and end index.
 *    const newArray = array.slice(0, indexToDelete).concat(array.slice(indexToDelete + 1));
 * 
 * 3. Spread Operator (...): Creates a new array by spreading the elements before and after the element to be deleted.
 *    const newArray = [...array.slice(0, indexToDelete), ...array.slice(indexToDelete + 1)];
 * 
 * 4. splice(): While splice() is a mutable method, you can use it immutably by first creating a copy of the original array and then applying splice() on the copy.
 * 
 *    const newArray = [...array];
      newArray.splice(indexToDelete, 1);
 */
