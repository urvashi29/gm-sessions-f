// variables
// datatypes
// hoisting


var a = 10.4; //number

// "" or ''
var userName = " Alina123 ";

var isLoggedIn = true; //boolean

// array
var arr = [10, 20, 30];
var mixed = [10, "2909", [], 29];

// object literal
var emp = {
  user: "Alex123",
  designation: "Developer",
  age: 20,
  salary: 98909,
  city: "Pune",
  contact: {
    contact_number: 90909090,
  },
};

// array of objects
var products = [
  {
    productName: "",
    productId: 90,
    productDetails: {},
    price: {
      currentPrice: 900,
      discountedPrice: 90,
    },
  },
  {
    productName: "",
    productId: 10,
    productDetails: {},
    price: {
      currentPrice: 1000,
      discountedPrice: 600,
    },
  },
  {
    productName: "",
    productId: 100,
    productDetails: {},
    price: {
      currentPrice: 900,
      discountedPrice: 90,
    },
  },
  {
    productName: "",
    productId: 20,
    productDetails: {},
    price: {
      currentPrice: 900,
      discountedPrice: 90,
    },
    productImg: "",
  },
];

// null
var y = null;
console.log(y); //null
console.log(typeof y); //object

// undefined
var x;
console.log(x); //undefined
console.log(typeof x); //undefined

console.log(typeof a); //number
console.log(typeof userName); //string
console.log(typeof isLoggedIn); //boolean
console.log(typeof emp); //object
console.log(typeof products); //object

console.log(Array.isArray(products)); //true

console.log(y == null);

// nullish operator
// const result = y ?? a;

// var x = 20;
// console.log(x);

// x = 29;

// ES6
// let
// let x = 20;//error

// re assign of value
let sample = 100;
sample = 200;
console.log(sample);

// const: declare a constant variable
// const x = 20;//error

// no re assign of value
// const sampleTwo = 100;
// sampleTwo = 200;
// console.log(sampleTwo);

//hoisting: taking declaration at top of the current scope
addToCart(1);

// declare a function in js
function addToCart(id) {
  //local scope(accesibility of variable)
  var val = 20;
  var result = id + 20;
  return result;
}

addToCart(1);
console.log(typeof addToCart);

//hoisting will not work with let/const (temporal dead zone)
h = 10; //assigning / initialisation
console.log(h); //using
var h; //declare

