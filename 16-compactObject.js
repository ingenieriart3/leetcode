// 2705. Compact Object

// Companies
// Given an object or array obj, return a compact object. A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.
// You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.
//  
// Example 1:
// Input: obj = [null, 0, false, 1]
// Output: [1]
// Explanation: All falsy values have been removed from the array.
// Example 2:
// Input: obj = {"a": null, "b": [false, 1]}
// Output: {"b": [1]}
// Explanation: obj["a"] and obj["b"][0] had falsy values and were removed.
// Example 3:
// Input: obj = [null, 0, 5, [0], [false, 16]]
// Output: [5, [], [16]]
// Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.
//  
// Constraints:
//     • obj is a valid JSON object 
//     • 2 <= JSON.stringify(obj).length <= 106 
/**
* @param {Object|Array} obj
* @return {Object|Array}
*/
var compactObject = function(obj) {
};







// Example 1:
// Input: obj = [null, 0, false, 1]
// Output: [1]
// Explanation: All falsy values have been removed from the array.
// Example 2:
// Input: obj = {"a": null, "b": [false, 1]}
// Output: {"b": [1]}
// Explanation: obj["a"] and obj["b"][0] had falsy values and were removed.
// Example 3:
// Input: obj = [null, 0, 5, [0], [false, 16]]
// Output: [5, [], [16]]
// Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.

var compactObject = function(obj) {
  /*
    recibo el input valid json (objeto o array)
    
      si es un objeto itero las key y pregunto 
        si el valor de esa key es falso delteo la key
        si es un array llamo a spliceFalzyElements
  
      sino itero los elementos del array
        si el item es falzy lo saco del array
        si el item es un array vuelvo a llamar
  */
  const isFalzy = (elem) => {
    return (elem==null || elem == 0 || elem ==false)
  }
  const removeFalzy = (arr) =>{
    for (const i in arr){
      if(isFalzy(arr[i])){
        arr.splice(i, 1)
      }
    }
  }
  
  const compactObj = ()=>{
    Object.keys(obj).forEach((k, i)=>{
      console.log(k, obj[k])
      if(isFalzy(obj[k])){
        console.log('esto es falzy', obj[k])
        delete obj[`${k}`]
      }
      if(Object.prototype.toString.apply(obj[`${k}`]) === '[object Array]'){
        console.log('array')
        removeFalzy(obj[`${k}`])    
      }
    })
  }
  
  
  if(Object.prototype.toString.apply(obj) === '[object Array]'){
    // let res = []
    const rec = (arr, n)=>{
      n--
      arr.forEach((el, i)=>{
          if((isFalzy(el) || el == 0) && Object.prototype.toString.apply(el) !== '[object Array]'){
            arr.shift(el)
            console.log(el, arr)
            return rec(arr, n)
          }else if (Object.prototype.toString.apply(el) === '[object Array]' && n>=0){
            return rec(el, n)
          }
      })
    }
    
    rec(obj,obj.length)
    return obj
  }else{
    compactObj()  
  }
  
  return obj
};

// Input: 
// let obj = {"a": null, "b": [false, 1]}
// Output: {"b": [1]}

// let obj = [null, 0,false, 1]
// let obj = [0,1,0,null]
// Output: [1]
let obj = [null, 0, 5, [0], [false, 16]]
// Output: [5, [], [16]]
console.log(compactObject(obj))
