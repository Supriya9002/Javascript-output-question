const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let pair = [];

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] == 10) {
      pair.push([arr[i], arr[j]]);
    }
  }
}

console.log(pair);
