// arr = [1,3,7,9,23, 4] o/p: false

function ifSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      console.log(false);
      return;
    }
  }
  console.log(true);
}

ifSorted([1, 3, 7, 9, 23, 4]);
