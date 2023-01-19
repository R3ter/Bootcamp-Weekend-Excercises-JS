const toCamelCase = (str) => {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "_" || str[i] === "-") {
      newStr += str[i + 1].toUpperCase();
      i += 2;
    }
    if (str[i]) newStr += str[i];
  }
  return newStr;
};

console.log(toCamelCase("The_Stealth_Warrior"));
