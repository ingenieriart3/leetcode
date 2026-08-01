function solution(A) {
  const n = A.length;

  const seen = new Array(n + 1).fill(false);

  for (const num of A) {
    if (num > 0 && num <= n) {
      seen[num] = true;
    }
  }

  for (let i = 1; i <= n; i++) {
    if (!seen[i]) {
      return i;
    }
  }

  return n + 1;
}
