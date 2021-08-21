// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange(max) {
  if (max === 0) return 0;
  return max + recursiveRange(max - 1);
}

console.log(recursiveRange(6));
console.log(recursiveRange(10));