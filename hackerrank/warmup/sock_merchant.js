'use strict';
// There is a large pile of socks that must be paired by color.Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

//   Example
// n = 7
// ar = [1, 2, 1, 2, 1, 3, 2]

// There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color.The number of pairs is 2.

function sockMerchant(n, ar) {
  const sets = {};
  let count = 0;
  ar.forEach(num => {
    if (!sets[num]) sets[num] = true;
    else {
        delete sets[num];
        count ++;
    }
  });
  return count;
};

const n = 7;
const ar = [1, 2, 1, 2, 1, 3, 2];
const ar2 = [2, 2, 3, 3, 1, 1, 6, 6, 1, 1];



console.log(sockMerchant(n, ar)); // Expected Output: 2
console.log(sockMerchant(n, ar2)); // Expected Output: 5