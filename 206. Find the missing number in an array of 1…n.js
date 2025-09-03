function findMissing(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != i + 1) {
      console.log(i + 1);
      break;
    }
  }
}

let arr = [1, 2, 4, 5];
findMissing(arr);


// alternative approch using reduce
function findMissing1(arr) {
  let n = arr.length + 1; // because one number is missing
  let total = (n * (n + 1)) / 2; // accepted sum
  return total - arr.reduce((a, b) => a + b, 0);
}
console.log(findMissing1([1, 2, 3, 5])); // 4


