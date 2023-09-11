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

// Create a new object
const newStudent = {
  id: uuidv4(),
  name: "Jamal Khan",
  email: "jamal@gmail.com",
};

students[newStudent.id] = newStudent;
console.log(students);
