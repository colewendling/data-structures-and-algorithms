// fibonacci(4) // 3
// fibonacci(10) // 55
// fibonacci(28) // 317811
// fibonacci(35) // 9227465

// Intro Seq. => [1, 1, 2, 3, 5, 8, 13, 21 ...]
// Time Complexity: recursive-fibonacci's complexity is O(2^n).

function fibonacci(n) {
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(4));
console.log(fibonacci(10));
console.log(fibonacci(28));
console.log(fibonacci(35));