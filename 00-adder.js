//const c = (...args) =>{
//  console.log(args);
//}

const c = (fn) =>{
    console.log(fn);
  }
  
  // function declaration
  /*function createAdder(a) {
    return function add(b) {
      const sum = a + b;
      return sum;
    }
  }
  
  const addTo2 = createAdder(2);
  console.log(addTo2(5));
  */

  // class declaration
  class Adder {
    constructor(a) {
       this.a = a;
    }
  
    add(b) {
      const sum = this.a + b;
      return sum;
    }
  }
  const addTo2 = new Adder(2);
  //addTo2.a = 19;
  c(addTo2.add(5)); // 7