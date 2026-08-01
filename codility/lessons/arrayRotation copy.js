A = [3, 8, 9, 7, 6];
K = 3;

// fifo
const solution = (A, K) => {
  if (K == A.length) return A;
  else {
    for (let i = 0; i < K - 1; i++) {
      A.push(A.shift());
    }
  }
};

/*
edge cases:
all the first array's items with index <= that k, i< K

*/

solution(A, K);

function imprimirArray(A) {
  A.forEach((element) => console.log(element));
}

// imprimirArray(A);

A = [1, 2, 3, 4];
K = 4;
solution(A, K);
imprimirArray(A);

function solution(A, K) {
  if (K < A.length) {
    for (let i = 0; i < K - 1; i++) {
      A.push(A.shift());
    }
  }
  return A;
}
