//1. console.log(this) in a function
// function testFunction() {
//   console.log(this);
// }
// testFunction();

// In non–strict mode → this inside a regular function defaults to the global object (window in browsers, global in Node.js).
// In strict mode ('use strict') → this will be undefined inside a regular function.

// "use strict";
// function testFunction2() {
//   console.log(this); // undefined
// }
// testFunction2();

// console.log(this) in an object
// const obj = {
//   name: "Supriya",
//   showThis: function () {
//     console.log(this);
//   },
// };
// obj.showThis();
// Here, this refers to the object that called the method → so it will log the obj.

// console.log(this) in the global scope (window)
// console.log(this);
// In browsers, this will log the window object.

// In Node.js, it logs an empty object {}

// ................................................................... //
function test() {
  console.log(this);
}
// test();

let obj = {
  x: "Hello",
  y: () => {
    console.log(this.x);
  }
};
obj.y();
