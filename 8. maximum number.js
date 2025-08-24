const findMax = (arr) => {
  if (arr.length === 0) {
    return undefined;
  }
  // let max = arr[0];
  // let min = arr[0];
  //or
  let max = -Infinity;
  let min = +Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  return { max: max, min: min };
};

// Example usage:
const numbers = [1, 6, -33, 9, 4, 8, 2];
console.log("Maximum number is:", findMax(numbers));
