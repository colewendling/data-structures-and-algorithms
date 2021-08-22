// return first pair === 0

// Naive Solution
// Time Complexity: O(N^2)
// Space Complexity: O(1)
function sumZero1(a) {
  for (let i = 0; i < a.length; i++) {
    for (let j = 1; j < a.length; j++) {
      if (a[i] + a[j] === 0) {
        return [a[i], a[j]];
      }
    }
  }
}

const arr = [-4, -3, -2, -1, 0, 1, 2, 5];
// console.log(sumZero(arr));

// Refactored Solution
// Time Complexity: O(N)
// Space Complexity: O(1)
function sumZero2(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

const arr2 = [-4, -3, -2, -1, 0, 1, 2, 5];
console.log(sumZero2(arr2));