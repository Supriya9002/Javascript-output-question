let arr = [1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1]; // output 3
// let arr = [1];
let count = 0;
let maxCount = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 1) {
    count++;
  } else {
    if (maxCount < count) {
      maxCount = count;
    }
    count = 0;
  }
}
if (maxCount < count) {
  maxCount = count;
}
console.log(maxCount);
