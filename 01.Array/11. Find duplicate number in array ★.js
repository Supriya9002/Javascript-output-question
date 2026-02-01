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

// Another Approch
const findDuplicate = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        // check if it's already added
        let alreadyAdded = false;
        for (let k = 0; k < result.length; k++) {
          if (result[k] === arr[i]) {
            alreadyAdded = true;
            break;
          }
        }
        if (!alreadyAdded) {
          result.push(arr[i]);
        }
        break; // move to next i
      }
    }
  }
  console.log(result);
};

const arr = [3, 7, 1, 9, 7, 3, 2, 3, 8, 9, 9];
findDuplicate(arr);
