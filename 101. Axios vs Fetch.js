import axios from "axios";

// // fetch
// const ProductData = fetch("https://dummyjson.com/products")
// .then(response => {
//     if (!response.ok) throw new Error('Network error');
//     return response.json();
// }).then(data=>{
//     console.log(data)
// }).catch(err=>{
//     console.log(err)
// })

// console.log(ProductData)

// axios
const ProductData2 = axios
  .get("https://dummyjson.com/products")
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });

console.log(ProductData2);
