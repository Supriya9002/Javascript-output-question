function kRotet(arr, k) {
  let result = [],
    m = 0;
  let n = arr.length;

  k = k % n; // handle k > n

  for (let i = k; i < n; i++) {
    result[m++] = arr[i];
  }
  for (let i = 0; i < k; i++) {
    result[m++] = arr[i];
  }
  console.log(result);
}

let arr = [1, 2, 3, 4, 5, 6, 7];
k = 3;
kRotet(arr, k); // [5, 6, 7, 1, 2, 3, 4]

// alternative approch
let arr10 = [1, 2, 3, 4, 5, 6, 7];
function kRotet2(arr10, k) {
  k = k % arr10.length;
  let firstPart = arr10.slice(0, -k); // or, (arr.length - k)
  let lastPart = arr10.slice(-k);
  console.log([...lastPart, ...firstPart]);
}
kRotet2(arr10, 11);

// alternative splice and unshift
let p = 10;
let arr3 = [1, 2, 3, 4, 5, 6, 7]; // length = 7
p = p % arr3.length; // 10%7=3
let lastPart = arr3.splice(-p) // 5,6,7
let rotetArray = arr3.unshift(...lastPart)
console.log(rotetArray)
// console.log(p, lastPart, rotetArray)
