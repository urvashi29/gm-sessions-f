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

// default function agruments
function add(a, b = 20) {
  console.log(a + b);
}

let a = 10;
let b = 50;
add(a, b);

//local storage (key value)
localStorage.setItem("firstName", "alex");
localStorage.setItem("person", JSON.stringify(person));
console.log(JSON.parse(localStorage.getItem("person")));

// localStorage.clear();//clear local storage
localStorage.removeItem("firstName");

// session storage
sessionStorage.setItem("lastName", "joe");
sessionStorage.setItem(
  "colors",
  JSON.stringify(["pink", "red", "green", "white", "purple"]),
);

console.log(JSON.parse(sessionStorage.getItem("colors")));

// sessionStorage.clear();

sessionStorage.removeItem("lastName");

// JSON
let arr = [1, 2, 4, 4, 5];
console.log(JSON.stringify(arr));
console.log(typeof JSON.stringify(arr));

// cookie
document.cookie =
  "username = alina; expires = thu, 18 Mar 2026 12:00:00 UTC; secure= true; path=/";
let cookieVal = document.cookie;
console.log(cookieVal);
