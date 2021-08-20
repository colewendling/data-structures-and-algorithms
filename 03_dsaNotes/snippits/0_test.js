let var1 = Math.floor(Math.random() * 5);
// Result => {0: 28, 1: 30, 2: 40, 3: 55, 4: 48}
let var2 = Math.floor(Math.random() * 5) + 1;
// Result => {1: 35, 2: 52, 3: 44, 4: 39, 5: 31}

let arr1 = [];
let arr2 = [];

for (i = 0; i <= 200; i++) {
  let var1 = Math.floor(Math.random() * 5);
  let var2 = Math.floor(Math.random() * 5) + 1;
  arr1.push(var1);
  arr2.push(var2);
}

const counter = arr => {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] ? map[arr[i]]++ : map[arr[i]] = 1;
  }
  return map;
}

// console.log(counter(arr1));
// console.log(counter(arr2));
// console.log(var3);
// console.log(var4);
// console.log(var5);

let test = 'uNcApiTaLiZeD';
let capitalized = test[0].toUpperCase() + test.slice(1, test.length).toLowerCase();
// console.log(capitalized);
// #=> Capitalized

let person = {
  name: 'cole',
  age: 26
};


let nums = [1, 2, 3, 4, 5];
let nums1 = [5, 6, 65, 200, 1, 7];