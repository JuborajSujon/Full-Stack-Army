function sleep(name) {
  console.log(`${name} is sleeping`);
}

function awake(name) {
  console.log(`${name} is awake`);
}

function eat(name, time) {
  console.log(`${name} is taking ${time}`);
}

function walk(name, destination) {
  console.log(`${name} is walking to ${destination}`);
}

function study(name) {
  console.log(`${name} is studying`);
}

function work(name) {
  console.log(`${name} is working`);
}

function jobHolderLifecycle(name) {
  awake(name);
  eat(name, "breakfast");
  walk(name, "office");
  work(name);
  eat(name, "lunch");
  walk(name, "home");
  eat(name, "dinner");
  sleep(name);
}

function studentsLifecycle(name) {
  awake(name);
  eat(name, "breakfast");
  study(name);
  eat(name, "lunch");
  study(name);
  eat(name, "dinner");
  sleep(name);
}

function bake(degree) {
  let message = "";

  if (degree > 500) {
    message = "I'm not a nuclear reactor!";
  } else if (degree < 100) {
    message = "I'm not a refrigerator!";
  } else {
    message = "That's a very comfortable temperature for me";
  }

  return message;
}

const status = bake(350);
console.log(status);
