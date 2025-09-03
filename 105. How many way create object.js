// there are multiple ways to create an object. Here are the most common ones

// 1. Using Object Literal
const obj1 = { name: "supriya", age: 25 };

// 2. Using new Object()
const obj2 = new Object();
obj2.name = "Supriya";
obj2.age = 21;

// 3. Using Constructor Function
function Person(name, age){
  this.name = name,
  this.age = age
}
const person = new Person("supriya", 25)

// 4. Using ES6 class
class Person2{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
}
const person2 = new Person2("Ani", 25)

// 5. Using Object.create()
const proto = { greet() { console.log("Hello!"); } };
const obj = Object.create(proto);
obj.name = "Supriya";
console.log(obj)

// 6. 6. Object.assign()
let lesson = {
  lessonName: "DSA"
}
let teacher = {
  name: "Kamol Sir"
}

let course = Object.assign({}, lesson, teacher)
console.log(course)