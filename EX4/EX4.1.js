// const cache = {};
// const Fibonacci = (n) => {
//   if (n < 2) {
//     return n;
//   }
//   const a = Fibonacci(n - 1) + Fibonacci(n - 2);
//   cache[a] = true;
//   return a;
// };

const Fibonacci = (n) => {
  const arr = [];
  let result = 0;
  let first = 0;
  let second = 1;
  arr.push(first, second);
  for (let i = 0; i < n - 1; i++) {
    result = first + second;
    first = second;
    second = result;
    arr.push(result);
  }
  return arr;
};
console.log(Fibonacci(7));
