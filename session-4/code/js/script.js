// IIFE / self-invoking function
// (() => {
//     console.log(10 + 20);
// })();

// closure function
var counter = 0;
add = () => {
  counter += 1;
  console.log(counter);
};

add(); //1
add(); //2
add(); //3

addVal = () => {
  let counter = 0;
  counter += 1;
  console.log(counter);
};

addVal(); //1
addVal(); //1
addVal(); //1

function increment(c) {
  let count = 0; //lexical env
  let firstName = "alina";

  return () => {
    count += 1;
    console.log(count);
  };
}

const funVal = increment();
console.log(funVal);
funVal(); //1
funVal(); //2

function entertainmentApp() {
  let user = "guest";

  return (type) => {
    user = type;
  };
}

let entertain = entertainmentApp();
entertain("Premium");

createUser = () => {
  let userId = 79890;

  return {
    updateUser: () => {},
    deleteUser: () => {},
  };
};

// Prototype
//object function constructor

//encapsulation
function Employee(id, firstName, age) {
  this.id = id;
  this.firstName = firstName;
  this.age = age;
}

Employee.prototype.details = function () {};
Employee.prototype.nationality = "Indian";
console.log(Employee.constructor);

const empOne = new Employee(1, "alex", 24);
console.log(empOne);

// instance member : id, firstName, age
// proptotype member: details, nationality

console.log(Object.keys(empOne)); //return all the properties in thr form of array

// ES6: for in
for (let prop in empOne) {
  console.log(prop);
}

//inherit from Employee (Prototypal Inheritance)
function Developer(language) {
  Employee.call(this, 2, "alaya", 20); //super()
  this.language = language;

  // Inherit the prototype
  Developer.prototype = Object.create(Employee.prototype);

  // manually set the constructor
  Developer.prototype.constructor = Developer;
}

const dev = new Developer("German");
console.log(dev);

let arr = [10, 29, 39];
console.log(arr);

// Array.prototype.myMap = funtion() {

// }

Object.prototype.customProp = 90;

let person = {
  id: 1,
  isVerified: false,
};

console.log(person);

let str = new String("hello");
console.log(str);

let num = new Number(10);
console.log(num);
