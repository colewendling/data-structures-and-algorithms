'use strict';

// 1. short fizzbuzz.
const fizzBuzz = function (n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 == 0) console.log('FizzBuzz');
    else if (i % 3 == 0) console.log('Fizz');
    else if (i % 5 == 0) console.log('Buzz');
    else console.log(i);
  }
}
// console.log(fizzBuzz(15));

// 2. leetcode - scoresArr -> ranks -> # of players pass cutoff rank.

function numPlayers(k, scores) {
  const sortedScores = scores.sort(function (a, b) {
    return a - b;
  });
  const ranks = [];

  for (let i = 0; i < sortedScores.length; i++) {
    const j = sortedScores.indexOf(sortedScores[i])
    ranks.push(j + 1);
  }

  const result = ranks.filter((rank) => rank <= k);
  return result.length;
}
// console.log(numPlayers(3, [100, 50, 50, 25]));

// 3. leetcode Throtteling Gateway Problem.

function droppedRequests(requestTime) {
  let count = 0;
  for (let i = 1; i < requestTime.length; i++) {
    if (i > 2 && requestTime[i] == requestTime[i - 3]) {
      count += 1;
    } else if (i > 19 && (requestTime[i] - requestTime[i - 20]) < 10) {
      count += 1;
    } else if (i > 59 && (requestTime[i] - requestTime[i - 60]) < 60) {
      count += 1;
    }
  }
  return count;
}

// const reqTime = [1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7]
// console.log(reqTime.length);
// console.log(droppedRequests(reqTime));



