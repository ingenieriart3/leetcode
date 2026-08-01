// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // Implement your solution here
  const N = A.length;

  // 1 encontrar candidato a leader con algoritmo de boyer moore

  let candidate = null;
  let count = 0;

  for (let x of A) {
    if (count === 0) {
      candidate = x;
      count = 1;
    } else if (x === candidate) {
      count++;
    } else {
      count--;
    }
  }

  // 2 verificar si el candidato es  lider de todo el array
  let total = 0;
  for (let x of A) {
    if (x === candidate) total++;
  }

  // si no hay lider en todo el array no puede haber equileader
  let leftCount = 0;
  let equiLeaders = 0;

  for (let i = 0; i < N - 1; i++) {
    if (A[i] === candidate) leftCount++;

    const leftSize = i + 1;
    const rightSize = N - i - 1;
    const rightCount = total - leftCount;

    const isLeftLeader = leftCount > leftSize / 2;
    const isRightLeader = rightCount > rightSize / 2;

    if (isLeftLeader && isRightLeader) {
      equiLeaders++;
    }
  }

  return equiLeaders;
}

// schedule
// 1h 59min

// check
// Submit Task

// Task 1

// keyboard_arrow_left
// Task description
// A non-empty array A consisting of N integers is given.

// The leader of this array is the value that occurs in more than half of the elements of A.

// An equi leader is an index S such that 0 ≤ S < N − 1 and two sequences A[0], A[1], ..., A[S] and A[S + 1], A[S + 2], ..., A[N − 1] have leaders of the same value.

// For example, given array A such that:

//     A[0] = 4
//     A[1] = 3
//     A[2] = 4
//     A[3] = 4
//     A[4] = 4
//     A[5] = 2

// content_copy
// we can find two equi leaders:

// 0, because sequences: (4) and (3, 4, 4, 4, 2) have the same leader, whose value is 4.
// 2, because sequences: (4, 3, 4) and (4, 4, 2) have the same leader, whose value is 4.
// The goal is to count the number of equi leaders.

// Write a function:

// function solution(A);
// content_copy

// that, given a non-empty array A consisting of N integers, returns the number of equi leaders.

// For example, given:

//     A[0] = 4
//     A[1] = 3
//     A[2] = 4
//     A[3] = 4
//     A[4] = 4
//     A[5] = 2

// content_copy
// the function should return 2, as explained above.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000,000..1,000,000,000].
