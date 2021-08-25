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

//refactored same-frequency
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