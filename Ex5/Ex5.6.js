const mask = (str) => {
  return (
    "#".repeat(str.length > 4 ? str.length - 4 : 0) +
    str.substring(str.length - 4, str.length)
  );
};
console.log(mask("4556364607935616"));
