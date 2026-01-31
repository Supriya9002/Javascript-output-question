//Find the largest element in an array ★
//arr = [3, 5, 1, 9, 2] // o/p: 9

const largest = (arr) => {
  let max = -Infinity;
  for (let val of arr) {
    if (val > max) {
      max = val;
    }
  }
  console.log(max);
};
largest([3, 5, 1, 9, 2]);
