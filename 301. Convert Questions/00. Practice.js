function addtocard(price) {
  return new Promise((resolve, reject) => {
    resolve(price);
  });
}
function totalPrice(quentity, price) {
  return new Promise((resolve, reject) => {
    const total = price * quentity;
    resolve(total);
  });
}
function delivery(total) {
  return new Promise((resolve, reject) => {
    resolve(`Product Delivery on going, total price ${total}`);
  });
}

// addtocard(100)
//   .then((price) => {
//     console.log(price);
//     return totalPrice(3, price);
//   })
//   .then((total) => {
//     console.log(total);
//     return delivery(total);
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function assignment(price, quentity) {
  try {
    const productPrice = await addtocard(price);
    const total = await totalPrice(quentity, productPrice);
    const result = await delivery(total);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}
assignment(500,4)
