function subarraySum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum = sum + arr[j];
      if (sum > target) break; // optional 
      if (sum === target) {
        return { i, j };
      }
    }
  }
  return {};
}

let arr = [1, 4, 20, 3, 10, 5];
let target = 33;
//Subarray found from index 2 to 4 → [20, 3, 10]
// 👉 [0, 3]  (subarray = [10, 2, -2, -20])

console.log(subarraySum(arr, target));
