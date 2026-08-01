function counting(A, m) {
  const count = new Array(m + 1).fill(0);

  for (const num of A) {
    count[num]++;
  }

  return count;
}
