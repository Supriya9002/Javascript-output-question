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

printFibonacci(3);
