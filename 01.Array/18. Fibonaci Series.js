// approch 1
const fibonaciSerise = (n) => {
  let result = [];
  if (n >= 0) result.push(0);
  if (n >= 1) result.push(1);
  for (let i = 2; i <= n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  console.log(result);
};

fibonaciSerise(3);

// approch 2
const printFibonacci = (n) => {
  let a = 0;
  let b = 1;
  if (n >= 1) console.log(a); // 0
  if (n >= 2) console.log(b); // 1
  for (let i = 3; i <= n; i++) {
    let next = a + b;
    console.log(next);
    a = b;
    b = next;
  }
};

printFibonacci(0);
