const findFactorial = (num) => {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  console.log(fact)
};

const n = 4;
findFactorial(n);
