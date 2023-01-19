const findNextSquare = (num) => {
  if (Math.sqrt(num) % 1 !== 0) return -1;
  return (Math.sqrt(num) + 1) * (Math.sqrt(num) + 1);
};

console.log(findNextSquare(114));
