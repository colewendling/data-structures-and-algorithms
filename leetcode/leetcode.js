'use strict';

// 1. short fizzbuzz
const fizzBuzz = function (n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 == 0) console.log('FizzBuzz');
    else if (i % 3 == 0) console.log('Fizz');
    else if (i % 5 == 0) console.log('Buzz');
    else console.log(i);
  }
}

// 2. scoresArr -> ranks -> # of players pass cutoff rank

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
