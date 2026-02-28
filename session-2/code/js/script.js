// Operators
console.log(10 + 20);
console.log(20 - 10);
console.log(20 % 2); //remainder
console.log(20 / 2); //divisor
console.log(2 ** 2);

console.log("20" == 20); //value only
console.log("20" === 20); //strict checking (datatype + value)

console.log("20" == 20 || "20" === 20); //true
console.log(true && false);

// String operator (+)
console.log("hello" + "world");
console.log("hello" + 20);
console.log(20 + 20 + "hello");

console.log(typeof ("hello" - 10)); //NaN (not a number)
console.log("10" - 10);
console.log("20" / 2);
console.log("20" + 20); //2020
// Implicit coersion

// Operator precedence
// * /
// + -
// L -> R

// Check predence
// 1. check the opeartor precendence
// 2. datatype of operands, if string is present and +, just concatenate
// if non-numeric string there and other than + is there, NaN
// 3. check numeric string, if other than + is there, implicit coersion will occur

// Explicit coersion
// string to number
console.log(Number("20")); //20
console.log(Number("djnedke"));
console.log(parseInt("101.34"));
console.log(parseFloat("102.99"));

let x = 20;
console.log(x.toString());

console.log(Number(true)); //1
console.log(Number(false)); //0

console.log(1 || 0); //1
console.log(null || 0); //false or 0
console.log(null || 0 || 1); //1

console.log(1 && 0);

console.log(null == undefined); //true
console.log(null === undefined); //false

// Array
let nums = [10, 20, 30, 40, 20];
nums.push(100, 200);
console.log(nums);

nums.pop();
nums.pop();
console.log(nums);

// shift()
nums.shift();
console.log(nums);

// unshift()
nums.unshift(100, 200);
console.log(nums);

// slice()
console.log(nums.slice(0, 3)); //return an array from 0th till 2nd index

// splice()
// includes()
console.log(nums.includes(100));

// join()
console.log(nums.join("")); //
console.log(nums.reverse());

// strings
// indexing start from 0, every character have index
// indexOf();
// search()
// replace()
// replaceAll();
// split()
// toUpperCase
// toLowerCase
// charAt()

let str = "    Hello World!  ";

console.log(str.length);
console.log(str.indexOf("hidjodjo"));
console.log(str.search("World")); //index, otherwise -1
console.log(str.replace("World", "world"));
console.log(str.trim());
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.charAt(5)); //character at 5th is index
console.log(str.includes("Hello")); //boolean value
console.log(str.startsWith("  "));
console.log(str.endsWith("  "));

let strTwo = "hello-world-hi";
console.log(strTwo.split("-"));
console.log(strTwo.split(""));

let emp = {
  name: "alina",
  id: 1,
  details() {},
};

// object can have prop & methods

// Accidental Global Variable Creation in function
function add() {
  sample = 10;
}
add();

console.log(sample);

// function declaration
displayCart();
function displayCart() {
  console.log("Added to cart!");
}

// display();//give error
// function expression
let display = function () {
  console.log("display");
};

display();

// Array (Es6)
// map()
// filter()
// find()
// forEach()
// some()
// every()
// reduce()

//callback function

