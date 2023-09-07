//object literal
const microphone = {
  brand: "Fifine",
  indicator: true,
  price: 8000,
  color: "black",

  startRecording() {
    console.log("Recoding started");
  },
  stopRecording() {
    console.log("Recoding stopped");
  },
};

//Function Constructor
const testObj = new Object();
testObj.name = "Test Object";
testObj.time = new Date();
console.log(testObj);

for (let k in microphone) {
  // console.log(k); //return all keys
  console.log(k, microphone[k]);
}

console.log(microphone);
