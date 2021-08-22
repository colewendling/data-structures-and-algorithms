function birthdayCakeCandles(candles) {
  let sorted = arr.sort(function (a, b) {
    return a - b;
  });
  sorted = sorted.reverse();
  // console.log(sorted);
  let count = 0;
  let current = 0;
  for (let i = 0; i < arr.length; i++) {
    if (current === 0) {
      current = sorted[i];
      count += 1;
    } else if (current === sorted[i]) {
      count += 1;
    } else {
      return count;
    }
  }
}

// const arr = [3, 2, 1, 3];
// const arr1 = new Array(1000).fill(1);
// console.log(birthdayCakeCandles(arr));
// console.log(birthdayCakeCandles(arr1));

