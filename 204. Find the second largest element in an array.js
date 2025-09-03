let arr = [1, 2, 8, 8, 7];
let max = -Infinity;
let secMax = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    secMax = max;
    max = arr[i];
  } else if (arr[i] > secMax && max > arr[i]) {
    secMax = arr[i];
  }
}

console.log(secMax);

// alternative approch
let arr1 = [1, 2, 8, 8, 7];
let max1 = Math.max(...arr1)
let secMax1 = Math.max(...arr1.filter(n=> n!=max1))
console.log(secMax1)

// alternative approch
let uniqueSorted  = [...new Set(arr1)].sort((a, b)=> b-a)
console.log("Second Leargest",uniqueSorted[1])