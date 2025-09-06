function intersect(arr1, arr2) {
  let result = [];
  let used = new Array(arr2.length).fill(false); // track used elements in arr2
  console.log(used);
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j] && !used[j]) {
        result.push(arr1[i]);
        used[j] = true;
        break;
      }
    }
  }
  console.log(result);
  console.log(used)
}

let arr1 = [1, 2, 2, 3, 4];
let arr2 = [2, 2, 4, 6];
// output = [2, 2, 4]   // keep duplicates (LeetCode style)
intersect(arr1, arr2);
