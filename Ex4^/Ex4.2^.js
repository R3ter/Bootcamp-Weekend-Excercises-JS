const Tribonacci = (n) => {
  if (n < 3) {
    return n;
  }
  return Tribonacci(n - 1) + Tribonacci(n - 2) + Tribonacci(n - 3);
};

console.log(Tribonacci(7));
