// type User = {
//   name: string;
//   age: number;
// };

// function isAdult(user: User): boolean {
//   return user.age >= 18;
// }

// const justine: User = {
//   name: 'Justine',
//   age: 'Secret!',
// };

// const isJustineAnAdult: string = isAdult(justine, "I shouldn't be here!");
// console.log(isJustineAnAdult)

const c = (fn) => {
  console.log(fn);
};

// function createAdder(a) {
//   return function add(b) {
//     const sum = a + b;
//     return sum;
//   }
// }

// const addTo2 = createAdder(2);
// console.log(addTo2(5));

// var expect = function(val) {
//     return {
//       toBe: (v)=> {
//         if(val==v)
//           return true
//         else throw new Error("Not Equal")
//       },
//       notToBe: (v)=> {
//         if(val!==v)
//           return true
//         else throw new Error("Equal")
//       },
//     }
// };

// expect(3).notToBe(3)

var expect = function (val) {
  return {
    toBe: (v) =>
      (v === val
        ? () => {
            return true;
          }
        : () => {
            throw new Error('Not Equal');
          })(),
    notToBe: (v) =>
      (v === val
        ? () => {
            return true;
          }
        : () => {
            throw new Error('Not Equal');
          })(),
  };
};

// expect(5).toBe(5);
// expect(5).toBe(null);
// expect(5).notToBe(null);

// var map = function(arr, fn) {
//   let res = [];
//   for(const i in arr){
//     let idx = arr.indexOf(arr[i]);
//     res[i] = fn(arr[i], idx)
//     // console.log(res[i])
//   }
//   return res;
// };

// let arr = [1,2,3];

// const plusOne = function plusone(n) { return n + 1; }
// map(arr,plusOne)
// const plusI = function plusI(n, i) { return n + i; }
// map(arr,plusI)
// const constant = function constant() { return 42; }
// map(arr,constant)

// var filter = function(arr, fn) {
//   let res = []
//   for (const i in arr){
//     let idx = arr.indexOf(arr[i]);
//     if(fn(arr[i], idx)){
//       res.push(arr[i])
//     }
//   }
//   c(res)
//   return res
// };

// arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
// let newArray = filter(arr, fn); // [20, 30]
// arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
// newArray = filter(arr, fn); // [1]
// c(newArray)

// arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
// newArray = filter(arr, fn); // [ -2, 0, 1, 2 ]

// function memoize(fn) {
//     let cache = {};
//     return function(...args) {
//         let cacheKey = args.join("#").toString()
//         c(cacheKey)
//         // for(let i=0; i< args.length; i++){
//         //   c(i)
//         // }
//         // for(const i in args){
//         //   c(i)
//         // }
//         // args.forEach((elem, idx)=>{
//         //   c(elem)
//         //   c(idx)
//         // })
//         let cacheValue = cache[`${cacheKey}`]
//         if( cacheValue != undefined){
//           return cacheValue
//         }
//         return cache[`${cacheKey}`] = fn(...args)
//     }
// }

// let callCount = 0;
// const memoizedFn = memoize(function (a, b) {
//  callCount += 1;
//   return a + b;
// })

// c(memoizedFn(2, 3)) // 5
// c(memoizedFn(2, 3)) // 5

// var join = function(arr1, arr2) {
//   let res = []
//   let idFounded = 0
//   const checkId = (arr, id) => {
//     for(const i in arr){
//       idFounded = i
//       if(arr[i].id == id) return true
//     }
//     return false
//   }

//   arr1.forEach((el, i)=>{
//     res.push(el)
//   })

//   arr2.forEach((el2, i)=>{
//     if(checkId(arr1, el2.id)){
//       Object.keys(el2).forEach((k2,i)=>{
//         // console.log(res[idFounded][k2])
//         // console.log(k2, el2[k2])
//         res[idFounded][k2] = el2[k2]
//       })
//     }else {
//       res.push(el2)
//     }
//   })

//   return res
// };

// arr1 = [
//     {"id": 1, "x": 1},
//     {"id": 2, "x": 9}
// ],
// arr2 = [
//     {"id": 3, "x": 5}
// ]
// join(arr1,arr2)

// arr1 = [
//     {"id": 1, "x": 2, "y": 3},
//     {"id": 2, "x": 3, "y": 6}
// ],
// arr2 = [
//     {"id": 2, "x": 10, "y": 20},
//     {"id": 3, "x": 0, "y": 0}
// ]
// join(arr1,arr2)

// arr1 = [
//     {"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}
// ]
// arr2 = [
//     {"id": 1, "b": {"c": 84}, "v": [1, 3]}
// ]
// join(arr1,arr2)

