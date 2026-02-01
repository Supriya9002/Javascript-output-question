//arr = [3, 1, 9, 5, 2] // o/p: [2,5,9,1,3]

function reverse(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  console.log(arr);
}

reverse([3, 1, 9, 5, 2]);
