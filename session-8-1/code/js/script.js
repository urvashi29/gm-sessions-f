document.querySelector("#btn").addEventListener("click", function () {
  console.log("button clicked");
  console.log(this); //
});

document.querySelector("#first").addEventListener("change", function (e) {
  // e -> event object, created automatically on event happening
  console.log(e);
  console.log(e.target.value);
});

document.querySelector("#form").addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("form is submitted");
});

// false -> event bubbling (inward to outward)
// document.querySelector("#one").addEventListener("click", function () {
//   console.log("one");
// }, false);

// document.querySelector("#two").addEventListener("click", function () {
//   console.log("two");
// }, false);

// document.querySelector("#three").addEventListener("click", function () {
//   console.log("three");
// }, false);

//  true -> capturing (outward to inward)
document.querySelector("#one").addEventListener(
  "click",
  function (e) {
    console.log("one");
  },
  false,
);

document.querySelector("#two").addEventListener(
  "click",
  function (e) {
    console.log("two");
    e.stopPropagation();
  },
  false,
);

document.querySelector("#three").addEventListener(
  "click",
  function (e) {
    console.log("three");
    e.stopPropagation();
  },
  false,
);

// map: key value pair
const map = new Map();
map.set(1, "alina");
map.set("lastName", "Joe");

console.log(map);
console.log(map.has(1));
console.log(map.get(1));

//set: duplicates are not allowed
const set = new Set([10, 20, 10, 30]);
console.log(set);

set.add(100);
console.log(set.has(100));

// 1000ms = 1s

// timing interval
let tId = setTimeout(() => {
  //   alert("Hello");
}, 2000);

let id = setInterval(() => {
  const date = new Date();
  console.log(date);
}, 1000);

document.querySelector("#stop").addEventListener("click", function () {
  clearTimeout(tId);
  clearInterval(id);
});
