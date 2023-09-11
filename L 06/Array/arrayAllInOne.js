/**
 * Store 10 students information
 * - name
 * - email
 * - id - id generated function
 */

/**
 * Returns a UUIDv4 as string
 *
 * @returns {string}
 */
uuidv4 = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;

    return v.toString(16);
  });
};

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

/**
 * we can handle below operation when data in array
 *
 * 1. Easily Travers - O(n)
 * 2. Filter
 * 3. Delete (medium) [splice -> O(n), filter -> O(n)]
 * 4. Update (medium) (easy) [push -> O(1)]
 * 5. Create a new one (easy) [push -> O(1), unshift --> O(n)]
 */

// Create a new students
/**
 * we can use unshift()  - its expensive task
 * we can use push() - its fine
 */

students.push({
  id: uuidv4(),
  name: "Fahim faysal",
  email: "fahim@gmail.com",
});

// Update
const idToUpdate = "0aed62f8-41a1-4891-a14a-0f4ddab09373";

const updatedData = {
  name: "Habiba Akhtar",
  // email: "habiba@gmail.com",
};

/** find either index or object */
/** so lets find object 1st using find() method */

const updatedObj = students.find((item) => item.id === idToUpdate);

/**
 * Method - 1 work by referenc by mutation
 * its may problem because of assing by id
 * when we need reassigne that time find method doesn't help my task
 */

// updatedObj.name = updatedData.name;
// updatedObj.email = updatedData.email;

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

// Delete
/** Mutable way */
students.splice(updatedIndex, 1);
console.log("Deleted", students);

/** Immutable way */
const idToDelete = "6d3531fb-9496-47fa-8fec-be6ad55f7ab3";
const updatedStudents = students.filter((student) => student.id !== idToDelete);

console.log("immutable", updatedStudents);

/**
 * Easily Travers method
 * forEach, map, filter, every, reduce, some, find,findIndex, indexOf, for loop, for...in, for ...of
 */
