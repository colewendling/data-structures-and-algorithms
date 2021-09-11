function isValidSubsequence(array, sequence) {
  let i1 = 0;
  let i2 = 0;
  while (i1 < array.length && i2 < sequence.length) {
    if (array[i1] === sequence[i2]) i2++;
    i1++;
  }
  return i2 === sequence.length;
}