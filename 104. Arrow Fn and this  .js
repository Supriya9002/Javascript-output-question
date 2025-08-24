// function normalFunc() {
//   console.log(this);
// }

// const obj = {
//   name: "Supriya",
//   greet: normalFunc,
// };

// normalFunc(); // In strict mode → undefined, otherwise → global object (window in browser)
// obj.greet(); // obj (because it's called as a method of obj)


const obj = {
  name: "Supriya",
  greet: () => {
    console.log(this.name);
  }
};

obj.greet(); // undefined (because `this` is taken from the outer scope, not obj)


