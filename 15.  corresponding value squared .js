// Create a function which will accepts two arrays arr1 and
// arr2. The function should return true if every value in arr1 has
// its corresponding value squared in array2. The frequency of
// values must be same.(Effecient)

// Inputs and outputs:
// =============
// [1,2,3],[4,1,9] ==> true
// [1,2,3],[1,9] ====> false
// [1,2,1],[4,4,1] ===> false (must be same frequency)

// O(n2)
const isSameFrequency = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let element = arr1[i] * arr1[i];
    let match = false;
    for (let j = 0; j < arr2.length; j++) {
      if (element === arr2[j]) {
        arr2[j] = undefined;
        match = true;
        break;
      }
      if (!match) {
        return false;
      }
    }
  }
  return true;
};

console.log(isSameFrequency([1, 2, 5], [25, 4, 1]));
