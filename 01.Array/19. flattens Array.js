const arr = [1, [2, 3], [4, [5, 6]], 7, [8, 9]];

function flattonArray(arr, newArray = []) {
  if (arr.length === 0) return;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattonArray(arr[i], newArray);
    } else {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

console.log(flattonArray(arr, []));
