function solution(A) {
  let eastCars = 0;
  let pairs = 0;

  for (const car of A) {
    if (car === 0) {
      eastCars++;
    } else {
      pairs += eastCars;

      if (pairs > 1000000000) {
        return -1;
      }
    }
  }

  return pairs;
}
