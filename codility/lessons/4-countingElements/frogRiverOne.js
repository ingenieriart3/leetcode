function solution(X, A) {
  const seen = new Array(X + 1).fill(false);

  let remaining = X;

  for (let i = 0; i < A.length; i++) {
    if (!seen[A[i]]) {
      seen[A[i]] = true;
      remaining--;

      if (remaining === 0) {
        return i;
      }
    }
  }

  return -1;
}
