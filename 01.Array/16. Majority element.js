let arr = [2, 2, 1, 2, 2, 3, 2, 2];
//o/p : 2

// function majorityElement(arr) {
//   let obj = {};
//   for (let ele of arr) {
//     if (!obj[ele]) {
//       obj[ele] = 1;
//     } else {
//       obj[ele] = obj[ele] + 1;
//       if (obj[ele] > arr.length / 2) {
//         return ele;
//       }
//     }
//   }
//   return obj;
// }

const majorityElement2 = (arr) => {
  let obj = {};
  for (let s of arr) {
    obj[s] = (obj[s] || 0) + 1;
    if (obj[s] > arr.length / 2) {
      return s;
    }
  }
};
console.log(majorityElement2(arr));
