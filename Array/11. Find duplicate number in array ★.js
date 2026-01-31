function findDuplicate3(arr) {
  let newArr = [];
  let duplicate = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    } else {
      duplicate.push(arr[i]);
    }
  }
  console.log("duplicate", duplicate);
}
findDuplicate3([1, 2, 2, 3, 4, 4, 5, 6, 7, 7, 8]);
