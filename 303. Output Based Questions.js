// const obj = { abc: "a", 2: "b", 3: "c" };
// console.log(obj.abc)
// const obj1 = { 1: "a", 2: "b", 3: "c" };
// console.log(obj1[1])

// const set = new Set([1, 2, 3, 4, 5]);

// obj.hasOwnProperty("1");
// obj.hasOwnProperty(1);
// set.has("1");
// set.has(1);

const user = {
  name: "Supriya",
  getName() {
    console.log(this.name);
  },
};
const x = user.getName;
