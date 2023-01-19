const sumOfLowest = (arr) => {
  let min1 = Infinity;
  let min2;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min1) {
      min2 = min1;
      min1 = arr[i];
    } else if (arr[i] < min2) {
      min2 = arr[i];
    }
  }
  return min1 + min2;
};
console.log(sumOfLowest([19, 5, 42, 2, 77]));
