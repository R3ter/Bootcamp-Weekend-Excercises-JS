const repeatStr = (n, str) => {
  if (n == 1) return str;
  return repeatStr(n - 1, str) + str;
};

console.log(repeatStr(6, "a"));
