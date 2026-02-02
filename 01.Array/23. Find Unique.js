const arr = [1, 1, 2, 3, 3, 4]; //o/p: [2,4]

const findUnique = (arr) => {
  let uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) count++;
    }
    if (count === 1) uniqueArray.push(arr[i]);
  }
  console.log(uniqueArray);
};
findUnique(arr);
