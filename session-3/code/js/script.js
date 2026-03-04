// pure function
// closure function
// Prototype

// callback function

// function result() {

// }

function sum(a, b, c) {
  let result = a + b;
  c(result); //calling the callback

  //   returning a function
  //   return function () {}
}

// r is called callback parameter
sum(10, 20, function (r) {
  console.log(r);
}); //number, number, callback function

// Application: Js async(Timing events), DOM manipulation methods, Array ES6 methods
// sum -> high ordered function

// first class function: we are using/passing function as values
// const details = function () {

// }

// this keyword
console.log(this); //window

function sample() {
  console.log(this); //owner object of function (window)
}

// console.log(happy);

// function keyword vs arrow(fat) function (ES6)
// 1. syntax
function add() {
  return 20 * 2;
}

add();

// returning 20 * 2
// addVal = () => {
//     return 20 * 2;
// }

// 2. return keyword
addVal = () => 20 * 2;

addVal();

// 3. this keyword
let obj = {
  details: function () {
    console.log(this); //obj
  },
  detail: () => {
    console.log(this); //window
  },
};

obj.details();
obj.detail();

// console.log(window.obj);

// Array Methods ES6
// map(), forEach(), every(), filter(), find() some(), reduce()

let nums = [10, 2, 30, 20, 50];

let mapResult = nums.map((e, i, arr) => {
  return e * 2;
});

console.log(mapResult);

//forEach()
nums.forEach((ele, i, arr) => {
  console.log(ele, i, arr);
});

//filter(): return an array that will pass the conditions
let filterResult = nums.filter((ele) => ele >= 18);
console.log(filterResult);

//find(): return first array element that pass the condition
let findResult = nums.find((ele) => ele >= 18);

console.log(findResult);

//some(): return the boolean value
let someResult = nums.some((ele) => ele >= 18);
console.log(someResult);

//every(): return the boolean value
let everyResult = nums.every((ele) => ele >= 18);
console.log(everyResult);

// reduce(): reducing array to a single value
// [10, 2, 30, 20, 50]
let reduceResult = nums.reduce((totalValue, arrEle) => {
  console.log(totalValue); //10 12 42 62 112
  console.log(arrEle); //2 30 20 50
  return totalValue + arrEle;
}, 0);

console.log(reduceResult);

