//10. Find missing number in array (1 to N) ★

function findMissingNumber(arr, n) {
  let sumOfNumber = (n * (n + 1)) / 2;
  let sumOfArray = 0;
  for (let val of arr) {
    sumOfArray += val;
  }
  return sumOfNumber - sumOfArray;
}

// Test Case
const arr = [1, 2, 3, 5];
const N = 5;

console.log(findMissingNumber(arr, N)); // Output: 4
