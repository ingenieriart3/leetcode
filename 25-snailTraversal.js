//2624 snailTraversal
/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
  const res = [];

  if (this.length !== rowsCount * colsCount) return [];

  for (let i = 0; i < rowsCount; i++) res.push(new Array(colsCount));

  let revOrder = false,
    ind = 0;
  for (let j = 0; j < colsCount; j++) {
    if (!revOrder) for (let i = 0; i < rowsCount; ++i) res[i][j] = this[ind++];
    else for (let i = rowsCount - 1; i >= 0; i--) res[i][j] = this[ind++];
    revOrder = !revOrder;
  }
  return res;
};

const arr = [1, 2, 3, 4];
arr.snail(1, 4); // [[1,2,3,4]]

// Example 1:
// Input:
// nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]
// rowsCount = 5
// colsCount = 4
// Output:
// [
//  [19,17,16,15],
//  [10,1,14,4],
//  [3,2,12,20],
//  [7,5,18,11],
//  [9,8,6,13]
// ]
// Example 2:
// Input:
// nums = [1,2,3,4]
// rowsCount = 1
// colsCount = 4
// Output: [[1, 2, 3, 4]]
// Example 3:
// Input:
// nums = [1,3]
// rowsCount = 2
// colsCount = 2
// Output: []
// Explanation: 2 multiplied by 2 is 4, and the original array [1,3] has a length of 2; therefore, the input is invalid.
