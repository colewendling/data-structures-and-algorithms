'use strict';
/*
 I: sorted Array
 Bonus I: unsorted Array

 stat: hash map / count keys - 2 pointers
*/


function countUniqueValues(array) {
  let count = {};

  for (let i in array) {
    let el = array[i];
    count[el] ? count[el]++ : count[el] = 1;
  }

  return Object.keys(count).length;
}

// 2 pointer / switch i val to rm duplicates/ return length
//only works with sorted array
//O(n) time
function countUniqueValues2(array) {
  if (array.length === 0) return 0;
  let i = 0
  for (let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      i++;
      array[i] = arr[j];
    }
  }
  return i + 1;
}


countUniqueValues([]); // #=> 0
// countUniqueValues([1,1,1,1,1,1,2]); // #=> 2
// countUniqueValues([1,4,4,4,3,1,1,1,2]); // #=> 4
