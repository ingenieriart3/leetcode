//2648. Generate Fibonacci Sequence

/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
  let n1 = 0,
    n2 = 1;
  while (true) {
    yield n1; // yield operates to return the value when next is called
    // let temp = n2
    // n2 = n1 + n2
    // n1 = temp
    [n1, n2] = [n2, n1 + n2];
  }
};

// infinite sequence -> Iterator Design Pattern, BinarySearchTree

const gen = fibGenerator();
gen.next().value; // 0
gen.next().value; // 1
