// arr = [1, 5, 5, 8, 9, 10, 10]

// Approch 1
function removeDuplicate(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 1);
    }
  }
  console.log(arr);
}

removeDuplicate([1, 5, 5, 8, 9, 10, 10]);

// Approch 2
function removeDuplicate2(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let duplicate = false;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        duplicate = true;
        break;
      }
    }
    if (!duplicate) {
      result.push(arr[i]);
    }
  }
  console.log(result);
}
removeDuplicate2([2, 3, 4, 5, 6, 2, 3]);

// Approch 3
function removeDuplicate3(arr) {
  let newArr = [];
  let duplicate = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    } else {
      duplicate.push(arr[i]);
    }
  }
  console.log(newArr);
  console.log("duplicate", duplicate);
}
removeDuplicate3([1, 2, 2, 3, 4, 4, 5, 6, 7, 7, 8]);
