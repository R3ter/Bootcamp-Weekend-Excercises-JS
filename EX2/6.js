const getCentury = (year) => {
  if (year <= 100) return 1;
  return Math.floor(year / 100) + (year % 100 >= 1 ? 1 : 0);
};
console.log(getCentury(1601));
