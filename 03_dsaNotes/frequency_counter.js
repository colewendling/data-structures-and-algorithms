// Cole's solution:

// o(n) vs nested loop O(n^2)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let dummy = arr1.map(el => el * el);
  for (let i = 0; i < arr2.length; i++) {
    if (dummy[i] !== arr2[i]) return false;
  }
  return true;
}

const arr1 = [2, 3, 4];
const arr2 = [4, 9, 16];
const arr3 = [4, 9, 80];

console.log(same(arr1, arr2));
// #=> true
console.log(same(arr1, arr3));
// #=> false


//naive
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if (correctIndex === -1) {
      return false;
    }
    console.log(arr2);
    arr2.splice(correctIndex, 1)
  }
  return true;
}

same([1, 2, 3, 2], [9, 1, 4, 4])

//refactored 
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }
  return true
}

same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11])