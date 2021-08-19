function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const count = {};
  for (let c in str1) count[str1[c]] ? count[str1[c]]++ : count[str1[c]] = 1;
  for (let i = 0; i < str2.length; i++) {
    let c = str2[i];
    if (!count[c]) {
      return false;
    } else {
      count[c] -= 1;
    }
  }
  
  return true;
}

console.log(validAnagram('anagram', 'nagamar')); // #=> true