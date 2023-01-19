const PeopleOnTheBus = (arr) => {
  let totalPpl = 0;
  for (let i in arr) {
    const busStop = arr[i];
    totalPpl += busStop[0];
    totalPpl -= busStop[1];
    if (totalPpl < 0) totalPpl = 0;
  }
  return totalPpl;
};
console.log(
  PeopleOnTheBus([
    [2, 1],
    [10, 2],
    [30, 30],
  ])
);
