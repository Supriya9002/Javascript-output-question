function mergeSortedArrays(arr1, arr2) {
  let mergeArray = [],
    i = 0,
    j = 0,
    k = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] >= arr2[j]) {
      mergeArray[k] = arr2[j];
      k++, j++;
    } else {
      mergeArray[k] = arr1[i];
      k++, i++;
    }
  }
  while (i < arr1.length) {
    mergeArray[k] = arr1[i];
    k++, i++;
  }
  while (j < arr2.length) {
    mergeArray[k] = arr2[j];
    k++, j++;
  }
  console.log("mergeArray", mergeArray);
}

const arr1 = [1, 3, 5, 6];
const arr2 = [2, 4, 7, 8, 10];
mergeSortedArrays(arr1, arr2);

//output = [1, 2, 3, 4, 5, 6, 7, 8, 10]

// Alternative approch
let alterMerge = [...arr1, ...arr2];
console.log(alterMerge.sort((a, b) => a - b));
