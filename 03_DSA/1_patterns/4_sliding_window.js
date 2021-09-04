/*
  func longest seq of unique chars
  max sum problem

  arr, n = max sum of n conseq nums

*/

// Naive O(N^2) quadratic
const maxSubarraySum1 = function (arr, n) {
  if (n > arr.length) return null; //edge case
  let max = -Infinity;
  for (let i = 0; i < arr.length - n + 1; i++) {
    let temp = 0;
    for (let j = 0; j < n; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
};

// Refactored O(N) Linear time complexity
// - first + last
function maxSubarraySum2(arr, n) {
  if (arr.length < n) return null;
  let max = 0;
  let temp = 0;

  for (let i = 0; i < n; i++) {
    max += arr[i];
  }

  t = max;

  for (let i = n; i < arr.length; i++) {
    t = t - arr[i - n] + arr[i];
    max = Math.max(max, t);
  }

  return max;

}

maxSubarraySum2([1, 2, 5, 3, 8, 1, 5], 4); // 17
maxSubarraySum2([4, 2, 1, 6, 2], 4); // 13
// maxSubarraySum2([], 4); // null












