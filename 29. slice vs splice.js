// slice()
// Purpose: Returns a shallow copy of part of an array or string.
// Does not modify the original array/string.
// Syntax:
// array.slice(start, end)
// let arr = [1, 2, 3, 4];
// let afterSlice = arr.slice(2)
// console.log(afterSlice);
// console.log(arr);

// let str = "SUPRIYA";
// console.log(str.slice(0, 3)); // "SUP"

// splice
let arr = [1, 2, 3, 4];
let afterSlice = arr.splice(2)
console.log(afterSlice);
console.log(arr);
