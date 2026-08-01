function solution(A) {
  const n = A.length;

  const seen = new Array(n + 1).fill(false);

  for (const value of A) {
    if (value < 1 || value > n) {
      return 0;
    }

    if (seen[value]) {
      return 0;
    }

    seen[value] = true;
  }

  return 1;
}
