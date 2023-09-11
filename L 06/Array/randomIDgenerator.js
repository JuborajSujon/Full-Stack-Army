/**
 * Store 3 students information
 * - name
 * - email
 * - id - id generated function
 */

/**
 * Returns a UUIDv4 as string
 * @method -4
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
    id: uuidv4(),
    name: "Md al-amin",
    email: "alamin@gmail.com",
  },
  {
    id: uuidv4(),
    name: "Akib Ahmed",
    email: "akib@gmail.com",
  },
  {
    id: uuidv4(),
    name: "Elias Emon",
    email: "elias@gmail.com",
  },
];

console.log(students);

// A utility to create a random id

/**
 * @method -1
 * This function generates a random string of characters that can be used as an ID
 *
 * step 1: Crate a function
 * step 2: Define the characters you want to use for generating the random ID
 * step 3: Initialize an empty string to store the random ID
 * step 4: Use a loop to generate the random ID of the desired length
 * step 5: Inside loop define the random() to get an index form the characters string rangs
 * step 6: Appen the randonly selected character to the random ID string
 * step 7: Return the genetated random ID.
 * step 8: store the function return to a varialbe
 *
 */

function generateRandomId(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomId = "";
  for (i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
  }

  return randomId;
}
const randomId = generateRandomId(10);
console.log(randomId);

/**
 * @method -2
 * This function generates a random array of string characters that can be used as an id
 *
 *
 * step 1: Create a function
 * step 2: define a characters you want to use for generate the random ID
 * step 3: Initialize a empty array to store the random ID
 * step 4: Use loop to generate the random ID of the desired length
 * step 5: Inside loop define the random() to get index from the characters string rangs
 * step 6: push the index with charAt() to get character and store in array
 * step 7: Retuen the random id convert to string by using join()
 * step 8: Store the function retuen in a varialbe
 *
 */

function generateRandomArrayString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomIdArray = [];

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomIdArray.push(characters.charAt(randomIndex));
  }
  return randomIdArray.join("");
}

const randomIdArray = generateRandomArrayString(12);
console.log(randomIdArray);

/**
 * @method -3
 *
 */

function genetateDesiredRandomId() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomId = "";

  for (let i = 0; i < 27; i++) {
    if (i === 6 || i === 13 || i === 20) {
      randomId += "-";
    } else {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters.charAt(randomIndex);
    }
  }

  return randomId;
}

const randomDesired = genetateDesiredRandomId();
console.log(randomDesired);

/**
 * Returns a UUIDv4 as string
 * @method -4
 *
 * @returns {string}
 *
 * 1. generateUUIDv4 is a function defined using an arrow function (=>) syntax. It doesn't take any arguments and returns a random UUIDv4 string.
 * 2. The UUIDv4 pattern is represented as a string: 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'. This pattern includes four groups of hexadecimal characters separated by hyphens.
 * 3. The replace method is used on this pattern string, and it replaces occurrences of the characters 'x' and 'y' with generated values. The regular expression /[xy]/g is used to match all 'x' and 'y' characters in the pattern.
 * 4. For each matched character ('x' or 'y'), a callback function is executed. The callback function takes a single argument c, which represents the matched character.
 * 5. Inside the callback function:

  ==> Math.random() generates a random decimal number between 0 and 1.
  ==> 16 scales the random number to a range between 0 and 15.
  ==> | 0 performs a bitwise OR operation with 0 to truncate the decimal part, resulting in an integer between 0 and 15.
  ==> c === 'x' ? r : (r & 0x3 | 0x8) generates a random hexadecimal digit for 'x' and a specific hexadecimal digit (4, 5, 6, or 7) for 'y' as required by the UUIDv4 format.
  ==> v.toString(16) converts the generated integer to a hexadecimal string.

* 6. The final replace method result is the UUIDv4 string with all 'x' and 'y' characters replaced by randomly generated hexadecimal digits.
* 
 */

uuidv4 = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;

    return v.toString(16);
  });
};

console.log(uuidv4());
