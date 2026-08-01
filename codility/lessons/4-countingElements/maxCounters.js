function solution(N, A) {
  const counters = new Array(N).fill(0);

  let max = 0;
  let base = 0;

  for (const op of A) {
    if (op <= N) {
      const idx = op - 1;

      if (counters[idx] < base) {
        counters[idx] = base;
      }

      counters[idx]++;

      if (counters[idx] > max) {
        max = counters[idx];
      }
    } else {
      base = max;
    }
  }

  // Actualizamos los que quedaron atrasados

  for (let i = 0; i < N; i++) {
    if (counters[i] < base) {
      counters[i] = base;
    }
  }

  return counters;
}
