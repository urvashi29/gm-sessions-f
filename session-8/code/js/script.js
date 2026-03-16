document.querySelector("#sample").addEventListener("mouseover", function () {
  //   alert("on mouse over");
});

document.querySelector("#divEle").addEventListener("click", function () {
  console.log(this); //this is referring to the element on which event is attached
});

document.querySelector("#age").addEventListener("change", function () {
  console.log(this.value); //
});

document.querySelector("#form").addEventListener("submit", function (e) {
  console.log(e); //event object
  console.log(e.target);
  e.preventDefault();
  document.querySelector("#age").value = "";
  console.log("form is submitted");
});

// document.querySelector("#form").removeEventListener("submit");

// false: event bubbling (by default)
// true: event capturing
document.querySelector("#one").addEventListener(
  "click",
  function (e) {
    console.log("1 div is clicked");
  },
  false,
);

document.querySelector("#two").addEventListener(
  "click",
  function (e) {
    console.log("2 div is clicked");
    e.stopPropagation();
  },
  false,
);

document.querySelector("#three").addEventListener(
  "click",
  function (e) {
    console.log("3 div is clicked");
    e.stopPropagation();
  },
  false,
);

// map (key value pair)
let map = new Map();
map.set("name", "John");
map.set(1, "hello");

console.log(map);
console.log(map.get(1));
console.log(map.has(1));

//set (unique value)
const set = new Set([1, 2, 3, 3, 2, 3, 10]);
set.add(100);
console.log(set.has(100));
console.log(set);

let timeId = setTimeout(() => {
  alert("Hello");
}, 2000);

// 1000ms = 1s

let id = setInterval(() => {
  let d = new Date();
  console.log(d);
}, 1000);

function stop() {
  clearTimeout(timeId);
  clearInterval(id);
}

// Debounce, throttling
