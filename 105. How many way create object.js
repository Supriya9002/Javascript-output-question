// 4 ways

//1
const student = {
  name: "suraj",
};
console.log(student);

// 2
let csk = new Object();
csk.name = "msd";
console.log(csk);

//3
let animal = {
  name: "Dog",
};
let Anima = Object.create(animal);
console.log(animal);
