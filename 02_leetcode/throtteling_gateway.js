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