// var flat = function (arr, n) {
//   let res = []
//   const rec = (arr, n)=>{
//     n--
//     arr.forEach((el, i)=>{
//       if(Object.prototype.toString.apply(el) === '[object Array]' && n>=0){
//           return rec(el, n)
//         }else{
//           res.push(el)
//         }
//     })
//   }
//   rec(arr, n)
//   return res
// };

// // arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
// // n = 0
// // c(flat(arr, n))
// // Output
// // [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

// // arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
// // n = 1
// // flat(arr, n)
// // Output
// // [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]

// arr = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
// n = 2
// flat(arr, n)
// // Output
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// var compactObject = function(obj) {
//   /*
//     recibo el input valid json (objeto o array)

//       si es un objeto itero las key y pregunto
//         si el valor de esa key es falso delteo la key
//         si es un array llamo a spliceFalzyElements

//       sino itero los elementos del array
//         si el item es falzy lo saco del array
//         si el item es un array vuelvo a llamar
//   */
//   const isFalzy = (elem) => {
//     return (elem==null || elem == 0 || elem ==false)
//   }
//   const removeFalzy = (arr) =>{
//     for (const i in arr){
//       if(isFalzy(arr[i])){
//         arr.splice(i, 1)
//       }
//     }
//   }

//   const compactObj = ()=>{
//     Object.keys(obj).forEach((k, i)=>{
//       console.log('>',k, obj[k])
//       if(isFalzy(obj[k])){
//         console.log('esto es falzy', obj[k])
//         delete obj[`${k}`]
//       }
//       if(Object.prototype.toString.apply(obj[`${k}`]) === '[object Array]'){
//         console.log('array')
//         removeFalzy(obj[`${k}`])
//       }
//     })
//   }

//   if(Object.prototype.toString.apply(obj) === '[object Array]'){
//     // let res = []
//     const rec = (arr, n)=>{
//       n--
//       arr.forEach((el, i)=>{
//           if((isFalzy(el) || el == 0) && Object.prototype.toString.apply(el) !== '[object Array]'){
//             arr.shift(el)
//             console.log(el, arr)
//             return rec(arr, n)
//           }else if (Object.prototype.toString.apply(el) === '[object Array]' && n>=0){
//             return rec(el, n)
//           }
//       })
//     }

//     rec(obj,obj.length)
//     return obj
//   }else{
//     compactObj()
//   }

//   return obj
// };

// // Input:
// // let obj = {"a": null, "b": [false, 1]}
// // Output: {"b": [1]}

// // let obj = [null, 0,false, 1]
// // let obj = [0,1,0,null]
// // Output: [1]
// let obj = [null, 0, 5, [0], [false, 16]]
// // Output: [5, [], [16]]
// // console.log(compactObject(obj))
// compactObject(obj)

// const al = ['a','b','c','d']
// const newa = al.slice(0,-2)
// console.log(newa)
// const aal = al
// al = []
// al.length = 0
// al.splice(0, al.length)
// while(al.length){
//   al.pop()
// }
// do{
//   al.pop()
// }while(
//   al.length
// )
// c(aal)
// c(al)

// const calculateTip = (totalInvoice, tipPercentage)=>{
//   return (totalInvoice * tipPercentage) /100
// }

// const cartItem = {
//   name:'',
//   price: 0,
//   quantity:0
// }
// const shoppingCart = {
//   items:[],
//   addItem: function(item){
//     this.items.push(item)
//   },
//   removeItem: function(item){
//     this.items.pop(item)
//   },
//   total:0,
//   totalCoast: function(){
//     let total = 0
//     this.items.forEach((i, idx)=>{
//       // this.total += i.price * quantity
//       total += i.price * i.quantity
//     })
//     // return this.total
//     return total
//   }
// }

// const cI1 = Object.create({
//   name: 'zapas',
//   price: 6350,
//   quantity: 2
// })

// const cI2 = Object.create({
//   name: 'lentes',
//   price: 10,
//   quantity: 2
// })

// const sc = Object.create(shoppingCart)
// sc.addItem(cI1)
// sc.addItem(cI2)
// sc.addItem(cI2)
// sc.addItem(cI2)
// sc.removeItem(cI2)
// console.log(sc.items.length)
// console.log(sc.totalCoast())
// console.log(sc.items)

// let mem= {}
// function getRandom(){
//   return Math.random().toString(32).substring(2,5) + Math.random().toString(32).subtring(2,5)
// }
// function setShort(url, mem){
//   mem[getRandom()]=url
// }
// console.log(mem)

