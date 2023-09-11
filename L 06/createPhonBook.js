//create phonebook

const names = [
  "Ayman",
  "Abu Rayman",
  "Anik",
  "Elias Emon",
  "Engr Sabbir",
  "Fahim Faisal",
  "Feroz Khan",
  "Habib",
  "HM Azizul",
  "Jahid Hassan",
  "Johir",
  "Md Al-amin",
  "Md Arafatul",
  "Md Ashraful",
  "parvez",
];

// sample data structure
/*
const namesGrouped = {
  A: ["Ayman", "Abu Rayman", "Anik"],
  E: ["Elias Emon","Engr Sabbir"],
  F: ["Fahim Faisal", "Feroz Khan"],
};

*/

const namesGrouped = names.reduce((acc, cur) => {
  const firstLetter = cur[0].toUpperCase();
  if (firstLetter in acc) {
    acc[firstLetter].push(cur);
  } else {
    acc[firstLetter] = [cur];
  }
  return acc;
}, {});

Object.keys(namesGrouped).forEach((groupKey) => {
  console.log("========", groupKey, "========");
  namesGrouped[groupKey].forEach((name) => console.log(name));
  console.log();
});
