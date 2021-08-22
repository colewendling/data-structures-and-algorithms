function countTeams(skills, minPlayers, minLevel, maxLevel) {
  const sortedSkills = skills.filter(skill => skill <= maxLevel && skill >= minLevel);
  return combinations(sortedSkills).filter(subArray => subArray.length >= minPlayers).length;
}

function combinations(array) {
  return new Array(1 << array.length).fill().map(
    (e1, i) => array.filter((e2, j) => i & 1 << j));
}

// const skills = [12, 4, 6, 13, 5, 10];
// const minPlayers = 3;
// const minLevel = 4;
// const maxLevel = 10;
// console.log(countTeams(skills, minPlayers, minLevel, maxLevel));
//Expected Output: 5;