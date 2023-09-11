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

// Update
const idToUpdate = "0aed62f8-41a1-4891-a14a-0f4ddab09373";

const updatedData = {
  name: "Habiba Akhtar",
  email: "habiba@gmail.com",
};

/**
 * Modify Elements Directly
 * find either index or object
 *
 *
 * find(), findIndex()
 * forEach(), splice(), map(), filter(), some(), reduce()
 */

//using for loop find object
// for (let i = 0; i < students.length; i++) {
//   if (students[i].id === idToUpdate) {
//     students[i].name = updatedData.name;
//     students[i].email = updatedData.email;
//   }
// }

//forEachloop find object
// students.forEach((element) => {
//   if (element.id === idToUpdate) {
//     element.name = updatedData.name;
//     element.email = updatedData.email;
//   }
// });

// filter()
// Method -1
// const filteredItem = students.filter((item) => {
//   if (item.id === idToUpdate) {
//     item.name = updatedData.name;
//     item.email = updatedData.email;
//   }
// });

//Method -2
// const filteredItem = students.filter((item) => item.id === idToUpdate);
// filteredItem[0].name = updatedData.name;
// filteredItem[0].email = updatedData.email;

/**
 * @immutable find() method find object and return
 * itself does not modify the original array. if you change the value of the found element, it will affect the value within the original array if the element is an object or a reference type.
 */

// const updatedObj = students.find((item) => item.id === idToUpdate);
// updatedObj.name = updatedData.name;
// updatedObj.email = updatedData.email;

/**
 * Method - 1 work by referenc by mutation
 * its may problem because of assing by id
 * when we need reassigne that time find method doesn't help my task
 */

//

/**
 * Find index on an array using findIndex() method
 * if we are working as taditional than updateData can some miss our data
 * so we can sprade out data to solve this problem
 */

const updatedIndex = students.findIndex((item) => item.id === idToUpdate);
// console.log(updatedIndex);
students[updatedIndex] = {
  // id: idToUpdate,
  ...students[updatedIndex],
  ...updatedData,
};
console.log("Updated", students);

//slice() - its not right but we can

// const endindex = updatedIndex + 1;
// const newArray = students.slice(updatedIndex, endindex);
// newArray[0].name = updatedData.name;
// newArray[0].email = updatedData.email;
// console.log(newArray);

/**
 * @mutable - (Modifying the Original Array)
 * Here are some common methods for updating arrays in a mutable way
 *
 * push() - Adds one or more elements to the end of an array and returns the new length of the array.
 *
 * pop(): Removes the last element from an array and returns that element.
 *
 * unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
 *
 * shift(): Removes the first element from an array and returns that element.
 *
 * splice(): Changes the contents of an array by removing, replacing, or adding elements in place.
 *
 * Modify Elements Directly: You can also modify array elements directly by assigning new values to specific index
 */

/**
 * @Immutable (Creating a New Array)
 *
 * 1. concat(): Creates a new array by combining the original array with other arrays or values.
 *  const newArray = originalArray.concat(4, 5);
 *
 * 2. Spread Operator (...): Creates a new array by spreading the original array elements and adding new elements.
 *  const newArray = [...originalArray, 4, 5];
 *
 * 3. map(): Creates a new array by applying a function to each element of the original array.
 *  const newArray = originalArray.map(item => item * 2);
 *
 * 4. filter(): Creates a new array containing elements that pass a certain condition.
 *    const newArray = originalArray.filter(item => item % 2 === 0);
 *
 * 5. slice(): Creates a new array by extracting a portion of the original array.
 *   const newArray = originalArray.slice(1, 4);
 */
