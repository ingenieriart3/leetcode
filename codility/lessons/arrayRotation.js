function solution(A, K) {
  if (K < A.length) {
    for (let i = 0; i < K - 1; i++) {
      A.push(A.shift());
    }
  }
  return A;
}
