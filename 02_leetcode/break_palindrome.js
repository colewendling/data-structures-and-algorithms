function breakPalindrome(palindromeStr) {
  if (palindromeStr.length === 0) return 'IMPOSSIBLE';
  let chars = palindromeStr.split('');
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] !== 'a') {
      if (palindromeStr.length % 2 !== 0 && i === palindromeStr.length / 2) {
        continue;
      }
      chars[i] = 'a';
      break;
    }
    if (i == chars.length - 1) {
      chars[i] = 'b';
    }
  }
  return chars.join('');
}

// console.log(breakPalindrome('bab'));
// Expected Output: 'aab';