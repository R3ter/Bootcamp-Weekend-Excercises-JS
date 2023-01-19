const convertArrToDecimal = (arr) => {
  let i = 0;
  return arr.reduce(
    (prev, curr) => curr * prev + Math.pow(2, arr.length - 1 - i++)
  );
};

console.log(convertArrToDecimal([1, 1, 1, 1]));
