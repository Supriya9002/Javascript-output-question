function missingNumber(arr, n) {
  let sumOfTotalNumber = (n * (n + 1)) / 2;
  let currentArraySum = 0;
  for (let i = 0; i < arr.length; i++) {
    currentArraySum += arr[i];
  }
  console.log(sumOfTotalNumber - currentArraySum);
}

missingNumber([1, 2, 4, 5, 6], 6);
