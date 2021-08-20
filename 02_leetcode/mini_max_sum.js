function miniMaxSum(arr) {
  const sorted = arr.sort(function (a, b) {
    return a - b;
  });
  let min = 0;
  let max = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    min += sorted[i];
  }
  for (let i = 1; i < arr.length; i++) {
    max += sorted[i];
  }

  console.log(`${min} ${max}`);
  // console.log(max);

}

// const arr = [1, 2, 3, 4, 5];
// const arr1 = [7, 69, 2, 221, 8974];
// console.log(miniMaxSum(arr));
// console.log(miniMaxSum(arr1));
//Output arr: 10 14
//Output arr1: 299 9271