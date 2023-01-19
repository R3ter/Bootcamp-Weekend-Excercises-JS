const toWeirdCase = (str) => {
  let newStr = "";
  str.split(" ").forEach((str1) => {
    for (s in str1) {
      newStr += s % 2 == 0 ? str1[s].toUpperCase() : str1[s].toLowerCase();
    }
    newStr += " ";
  });
  return newStr.substring(0, newStr.length - 1);
};
console.log(toWeirdCase("Weird string case"));
