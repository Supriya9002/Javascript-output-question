const findLargestElement = (array) => {
  let max = Number.NEGATIVE_INFINITY;
  // console.log(max)
  const findMax = (arr) => {
    for (let item of arr) {
      // console.log(item);
      if(Array.isArray(item)){
        findMax(item)
      }else{
        if(item > max){
          max = item;
        }
      }
    }
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
