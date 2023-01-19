const Mumbling = (str) => {
  let newStr = "";
  for (const i in str) {
    newStr +=
      str[i].toUpperCase() +
      str[i].repeat(i) +
      (str.length - i == 1 ? "" : "-");
  }
  return newStr;
};
console.log(Mumbling("abcd"));
