const numbers = [1, 2, 3, 4, 5, 6, 2, 8, 7, 8, -8, 19, 9, 10];
let even_number = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0 && even_number.indexOf(numbers[i]) === -1 && numbers[i]>=0) {
    even_number.push(numbers[i]);
  }
}

console.log(even_number);
