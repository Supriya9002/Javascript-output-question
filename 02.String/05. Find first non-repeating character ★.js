let str = "aabbc";

function nonRepetingChar(str) {
  let obj = {};
  for (let s of str) {
    obj[s] = (obj[s] || 0) + 1;
  }
  // console.log(obj);
  // for (let s of str) {
  //   if (obj[s] === 1) {
  //     return s;
  //   }
  // }
  // or intret each element
  for (let s in obj) {
    if (obj[s] === 1) {
      return s;
    }
  }
}

console.log(nonRepetingChar(str));
