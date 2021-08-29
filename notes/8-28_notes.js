"use strict";

// console.log('hello word');

//map


const kittenDoubler = (kittenCounts) => {
  return kittenCounts.map(count => count * 2);
};

function kittenCreator(cats, kittenCount) {
  const returnArr = cats.map(cat => cat.toLowerCase());
  const capedCats = returnArr.map(cat => cat.charAt(0).toUpperCase() + cat.slice(1))


  const families = [];

  capedCats.map((cat, index) => {
    let key = cat;
    let obj = {};
    obj[key] = fillArray(cat, kittenCount[index]);
    families.push(obj);
  });
  return families;
};

function fillArray(value, len) {

  if (len == 0) return [];
  var a = [value + 's Kitten'];
  while (a.length * 2 <= len) a = a.concat(a);
  if (a.length < len) a = a.concat(a.slice(0, len - a.length));
  return a;
}

const cats = ['toBy', 'hiNes', 'BarnEs'];
const kittens = [1, 2, 3];
const kittenCount = kittenDoubler(kittens);

// console.log(kittenCreator(cats, kittenCount));

//filter

const friends = ['cole', 'john', 'alex', 'cassandra'];
const ans = friends.filter((word) => word.length > 6);
// console.log(ans);

/* forEach
1. map returns a new array - forEach does not
2. you can do method chaining in map but not in forEach
Note: map and forEach don't mutate (change) the original array.
Note: you would never return from a forEach function as the return values are simply discarded.

forEach() may be preferable when you’re not trying to change the data in your array, but instead want to just do something with it — like saving it to a database or logging it out

map() might be preferable when changing or altering data. Not only is it faster but it returns a new Array. This means we can do cool things like chaining on other methods ( map(), filter(), reduce(), etc.

Just about anything you can do with forEach() you can do with map(), and vise versa.

map() allocates memory and stores return values. forEach() throws away return values and always returns undefined.

forEach() will allow a callback function to mutate the current array. map() will instead return a new array.

*/

const vegetables = ['carrots', 'cucumbers'];

const pickels = vegetables.map(vegetable => 'pickeled ' + vegetable);
// console.log(pickels);


//reduce

const nums = [1, 2, 3, 4, 5, 6, 700, 8, 9, 10];

function total(nums) {
  return nums.reduce((accum, currentNum) => accum += currentNum);
};

// console.log(total(nums));

// console.log(nums.includes(9));

const ansArr = [];

function dogGenerator(nums) {
  let ansArr = [];
  for (let i = 0; i < nums.length; i++) {
    let arr = new Array(nums[i]).fill('dog');
    ansArr.push(arr);
  }
  // ansArr.flat();
  let flattened = ansArr.reduce((acc, curVal) => {
    return acc.concat(curVal)
  }, []);

  const ans1 = flattened.map(el => 'Golden ' + el.charAt(0).toUpperCase() + el.slice(1));

  return ans1;
};

// console.log(dogGenerator(nums));



function consoleMessage(arr) {
  return `There are ${arr.length} ${arr[0]}s.`
};

console.log(consoleMessage(dogGenerator(nums)));




