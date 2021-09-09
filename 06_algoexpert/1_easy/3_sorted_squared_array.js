function sortedSquaredArray(array) {
  let squares = array.map(num => num * num);
  squares.sort((a, b) => a - b);
  return squares;
}