// const shorting = {
//   mem:{},
//   setShort(url){
//     this.mem[Math.random().toString(32).substring(2,5) + Math.random().toString(32).subtring(2,5)]=url
//   },
//   getUrl(shortUrl){
//     return this.mem[shortUrlKey]
//   }
// }

// const scc = Object.create(shorting)
// console.log(scc)
// scc.setShort('asdfasdfasdfjasdfasodjfasq90weqr0q9werq90wre0q9wreqwer9qwe0r9wer')
// console.log(scc)
// console.log(sc.getUrl('asdf'))

// const obj = {
//   name: "Conner",
//   age:27,
//   // greet: ()=>{
//   greet(){
//     console.log('hey my name is ' + this.name)
//   }
// }
// obj.greet()

// mas cosas antes sacar de office

// function theThrottled(cb,ms){
//   console.log('im the throttled')
// }

// function throttledFunction(fn, ms){
//   setInterval(()=>{
//     fn(fn,ms)
//   },ms)
// }

// throttledFunction(theThrottled, 2500)

// i don´t see nothing wrong
// const arr = [1, 2, 3, 4, 5];
// const sum = arr.reduce((total, num) => total + num);
// console.log(sum / arr.length);

// type bussyTime = {
//   start: Date,
//   end: Date
// }

// let bussyTimePerson1 : bussyTime[]

const date = new Date('2020-10-10T09:31:40.117Z');
const duration =
  new Date('2020-10-10T10:00:00.117Z').getTime() -
  new Date('2020-10-10T09:30:00.117Z').getTime();
// console.log(duration)
// console.log(3600000/60/60)
// console.log(1000*60*60)

const date1 = new Date('2020-10-10T12:31:40.117Z');
const date2 = new Date('2020-10-10T13:00:00.117Z');
const date3 = new Date('2020-10-10T13:49:60.117Z'); // so at 14 they could have a 30 minutes duration meeting
const date4 = new Date('2020-10-10T15:31:40.117Z');
const date5 = new Date('2020-10-10T17:31:40.117Z');

const bussyTimeP1 = [
  { start: date, end: date1 },
  { start: date4, end: date5 },
  {},
  {},
  {},
];
const bussyTimeP2 = [
  { start: date, end: date1 },
  { start: date2, end: date3 },
  {},
  {},
  {},
];
// const bussyTimeP1 = [{},{},{},{},{}]

// 2024-01-16T11:31:40.117Z
// console.log(date2.getTime()-date1.getTime())
// const durationTime = (new Date('2020-10-10T17:31:40.117Z').getTime()
// console.log(durationTime)
// must for each end and start bussy times of p1
// search if i have available time greather or euqual to meeting duration parameter

const getFirstTimeAvailable = (bussyTime) => {
  for (let i = 0; i <= bussyTime.length; i++) {
    console.log(bussyTime[i]);
  }
};

// getFirstTimeAvailable(bussyTimeP1)

const findFirstAvailableTimeSlot = (bussyTimeP1, bussyTimeP2, duration) => {
  let start, end;

  return {
    start,
    end,
  };
};

// const testArray = [1, 2, 3, 4, 5];
// const res = testArray.reduce((acc, curr) => {
//   // console.log(curr)
//   if (curr % 2 === 0) {
//         return acc + curr;
//   }
//   return acc;
// }, 0);
// console.log(res);

//TypeError: object1 is not iterable
// const arr = [1, 2, 3];
// const object1 = { x: 1, y: 2, z: 3 }; // no iterable
// // const object1 = [{ x: 1, y: 2, z: 3 }];
// console.log([...arr, ...object1]);

// RangeError: Potential infinite loop: exceeded 2000 iterations.
// const arr = [];
// for (let i = 0; i < 1000000; i++) {
//   arr.push(Math.floor(Math.random() * 1000));
// }

// One and Two aren´t defined
// const promise1 = Promise.resolve(One);
// const promise2 = Promise.resolve(Two);
// Promise.all([promise1, promise2]).then(([result1, result2]) => console.log(result1 + ' ' + result2));

// function counter() {
//   let count = 0;
//   return function() {
//         count++;
//         console.log(count);
//   }
// }
// take count variable definition out
// let count = 0;
// function counter() {
//   return function() {
//         count++;
//         console.log(count);
//   }
// }
// const increment = counter();
// increment(); // 1
// increment(); // 2
// increment(); // 3

//const timePromise = new Promise(res => setTimeout(()=>{console.log('success')}), 100)

// const sentence = 'Hola hoy es un día maravilloso'
// const sentenceArray = sentence.split('').reverse()
// console.log(sentenceArray.reverse())
