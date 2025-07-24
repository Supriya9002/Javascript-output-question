const sortedData = (arr1, arr2) => {
  let marge = [];
  let i = 0,
    j = 0,
    k = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      marge[k] = arr1[i];
      i++, k++;
    } else {
      marge[k] = arr2[j];
      j++, k++;
    }
  }

  while (i < arr1.length) {
    marge[k] = arr1[i];
    i++, k++;
  }
  while (j < arr2.length) {
    marge[k] = arr2[j];
    j++, k++;
  }
  console.log(marge);
};

sortedData([1, 3, 4, 50], [2, 6, 8, 9]);

// another way
const another_sortedData = (arr1, arr2) => {
  let i = 1;
  let j = 1;
  let array1 = arr1[0];
  let array2 = arr2[0];

  let mergedArray = [];

  while (array1 || array2) {
    if (array2 === undefined || array1 < array2) {
      mergedArray.push(array1);
      array1 = arr1[i];
      i++;
    } else {
      mergedArray.push(array2);
      array2 = arr2[j];
      j++;
    }
  }
  console.log(mergedArray);
};
another_sortedData([1, 3, 4, 5], [2, 6, 8, 9]);
