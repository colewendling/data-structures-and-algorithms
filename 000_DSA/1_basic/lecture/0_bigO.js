function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

//faster 
function addUpTo(n) {
  return n * (n + 1) / 2;
}

var time1 = performance.now();
addUpTo(1000000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)

// Additional Lecture Notes:

//Generate Random #

let oneToFive = Math.floor(Math.random() * 5) + 1;
// Result => {1: 35, 2: 52, 3: 44, 4: 39, 5: 31}

//Hash Map counter
const counter = arr => {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] ? map[arr[i]]++ : map[arr[i]] = 1;
  }
  return map;
};

//String capitalize formatting
let capitalized = test[0].toUpperCase() + test.slice(1, test.length).toLowerCase();
