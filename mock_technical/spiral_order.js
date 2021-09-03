
'use strict';

const spiralOrder = function (matrix) {
  let res = [];

  let startingRow = 0;
  let startingCol = 0;
  let endingRow = matrix.length - 1;
  let endingCol = matrix[0].length - 1;

  while (startingRow <= endingRow && startingCol <= endingCol) {
    for (let i = startingCol; i <= endingCol; i++) {
      res.push(matrix[startingRow][i]);
    }
    for (let i = startingRow + 1; i <= endingRow; i++) {
      if (startingRow === endingRow) break;
      res.push(matrix[i][endingCol]);
    }
    for (let i = endingCol - 1; i >= startingCol; i--) {
      if (startingRow === endingRow) break;
      res.push(matrix[endingRow][i]);
    }
    for (let i = endingRow - 1; i > startingRow; i--) {
      if (startingCol === endingCol) break;
      res.push(matrix[i][startingCol]);
    }
    startingRow++;
    startingCol++;
    endingRow--;
    endingCol--;
  }
  return res;
};

const inputArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

//   [1  2  3]
//   [4  5  6]
//   [7  8  9]

console.log((spiralOrder)(inputArr));
//Ex. Out. : [1, 2, 3, 6, 9, 8, 7, 4, 5]
