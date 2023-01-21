// const Tribonacci = (n) => {
//   if (n < 3) {
//     return n;
//   }
//   return Tribonacci(n - 1) + Tribonacci(n - 2) + Tribonacci(n - 3);
// };

// console.log(Tribonacci(7));

const Tribonacci = (n) => {
  const arr = [];
  let result = 0;
  let first = 0;
  let second = 1;
  let third = 2;
  arr.push(first, second, third);
  for (let i = 0; i < n - 2; i++) {
    result = first + second + third;
    first = second;
    second = third;
    third = result;
    arr.push(result);
  }
  return arr;
};
console.log(Tribonacci(7));
