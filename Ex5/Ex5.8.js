const shortestWords = (arr) => {
  let longest = arr[0].length;
  for (const i in arr) {
    longest = Math.max(longest, arr[i].length);
  }
  return longest;
};

console.log(shortestWords(["awdawasasasasd", "asdadasaw", "sa"]));
