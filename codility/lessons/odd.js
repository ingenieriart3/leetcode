A = [9, 3, 9, 3, 9, 7, 9];

const solution = (A) => {
  let res;
  for (let i = 0; i < A.length; i++) {
    // console.log('elemen i ' + A[i] + ' ' + i);
    for (let j = i + 1; j < A.length; j++) {
      let notPaired = A[i] == A[j] ? false : A[i];
      //   console.log(' j ' + j + ' e ' + A[j]);
      res = notPaired;
    }
  }
  return res;
};

let res = solution(A);
console.log(res);

function imprimirArray(A) {
  A.forEach((element) => console.log(element));
}
