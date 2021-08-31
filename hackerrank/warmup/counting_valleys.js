'use strict';

function countingValleys(steps, path) {
  let elevation = 0;
  let valleyCount = 0;
  for (let i = 0; i < steps; i++) {
    if (path[i] == 'D') { // 'D' 
      elevation--;
    } 
    else { // 'U'
      if (elevation == -1) {
        valleyCount++;
      }
      elevation++;
    }
  }
  return valleyCount;
}


const steps = 8;
const path = 'UDDDUDUU';
// Return # of valleys transversed
// Expected Output: 1 

const steps2 = 14;
const path2 = 'DUDUDUDUDUDUDU';
// Return # of valleys transversed
// Expected Output: 7 


console.log(countingValleys(steps, path));
console.log(countingValleys(steps2, path2));
