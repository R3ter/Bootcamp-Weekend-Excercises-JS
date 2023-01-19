const organizeString = (str1, str2) => {
  const obj = {};
  let newStr = "";
  for (const i in str1) {
    obj[str1[i]] = true;
  }
  for (const i in str2) {
    obj[str2[i]] = true;
  }
  const sorted = Object.keys(obj).sort();
  for (let i in sorted) {
    newStr += sorted[i];
  }
  return newStr;
};
console.log(organizeString("wadawdwad", "asdwad"));
