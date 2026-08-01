// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // Implement your solution here
  let binaryN = (N >>> 0).toString(2);
  let maxGap = 0;
  for (let i = 0; i < binaryN.length; i++) {
    for (let j = 0; j < binaryN.length; j++) {
      if (binaryN[i] == 1 && binaryN[j] == 1) {
        if (maxGap < j - i - 1) {
          maxGap = j - i - 1;
        }
        i = j;
      }
    }
  }
  return maxGap;
}
