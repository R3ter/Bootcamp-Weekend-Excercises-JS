const getUnique = (arr) => {
  let lastVal = arr[0];
  for (let i in arr) if (arr[i] !== lastVal) return arr[i];
};
console.log(getUnique([0, 0, 0.55, 0, 0]));
