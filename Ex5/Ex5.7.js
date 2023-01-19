const shortestWords = (arr) => {
  let shortest = arr[0].length;
  for (const i in arr) {
    shortest = Math.min(shortest, arr[i].length);
  }
  return shortest;
};

console.log(shortestWords(["awdawd", "asdadw", "sa"]));
