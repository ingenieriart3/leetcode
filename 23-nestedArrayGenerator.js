// Leetcode 2649
/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function* (arr) {
  for (const n of arr) {
    if (Array.isArray(n)) {
      yield* inorderTraversal(n);
    } else {
      yield n;
    }
  }
};

const gen = inorderTraversal([1, [2, 3, 4], [5, 6]]);
gen.next().value; // 1
gen.next().value; // 2
gen.next().value; // 3
gen.next().value; // 4
gen.next().value; // 5
gen.next().value; // 6
