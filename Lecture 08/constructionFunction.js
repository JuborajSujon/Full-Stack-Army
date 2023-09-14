//Function Construction
const newFn = new Function(
  "str",
  `let obj = {};
      for (let s of str) {
          if (s !== ' ') {
              obj[s] = s;
        }
    }
    return obj;`
);

console.log(newFn("HM Nayem"));

// On the above code, we can pass arguments as many as we want. But last argument must be the function body. If we don't pass the body as last argument it will throw an error.
