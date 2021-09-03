'use strict';


function jumpingOnClouds(cloudsArr) {
  let stepsArr = [];
  let i = 0;
  while (i < cloudsArr.length - 1) {
    if ((i + 2 < cloudsArr.length) && (cloudsArr[i + 2] === 0)) {
      stepsArr.push(cloudsArr[i + 2]);
      i += 2;
    } else {
      stepsArr.push(cloudsArr[i + 1]);
      i += 1;
    }
  }
  return stepsArr.length;
}



//    i = [0, 1, 2, 3, 4, 5, 6];
const c = [0, 1, 0, 0, 0, 1, 0];
// 0 = safe | 1 = unsafe
//output: 3 (min-number of jumps)
// jumps can mbe i+1 || i+2

console.log(jumpingOnClouds(c));
