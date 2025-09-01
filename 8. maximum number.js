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
const numbers = [2, 8, 5, 1, 10, 3]
console.log("Maximum number is:", findMax(numbers));

console.log("Alternative APPROCH")
console.log("Maximum",Math.max(...numbers))
console.log("Maximum",Math.max([1,2,3]))