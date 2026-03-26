// Asynchronous Programming in JS
// async await

// callback
// Application of callback: Array ES6 methods, Timing Events, DOM Methods

// Callback hell/Pyramid of doom
// function getData(callback) {
//     //user data will come from api
//     callback(user);
// }

// getData(function (user) {
//     getPosts(user.id, function (posts) {
//         getComments(post[0].id, function (comments) {

//         })
//     })
// })

// Promise
let myPromise = new Promise(function (res, rej) {
  //producing code
  let x = 0;
  if (x == 0) {
    res("ok");
  } else {
    rej("error");
  }
});

console.log(myPromise); //object

myPromise
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });

// Application: API calls(axios, fetch)

console.log(1);
console.log(2);

// async/await
//return a promise object
async function add() {
  return (await 10) + 20;
}

add()
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("hello");

//resolving callback hell case here with promises & async/await

// axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
// }).catch((err) => {
// })

// function getData() {
//   //api call
//   const users = axios
//     .get("")
//     .then(() => {})
//     .catch(() => {});
//   return users;
// }

// function getPosts(id) {
//   const posts = axios.get(`${id}`).then().catch();
//   return posts;
// }

// let userComments = [];

// async function displayData() {
//   try {
//     const user = await getData();
//     const posts = await getPosts(user.id);
//     const comments = await getComments(posts[0].id);
//     userComments = comments;
//     return comments;
//   } catch (err) {
//     console.log(err.message);
//   }
// }

//consuming a promise object
// displayData().then(() => {}).catch(() => {})

async function displayFun() {
  let promiseObj = new Promise(function (res, rej) {
    setTimeout(() => {
      res("resolved");
    }, 4000);
  });

  let result = await promiseObj;
  console.log(result);
  return result;
}

displayFun().then((value) => {
  console.log(value);
});

// Task
//  Creating a Simple Promise: Write a function that returns a promise which resolves to a specific object after 1 second.
//  Create an object with a method that returns a promise. The promise should resolve with the object's properties after 2 seconds.
//  Write a function that accepts an object with two promises. Return a new promise that resolves when both resolve (Promise.all).
//  Write a function that takes a promise and a timeout. If the promise exceeds the timeout, reject with an error (Promise.race).
