let arr = [1, 1, 0, 1, 1, 1, 0, 1, 1]; // output 3
// let arr = [1];
let count = 1;
let mxCount = 1;

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] === arr[i + 1]) {
    count++;
  } else {
    if (mxCount < count) {
      mxCount = count;
      count = 1;
    }
  }
}
console.log(mxCount);
