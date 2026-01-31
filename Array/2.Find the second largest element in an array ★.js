//arr = [3, 1, 9, 5, 2] // o/p: 5

function secondLeargest(arr) {
  let max = -Infinity,
    sMax = -Infinity;
  for (let val of arr) {
    if (val > max) {
      sMax = max;
      max = val;
    } else if (val < max && val > sMax) {
      sMax = val;
    }
  }
  console.log(sMax);
}

secondLeargest([3, 6, 9, 5, 2]);
