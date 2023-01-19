const growthOfPopulation = (p0, percent, aug, p) => {
  let years = 0;
  while (true) {
    p0 += p0 * (percent / 100) + aug;
    years++;
    if (p0 >= p) return years;
  }
};
console.log(growthOfPopulation(1500000, 2.5, 10000, 2000000));
