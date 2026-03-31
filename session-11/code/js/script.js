//  Debouncing
function debounce(fun, delay) {
  let timeoutId;

  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fun.apply(this, arguments);
    }, delay);
  };
}

const apiCall = () => {
  console.log("debounce has triggered!");
  //api call
};

let debounceFun = debounce(apiCall, 1000);

// 1000ms = 1s

document.querySelector("#firstname").addEventListener("input", debounceFun);

//Throttle

function throttle(fun, delay) {
  let timeoutId;

  return function () {
    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        fun.apply(this, arguments);
        timeoutId = null;
      }, delay);
    }
  };
}

const apiFun = () => {
  console.log("throttle will trigger");
};

const throttleFun = throttle(apiFun, 2000);

document.querySelector("#lastname").addEventListener("input", throttleFun);

// Event loop & BHS
console.log("1");
setTimeout(() => {
  console.log("hello");
}, 0);

console.log("2");

// DOM manipulation Example
