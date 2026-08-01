const X = 10;
const Y = 85;
const D = 30;

const solution = (X, Y, D) => {
  const distance = Y - D;
  return Math.ceil(distance / D);
};

let res = solution(X, Y, D);
// solution(X, Y, D);
console.log(res);

// function imprimirArray(A) {
//   A.forEach((element) => console.log(element));
// }
