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

// Create a new students
/**
 * push() - Adds elements to the end of an array.
 * unshift()  - Adds elements to the beginning of an array. its expensive task
 * concat(): Creates a new array by combining the original array with other arrays or values.
 *
 */

/**@mutable */
//push - its perform as better the unshift
students.push({
  id: uuidv4(),
  name: "Fahim faysal",
  email: "fahim@gmail.com",
});

//unshift - its expensive for all element goes down index
students.unshift({
  id: uuidv4(),
  name: "Anisa Ibate",
  email: "anisa@gmail.com",
});

/**@immutable */
//concat - Create a new array
const newStudents = students.concat({
  id: uuidv4(),
  name: "Alan walker",
  email: "alan@gmail.com",
});

//Spread Operator (...) - Create new array by spreading the original array

const spreadStudent = [
  ...newStudents,
  {
    id: uuidv4(),
    name: "Ed Sheeran",
    email: "sheeran@gmail.com",
  },
];

// console.log(students);
// console.log("concat", newStudents);
console.log("Together", spreadStudent);
