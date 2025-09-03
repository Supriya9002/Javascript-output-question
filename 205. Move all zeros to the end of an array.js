function moveToZero(arr) {
  let result = [],
    count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      result.push(arr[i]);
    } else {
      count++;
    }
  }
  while (count > 0) {
    result.push(0);
    count--;
  }
  return result;
}

let arr = [0, 1, 0, 3, 12];
console.log(moveToZero(arr));

// alternative approch
let arr1 = [0, 1, 0, 3, 12];
let nonZero = arr1.filter((a) => a != 0);
let zero = arr1.filter((a) => a == 0);
console.log(nonZero.concat(zero));
console.log([...nonZero, ...zero]);
