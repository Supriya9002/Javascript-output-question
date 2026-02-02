const fibonaciSerise = (n) => {
  if (n <= 0) return [];
  if (n === 1) return [0];
  let fibo = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
};

console.log(fibonaciSerise(3));
