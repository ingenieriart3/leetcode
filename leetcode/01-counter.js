/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let count = init;
    
    function increment() {
      return ++count  
    }
    
    function decrement() {
      return --count
    }
    
    function reset(){
      count = init
      return count
    }
    
    return {
      increment: increment,
      decrement: decrement,
      reset: reset
    }
  };
  
  var createCounter = function(init) {
    let count = init;
    
    const increment = ()=> {
      return ++count  
    }
    
    const decrement = ()=>{
      return --count
    }
    
    const reset = ()=> {
      count = init
      return count
    }
    
    return {
      increment,
      decrement,
      reset
    }
  };
  
  
  
  class Counter{
    constructor(init){
      this.init = init
      this.count = init
    }
    
    increment() {
      return ++this.count
    }
    
    decrement() {
      return --this.count
    }
    
    reset(){
      this.count = this.init
      return this.count
    }
  }
  