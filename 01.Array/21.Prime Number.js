const isPrime = (num) => {
  if (num <= 1) {
    return "not prime";
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return "not prime";
    }
  }
  return "prime";
};

console.log(isPrime(17)); // true
console.log(isPrime(9)); // true
// ✅ Why i <= Math.sqrt(num)?
// Because you only need to check divisors up to the square root of num.
// If a number is divisible by any number greater than its square root,
// then it must also be divisible by a number less than the square root.
