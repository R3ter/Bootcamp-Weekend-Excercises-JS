const filter = (arr, callBack) => {
  const newArr = [];
  for (const i in arr) {
    if (callBack(arr[i], i)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

console.log("\n\nfilter method______________");
const filterArr = [1, 2, 3, 4, 5, 6, 7];
console.log(filter(filterArr, (element) => element > 3));

const forEach = (arr, callBack) => {
  for (const i in arr) {
    callBack(arr[i], i);
  }
};

console.log("\n\nforEach method______________");

const forEachArr = [1, 2, 3, 4, 5, 6, 7];
forEach(forEachArr, (element) => {
  console.log(element);
});

const map = (arr, callBack) => {
  const newArr = arr;
  for (const i in arr) {
    newArr[i] = callBack(arr[i], i);
  }
  return newArr;
};

console.log("\n\nmap method______________");

const mapArr = [1, 2, 3, 4, 5, 6, 7];
console.log(map(mapArr, (element) => element + 1));

//-----------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------

Array.prototype.map = function (callBack = (e) => e) {
  const arr = [];
  for (let i in this) {
    arr.push(callBack(this[i], i));
  }
  return arr;
};
Array.prototype.forEach = function (callBack = (e) => e) {
  for (let i in this) {
    arr.push(callBack(this[i], i));
  }
};

Array.prototype.filter = function (callBack = (e) => e) {
  for (let i in this) {
    const arr = [];
    for (let i in this) {
      if (callBack(this[i], i)) {
        arr.push(this[i]);
      }
    }
    return arr;
  }
};
