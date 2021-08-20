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
