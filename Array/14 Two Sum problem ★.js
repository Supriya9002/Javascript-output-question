const TowSum = (arr, target) => {
  let mapArr = new Map();
  for (let i = 0; i < arr.length; i++) {
    let store = target - arr[i];
    mapArr.set(store, i);
    if (mapArr.has(arr[i])) {
      return [mapArr.get(arr[i]), i];
    }
  }
};

console.log(TowSum([1, 2, 4, 7], 9));
