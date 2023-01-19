const isogram = (str) => {
  const obj = {};
  for (const i in str) {
    const char = str[i].toLowerCase();
    if (obj[char]) return false;
    obj[char] = true;
  }
  return true;
};

console.log(isogram("wals"));
