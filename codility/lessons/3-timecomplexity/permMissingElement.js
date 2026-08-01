function solution(A) {
  const n = A.length + 1;

  const expected = (n * (n + 1)) / 2;

  let actual = 0;

  for (const num of A) {
    actual += num;
  }

  return expected - actual;
}
