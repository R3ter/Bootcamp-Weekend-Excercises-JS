const Fibonacci = (n) => {
  if (n < 2) {
    return n;
  }
  const a = Fibonacci(n - 1);
  const b = Fibonacci(n - 2);
  return a + b;
};

console.log(FibonacciArray(7));
console.log(arr);
