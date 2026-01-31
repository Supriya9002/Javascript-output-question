const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];


function sumOfArray(arr) {
  return arr.reduce((pre, cur) => {
    return pre + cur;
  });
}

console.log(sumOfArray(arr));
