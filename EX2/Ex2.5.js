let Summation = (n) => {
  if (!n) return 0;
  return Summation(n - 1) + n;
};

console.log(Summation(10));
