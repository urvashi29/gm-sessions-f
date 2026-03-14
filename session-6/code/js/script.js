// restructuring of object
let firstName = "alina";
let lastName = "joe";
let age = 20;

let person = {
  firstName,
  lastName,
  age,
};

console.log(person);

//default function agruments
function add(a, b = 20, c) {
  console.log(a + b);
}

let a = 10;
let b = 40;
add(a, b, 20);

// web storages (client storage)
localStorage.setItem("firstName", "alex");
localStorage.setItem("lastName", "Joe");
console.log(localStorage.getItem("firstName"));

sessionStorage.setItem("person", JSON.stringify(person));
console.log(JSON.parse(sessionStorage.getItem("person")));

// localStorage.clear();
// sessionStorage.clear();

localStorage.removeItem("lastName");

// JSON
let cars = ["Ford", "BMW", "FIAT"];
console.log(JSON.stringify(cars));

// cookie
document.cookie = "username=alex; expires=Mon, 16 Mar 2026 12:00:00 UTC;";

let cookieVal = document.cookie;
console.log(cookieVal);

