function sockMerchant(n, ar) {
  let socks = {};
  for (let i = 0; i < n; i++) {
    socks[ar[i]] ? socks[ar[i]]++ : socks[ar[i]] = 1;
  }
  let pairs = 0
  for (let key in socks) {
    pairs += Math.floor(socks[key] / 2)
  }
  return pairs;
}

// const n = 9;
// const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
// console.log(sockMerchant(n, ar));