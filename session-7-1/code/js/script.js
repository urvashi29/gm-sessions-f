// DOM

// selector
// console.log(document.getElementById("sample"));
// console.log(typeof(document.getElementById("sample")));
// document.getElementsByClassName("item");
// document.getElementsByTagName("p")

// querySelector(css selector): basic selector, combinators, attribute selector, pseudo class& elements
console.log(document.querySelector("#sample").innerHTML);
console.log(typeof document.querySelector("#sample"));

let items = document.querySelectorAll(".item");
console.log(items);

let arr = [];
items.forEach((item) => {
  console.log(item.innerHTML);
  arr.push(item.innerHTML);
});

console.log(arr);

// change content
document.querySelector("#divEle").innerHTML = "Lorem Ipsum!";

document.querySelector("#divEle").style.color = "teal";

// styling
document.body.style.backgroundColor = "pink";

document.querySelector("#image").src =
  "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

document.querySelector("#image").style.height = "200px";
document.querySelector("#image").style.width = "200px";

// class
let classes = document.querySelector("#divEle").classList;
classes.add("card");
classes.remove("card");

// creation
let div = document.createElement("div"); //<div></div>
div.style.height = "100px";
div.innerHTML = "Hi";
document.body.appendChild(div);

let img = document.createElement("img");
img.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
);

img.setAttribute("alt", "pattern image");
document.body.appendChild(img);

document.querySelector("li:last-child").remove();

// Events
function changeBackground() {
  document.body.style.backgroundColor = "palevioletred";
}

// function addToCart(id) {
// }

function userInput() {
  console.log(document.querySelector("#age").value);
}

// Task
// creating div element, add attribute & css
// array: products, display in UI through JS
