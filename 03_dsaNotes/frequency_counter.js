// Time complexity: o(n) vs nested loop O(n^2)

//naive same-frequency
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let indexInArr2 = arr2.indexOf(arr1[i] ** 2)
    if (indexInArr2 === -1) { // returns -1 if there is no el in arr2
      return false;
    }
    console.log(arr2);
    arr2.splice(correctIndex, 1); //remove the el from arr2
  }
  return true;
}

same([1, 2, 3, 2], [9, 1, 4, 4])

//refactored same-frequency - O(n) time complexity - 2 loops better than nested
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

//Refactored O(n) time complexity

// I: arr = [2, 4, 6]
// I: arr2 = [36, 4, 16]
// O: true

function frequencyCounter(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let c1 = {};
  let c2 = {};
  for (let n of arr1) c1[n] ? c1[n]++ : c1[n] = 1;
  for (let n of arr2) c2[n] ? c2[n]++ : c2[n] = 1;

  for (let key in c1) {
    if (!(key ** 2 in c2)) return false;
    if (c2[key ** 2] !== c1[key]) return false;
  }

  return true;
}

const arr1 = [2, 4, 6];
const arr2 = [36, 4, 16];
frequencyCounter(arr1, arr2);