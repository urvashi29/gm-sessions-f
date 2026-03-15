// DOM

// selector
// document.getElementById("sample")
// document.getElementsByClassName("item");
// document.getElementsByTagName("p")

// css selector (basic selector, attribute selector, combinators, pseudo class)
console.log(typeof document.querySelector("#sample"));
console.log(document.querySelector("#sample").innerHTML); //define element content
document.querySelector("#sample").innerHTML = "World";

let items = document.querySelectorAll(".item");
console.log(items);

let arr = [];
for (let i = 0; i < items.length; i++) {
  console.log(items[i].innerHTML);
  arr.push(items[i].innerHTML);
}

console.log(arr);

// styling
document.querySelector("#lorem").style.backgroundColor = "orange";
document.querySelector("#lorem").style.color = "white";

let list = document.querySelector("#divEle").classList;
list.add("card");
// list.remove("card")

//creation DOM node
let div = document.createElement("div"); //<div></div>
div.innerHTML = "JavaScript"; //<div>JavaScript</div>
div.style.color = "pink";
console.log(div);
document.body.appendChild(div);

// insertBefore(element )
let li = document.querySelector("li:last-child");
li.remove();

let img = document.createElement("img");
img.setAttribute(
  "src",
  "https://plus.unsplash.com/premium_photo-1673795754005-214e3e1fccba?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
);
img.setAttribute("alt", "pattern image");
// let imgClass = img.classList;
// imgClass.add("")
document.body.appendChild(img);

console.log(img.getAttribute("src"));

function changeBackground() {
  document.body.style.backgroundColor = "palevioletred";
}

function captureUserInput() {
  let age = document.querySelector("#age").value; //capture User Input
  document.querySelector("#age-display").innerHTML = age;
}

// Task
// creating div element, add attribute & css
// get the data from api & display in the form card in UI (https://jsonplaceholder.typicode.com/users)
