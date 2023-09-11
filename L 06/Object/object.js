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

const students = {
  "0a509473-6674-4427-bcc5-36c8f08bea74": {
    id: "0a509473-6674-4427-bcc5-36c8f08bea74",
    name: "Md al-amin",
    email: "alamin@gmail.com",
  },
  "6d3531fb-9496-47fa-8fec-be6ad55f7ab3": {
    id: "6d3531fb-9496-47fa-8fec-be6ad55f7ab3",
    name: "Akib Ahmed",
    email: "akib@gmail.com",
  },
  "0aed62f8-41a1-4891-a14a-0f4ddab09373": {
    id: "0aed62f8-41a1-4891-a14a-0f4ddab09373",
    name: "Elias Emon",
    email: "elias@gmail.com",
  },
};

/**
 * we can handle those operation when data in array
 * find complescity Order number (How much need time and memory)
 *
 * 1. Easily Travers (O(n))
 * 1.1 Get anything if you have the key: O(1)
 * 2. Filter - need loop and extra memory
 * 3. Delete (easy) [O(1)]
 * 4. Update (easy) [O(1)]
 * 5. Create a new one (easy) [ O(1)]
 */

// Create a new object
const std = {
  id: uuidv4(),
  name: "Feroz Khan",
  email: "feroz@gmail.com",
};

students[std.id] = std;

// Update
const idToBeUpdated = "6d3531fb-9496-47fa-8fec-be6ad55f7ab3";
const updatedData = {
  name: "HM Azizul",
  email: "azizul@gmail.com",
};
students[idToBeUpdated] = {
  ...students[idToBeUpdated],
  ...updatedData,
};

// Delete
delete students[idToBeUpdated];

// Travers
/**
 * its ok but some time we need map, reduce, filter and so on
 * At this time comes to help object method like entries, keys, values
 */

// for (let key in students) {
//   // console.log(key); // get random id
//   console.log(students[key].email);
// }

// const arrStudent = Object.keys(students) // we can store value and working next program

// Object.keys(students).forEach((key) => {
//   const student = students[key];
//   console.log(student.name, student.email);
// });

// Object.values(students).forEach((student) => {
//   console.log(student.name, student.email);
// });

// Object.entries(students).forEach((student) => {
//   console.log(student);
// });

//Get anything if you have the key
// console.log(students["0a509473-6674-4427-bcc5-36c8f08bea74"]);

// console.log(students);
