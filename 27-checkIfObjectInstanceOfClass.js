/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {
  //check falsy values
  if (
    obj === null ||
    obj === undefined ||
    typeof classFunction !== 'function'
  ) {
    console.log('1');
    return false;
  }

  let currPrototype = Object.getPrototypeOf(obj);
  while (currPrototype !== null) {
    if (currPrototype === classFunction.prototype) {
      return true;
    }
    currPrototype = Object.getPrototypeOf(currPrototype);
  }
  return false;
};

checkIfInstanceOf(new Date(), Date); // true

// func = ()=>{
//   class Animal {}
//   class Dog extends Animal {}

//   return checkIfInstanceOf(new Dog(), Animal) // true
// }

// let a = ''
// let b = String('')
// a.length

// Example 2:
// Input: func = () => { class Animal {}; class Dog extends Animal {}; return checkIfInstanceOf(new Dog(), Animal); }
// Output: true
// Explanation:
// class Animal {};
// class Dog extends Animal {};
// checkIfInstanceOf(new Dog(), Animal); // true

// Dog is a subclass of Animal. Therefore, a Dog object is an instance of both Dog and Animal.
// Example 3:
// Input: func = () => checkIfInstanceOf(Date, Date)
// Output: false
// Explanation: A date constructor cannot logically be an instance of itself.
// Example 4:
// Input: func = () => checkIfInstanceOf(5, Number)
// Output: true
// Explanation: 5 is a Number. Note that the "instanceof" keyword would return false. However, it is still considered an instance of Number because it accesses the Number methods. For example "toFixed()".

const d = new Date();

console.log(Date.prototype); // shows object if it's on the browser
console.log(Object.getPrototypeOf(d)); //shows object if it's on nodejs thread

class DateSubclass extends Date {}

const d2 = new DateSubclass();
const d2Proto = Object.getPrototypeOf(d2);
console.log(Object.getPrototypeOf(d2Proto));

let n1 = 1;
let n2 = new Number(1);

console.log(n1 instanceof Number); // false
console.log(n2 instanceof Number); // true

let s1 = '1';
let s2 = new String('1');

console.log(s1 instanceof String); // false
console.log(s2 instanceof String); // true

console.log(Object.getPrototypeOf(s1));
console.log(Object.getPrototypeOf(s2));
