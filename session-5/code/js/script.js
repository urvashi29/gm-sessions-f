// function add() {

// }

// console.log(typeof(add));

const person = {
  fullName: function (country) {
    console.log(this.firstName + " " + this.age + " lives in " + country);
  },
};

const user = {
  firstName: "alex",
  age: 20,
};

person.fullName.call(user, "India", "Australia");

// apply()
person.fullName.apply(user, ["Norway, Canada"]);
console.log(Math.max(10, 2, 3, 4, 100, 200));

let nums = [10, 200, 100, 500, 16, 90, 20];
console.log(Math.max.apply("", nums));

// bind()
const users = {
  firstName: "alina",
  lastName: "joe",
  display: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

let fullName = users.display.bind(users);
fullName();

// pure function
function add(a, b) {
  console.log(a + b);
}

add(10, 20);
add(10, 20);

// ES6 features
// class
// function University {
// }

// class are blue print of objects
class University {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

let studentOne = new University(1, "Alaya");
console.log(studentOne);

class Cafeteria extends University {
  constructor() {
    super(2, "Harry");
    this.amount;
  }
}

const c = new Cafeteria();
console.log(c);

// Template strings ``
let str = `Hello!
World`;

// variable & expression substitution
let first = "Alex \n hi";
let last = "Joe";

console.log("My name is " + first + " " + last + ".");
console.log(`My name is ${first} ${last}`);

// spread operator (...)  (objects & arrays)
let obj = {
  a: 10,
  b: 20,
};

// let objTwo = obj;
// objTwo.a = 100;
// console.log(obj, objTwo);

// using spread
let objTwo = { ...obj, z: 100 };
objTwo.a = 100;
console.log(obj, objTwo);

let one = [10, 2, 3, 3];
let two = [...one, 100, 200];
console.log(two);

// Rest operator (...)
function mutiply(...arr) {
  console.log(arr); //[10, 20, 30, 9, 7]
}
mutiply(10, 20, 30, 9, 7);

//array elements (destructuring a array)
let colors = ["pink", "green", "blue", "orange", "yellow", "white"];
let [a, b, , ...d] = colors; //rest operator
console.log(a, b, d);

// destructuring a object
let employee = {
  empId: 10,
  salary: 90909,
  isVerified: true,
};

let { empId, salary } = employee;
console.log(empId, salary);
