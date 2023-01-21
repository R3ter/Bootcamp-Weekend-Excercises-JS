// const shortestWords = (arr) => {
//   arr = arr.split(" ");
//   let longest = arr[0].length;
//   let longestStr = arr[0];
//   for (const i in arr) {
//     if (longest < arr[i].length) {
//       longest = arr[i].length;
//       longestStr = arr[i];
//     }
//   }
//   return longestStr;
// };

const shortestWords = (arr) => {
  let str = "";
  let length = 0;
  let longest = 0;
  for (const i in arr) {
    if (arr[i] !== " ") {
      length++;
      if (length > longest) {
        longest = length;
        str = arr.substring(longest - 1 - i, i) + arr[i];
      }
    } else if (arr[i] === " ") {
      length = 0;
    }
  }
  return str;
};

console.log(shortestWords("awdawasasasasd asdadasaw sa"));
