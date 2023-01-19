const calculate = (operation, num1, num2) => {
  const result = {
    "+": () => num1 + num2,
    "-": () => num1 - num2,
    "*": () => num1 * num2,
    "/": () => num1 / num2,
  };
  return result[operation]();
};
console.log(calculate("+", 15, 12));
