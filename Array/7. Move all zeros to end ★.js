let arr = [1, 5, 0, 8, 0, 0, 6, 0, 9];

function moveAllZeroToEnd(arr) {
  let k = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      arr[k] = arr[i];
      k++;
    }
  }
  for (let i = k; i < arr.length; i++) {
    arr[i] = 0;
  }
  console.log(arr);
}

moveAllZeroToEnd(arr);
