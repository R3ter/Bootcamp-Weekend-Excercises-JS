const Abbreviate = (str) => {
  const arr = str.split(" ");
  return arr[0][0].toUpperCase() + "." + arr[1][0].toUpperCase();
};
console.log(Abbreviate("Sam Harris"));
