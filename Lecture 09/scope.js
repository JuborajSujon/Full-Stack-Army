var x = 55;

function test() {
  // var x = 45;
  // console.log(x)
  function nested() {
    // var y = 65
    console.log(x);
  }
  // console.log(y)
  nested();
}

test();

var a = 11;

function A() {
  var b = 12;

  function B() {
    var c = 23;
    console.log(c);
  }

  function C() {
    var d = 56;
    console.log(d);
  }

  console.log(b);
  D();
  B();
  C();
}

function D(n) {
  return n + a;
}

//for A()
//a, b, D(), B(), C()

//for B()
//a, b, c, D(), A(), C(), B()

//for C()
//a, b, d, D(), A(), B()

//for D()
//a, n, A()
