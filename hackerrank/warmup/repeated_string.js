'use strict';

function repeatedString(s, n) {
  let a = 0;
  const k = s.length;
  if (n >= k) {for (const letter of s) {
    if(letter === 'a') a++;
  }
  a *= Math.floor(n  / k);}
  for(let i = 0; i < n % k; i++) {
    if(s[i] === 'a') a++;
  }
  return a;
}


const s = 'aba';
const n = 10;


const s2 = 'aabbaaabaa';
const n2 = 101;

console.log(repeatedString(s, n));
//Expected Output: 7
console.log(repeatedString(s2, n2));

