const findMinMax = (arr) => {
  let max = -Infinity;
  let min = +Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (min > arr[i]) {
      min = arr[i];
    }
  }
  return { max, min };
}

const arr = [3, 7, 1, 9, 2];
console.log(findMinMax(arr));

// in build function
const Larr = [3, 7, 1, 9, 2];
const Lmax = Math.max(...arr);
const Lmin = Math.min(...arr);
console.log(Lmax, Lmin);
