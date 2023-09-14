function a() {
  b();
  console.log("I am Function A");
}

function b() {
  d();
  console.log("I am Function B");
}

function c() {
  console.log("I am Function C");
}

function d() {
  c();
  console.log("I am Function D");
}

var x = 100;
a();
console.log("I am Global");

//Execution of c function context
//Execution of d function context
//Execution of b function context
//Execution of a function context
//Execution of Global context

// Variable collection, scope chain maintain, which variable function can exccess or not, this variable how to get his parent

//Creational phase (Variable declare, function declare, to make scope chain relation)

//Executional phase ( )

// var a = 10;
// var b

// console.log(a)
// console.log(b)

// b = 20,

// console.log(c)
// var c = 50

// Creational phase
//a = undefined
//b = undefined
//c = undefined

//Executional phase
//a = 10
//b = 20
//c = 50

abc();

function abc() {
  console.log("I am function");
}

abc();

//Creational phase
//abc = ref

//Executional phase
//abc()
//abc()
