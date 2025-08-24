// duplicate remove
// const a = [2, 8, 4, 5, 9, 2, 8, 9];

// let emptyArray = [];
// function duplicateArray(a) {
//   for (let i = 0; i < a.length; i++) {
//     if (emptyArray.indexOf(a[i]) === -1) {
//       emptyArray.push(a[i]);
//     }
//   }
//   return emptyArray;
// }

// console.log(duplicateArray(a));

// using filter

const a = [2, 2, 8, 4, 5, 9, 2, 8, 9];

const unique = a.filter((value, index) => a.indexOf(value) === index);
console.log(unique);
console.log(a.indexOf(2));


