const findLargestElement = (array) => {
  let max = Number.NEGATIVE_INFINITY;
  // console.log(max)
  const findMax = (arr) => {
    for (let item of arr) {
      console.log(item);
      if(Array.from(item)){
        findMax(item)
      }else{
        if(item > max){ dgewgw
          max = item;
        }
      }
    } if
  };
  findMax(array)
  return max;
};

const array = [
  [3, 4, 58],
  [709, 8, 9, [900, 11]],
  [111, 2],
];
console.log("Largest element:", findLargestElement(array));
