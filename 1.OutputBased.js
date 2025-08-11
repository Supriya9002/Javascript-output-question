// //  1
// if ([]) {
//   // array are consider as object in javascript, so it will be true, hare array is empty, but js will consider it as true, either content or not, it is true
//   console.log("true");
// }

// //2
// console.log("20" > "10"); //true,  when comparing string, it will compare the ascii value of the string, so "20" means "2"-> 50 and "10" means "1"-> 49, so "20" is greater than "10"
// console.log("20" > 10); // false, when comparing string and number, it will compare the ascii value of the string, so "20" means "2"-> 50  is less than 10

// //3
// console.log("2" > 1); //true, when comparing string and number, it will compare the ascii value of the string, so "2" means "2"-> 50  is greater than 1
// console.log("2" < 1); //false, when comparing string and number, it will compare the ascii value of the string, so "2" means "2"-> 50  is less than 1

// //4
// let x =[20, 1, 3].sort(); // it is sort lexicographically
// console.log(x);

// // result positive means change the order
// let y = [20, 1, 3].sort((a, b) => a - b); // Ascending Order (Smallest to Largest): it is sort lexicographically
// let z = [20, 1, 3].sort((a, b) => b - a); // Descending Order (Largest to Smallest):
// console.log(y);

// //5

// {
//   var a = 10;
//   let b = 20; //block scope // reference error
//   const c = 30; //block scope// reference error
//   console.log(a, b, c);
// }
// console.log(a, b, c); // a = 10 , others error

// // 6
// console.log(0.1 + 0.2 === 0.3); // false
// console.log(0.1 + 0.2); //0.30000000000000004
// console.log(0.2 + 0.1 == 0.3); // false
// console.log(Math.abs(0.1 + 0.2 - 0.3) < 1e-10); // ✅ true
// // others
// const sum = 0.1 + 0.2;
// const target = 0.3;
// const isEqual = Math.abs(sum - target) < Number.EPSILON;

// console.log(isEqual); // ✅ true

// console.log("5" + "2"); //52
// console.log("5" - "2"); //3
// console.log("5" * "2"); //10
// const a = "5" +5 ;
// console.log(typeof a);
// console.log(a/"10")

// let a = 'jscafe'
// a[1] = 'c'
// console.log(a)

// console.log("Start");
// setTimeout(() => {
//   console.log("Timeout");
// });
// Promise.resolve().then(() => console.log("Promise"));

// console.log("End");

// //// Start
// //// End
// ///// Promise   ✅ microtask
// //// Timeout   ⏳ macrotask

// function x() {
//   for (let i = 0; i < 10; i++) {
//     // console.log(i);
//     setTimeout(() => {
//       console.log(i);
//     },1000);
//   }
// }
// x();

// let a = 50;
// function x() {
//   let a = 10;
//   function d() {
//     console.log(a);
//   }
//   a = 500;
//   return d;
// }
// console.log(a); //50
// const d = x();
// console.log(a); //50
// d(); //500
// console.log(a); //50

// getData1();
// getData();
// console.log(getData);
// function getData1() {
//   console.log("getData11");
// }
// var getData = () => {
//   console.log("Hello");
// };
// console.log(getData);
// getData();

// function func() {
//   try {
//     console.log(1);
//     return;
//   } catch (e) {
//     console.log(2);
//   } finally {
//     console.log(3);
//   }
//   console.log(4);
// }
// func();

// const nums = [1, 2, 3, 4, 5, 6, 7];
// nums.forEach((n) => {
//   if (n % 2 === 0) {
//     //  break; // break can only be used in traditional loops: for, while, do...while, and switch.
//     // forEach, map, filter, etc., are callback-based functions, not real loops in the language syntax.
//     // console.log("break", n);
//   }
//   console.log(n);
// });

// let a = true;
// console.log(a);
// setTimeout(() => {
//   a = false;
// }, 2000);
// console.log(a);
// // while (a) {
// //   console.log(" -- inside whilee -- ");
// // }

// let a = true;
// console.log(a); // true
// setTimeout(() => {
//   a = false;
// }, 2000);
// const interval = setInterval(() => {
//   if (!a) {
//     clearInterval(interval); // stop when a is false
//     return;
//   }
//   console.log(" -- inside whilee -- ");
// }, 100); // check every 100ms

// console.log(a);



// function outerFunction() {
//   let count = 0; // This is a local variable of outerFunction
//   function innerFunction() {
//     count++;
//     console.log("Count is: " + count);
//   }
//   return innerFunction;
// }

// const counter = outerFunction();
// console.log("suu")
// console.log(counter);

// counter(); // Output: Count is: 1
// counter(); // Output: Count is: 2
// counter(); // Output: Count is: 3

function one() {
  console.log('One');
  two();
}
function two() {
  console.log('Two');
}
one();
