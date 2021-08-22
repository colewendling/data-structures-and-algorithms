/*
  divide-and-conquer
  quick sort / merge sort / binary search
  large arr - divide into smaller chunks
  harvard phone book example
*/

// Binary Search Log(N) Time Complexity:

function search(arr, n) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    let el = arr[mid];
    if (arr[mid] < n) {
      min = mid + 1;
    } else if (arr[mid] > n) {
      max = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 10); //#=> 9


