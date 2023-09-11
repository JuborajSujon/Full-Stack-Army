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

console.log(students);
