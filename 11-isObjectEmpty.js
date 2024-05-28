// 2727. Is Object Empty

// Companies
// Given an object or an array, return if it is empty.
//     • An empty object contains no key-value pairs. 
//     • An empty array contains no elements. 
// You may assume the object or array is the output of JSON.parse.
//  
// Example 1:
// Input: obj = {"x": 5, "y": 42}
// Output: false
// Explanation: The object has 2 key-value pairs so it is not empty.
// Example 2:
// Input: obj = {}
// Output: true
// Explanation: The object doesn't have any key-value pairs so it is empty.
// Example 3:
// Input: obj = [null, false, 0]
// Output: false
// Explanation: The array has 3 elements so it is not empty.
//  
// Constraints:
//     •  2 <= JSON.stringify(obj).length <= 105 
/**
 * @param {Object | Array} obj
 * @return {boolean}
 */




var isEmpty = function(obj) {
    let res = false
    console.log(obj.length)
    if(Object.prototype.toString.apply(obj) == '[object Array]'
      && obj.length === 0) 
      res = true 

    if(Object.prototype.toString.apply(obj) == '[object Object]' 
        && Object.keys(obj).length === 0)
      res = true

    return res
};


obj = [null, false, 0]
isEmpty(obj)
obj = {"x": 5, "y": 42}
isEmpty(obj)
obj = {}
isEmpty(obj)
obj = []
isEmpty(obj)

// CHUNK ARRAY
var chunk = function (arr, size){
  let resArr = []
  let countSize = 0
  let newArr = []
  for (const i in arr) {
    newArr.push(arr[i])
    countSize ++
    if(countSize == size){
      resArr.push(newArr)
      newArr = []
      countSize = 0
    }
  }
    if(newArr.length>0) resArr.push(newArr)
  
  arr.forEach((elem, idx)=>{
    console.log(elem, idx)  
  })
  
  for(let i=0; i < arr.length; i++){
  }
  
  return resArr
}


// let arr = [1,2,3,4,5,6];
let size = 1
chunk(arr,size)
  
arr = [1,9,6,3,2];
size = 3
chunk(arr,size)
  
arr = [];
size = 1
chunk(arr,size)

// LAST
Array.prototype.last = function() {
  for(const i in this.reverse()) {
     return this[i]
  }
  if(!this[i]) return -1
};


const arr = [1, 2, 3];
arr.last(); // 3
let nums = [null, {}, 3]
nums.last(); // 3
nums = []
nums.last(); // 3
