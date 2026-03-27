// API Integration
// Debugging

// throttling & Debouncing
// Event loop
// DOM manipulation 

// Website : https://dummyjson.com/docs/products
const userApi = "https://jsonplaceholder.typicode.com/users";
const productApi = "https://dummyjson.com/products";

const getUsers = async () => {
  try {
    const response = await fetch(userApi);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

fetch(userApi)
  .then((response) => {
    console.log(response);
    if (!response.ok) {
      throw new Error("HTTP Error");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

document.querySelector("#btn").addEventListener("click", getUsers);

async function getProducts() {
  try {
    const response = await axios(productApi);
    const products = await response.data.products;
    console.log(products);
  } catch (err) {
    console.log(err);
  }
}

// axios
//   .get(productApi)
//   .then((response) => {
//     console.log(response.data.products);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

document.addEventListener("DOMContentLoaded", getProducts);

//post API
// axios.post("api", {});
// axios.post("api/id", {});
// axios.delete("api/id");

async function postProduct() {
  fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "BMW Pencil",
      /* other product data */
    }),
  })
    .then((res) => res.json())
    .then(console.log);

  //   let response = await fetch("https://dummyjson.com/products/add", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       title: "BMW Pencil",
  //       /* other product data */
  //     }),
  //   });

  //   const data = response.json();
  //   console.log(data);
}

document.querySelector("#post").addEventListener("click", postProduct);

for (let i = 0; i <= 10; i++) {
  console.log(i);
}
