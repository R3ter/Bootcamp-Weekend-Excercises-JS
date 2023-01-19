const countDuplicate = (str) => {
  const obj = {};
  let count = 0;
  for (const i in str) {
    const char = str[i].toLowerCase();
    if (!obj[char]) obj[char] = 0;
    obj[char]++;
    if (obj[char] === 2) count++;
  }
  return count;
};
console.log(countDuplicate("indivisibility"));
