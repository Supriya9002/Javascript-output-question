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
// Purpose: Changes the original array by adding, removing, or replacing elements.
// Modifies the original array.
// Syntax: array.splice(start, deleteCount, item1, item2, ...)
// start → index to start changes.
// deleteCount → number of elements to remove.
// item1, item2, ... → optional items to insert.
 rem
// remove
// let arr = [1, 2, 3, 4];
// let afterSlice = arr.splice(2)// 3, 4
// console.log(afterSlice);
// console.log(arr);

// let arr1 = [1, 2, 3, 4];
// let afterSlice1 = arr1.splice(1, 1) // 2
// console.log(afterSlice1);
// console.log(arr1);

// Add
let arr3 = [1, 2, 5];
arr3.splice(2, 0, 3, 4); // add before index 2, hare 0 means delation
console.log(arr3); // [1, 2, 3, 4, 5]

// Replace
let arr4 = [1, 2, 3, 4, 5];
arr4.splice(1, 2, 9, 8); // from index 1 remove 2 items, insert 9 & 8
console.log(arr4); // [1, 9, 8, 4, 5]
