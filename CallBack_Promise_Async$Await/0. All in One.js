// callback hell
function addtocard(price, cb) {
  console.log(`product price: ${price}`);
  cb(price);
}

function totalPrice(quentity, price, cb) {
  const total = quentity * price;
  cb(total);
}

function delivery(total) {
  console.log(`Product already delivery, product total price ${total}`);
}

// callback hell
addtocard(117, (price) => {
  totalPrice(3, price, (total) => {
    delivery(total);
  });
});










// Now converting Callback hell to  promise
function addtocard(price) {
  return new Promise((resolve, reject) => {
    console.log(`product price: ${price}`);
    resolve(price);
  });
}

function totalPrice(quentity, price) {
  return new Promise((resolve, reject) => {
    const total = quentity * price;
    resolve(total);
  });
}

function delivery(total) {
  return new Promise((resolve, reject) => {
    resolve(`Product already delivery, product total price ${total}`);
  });
}

// write promise
addtocard(45)
  .then((price) => {
    totalPrice(3, price);
  })
  .then((total) => {
    delivery(total);
  })
  .then(() => {
    console.log("All tasks completed!");
  });












// Now Converting Async/Await

function addtocard(price) {
  return new Promise((resolve, reject) => {
    console.log(`product price: ${price}`);
    resolve(price);
  });
}

function totalPrice(quentity, price) {
  return new Promise((resolve, reject) => {
    const total = quentity * price;
    resolve(total);
  });
}

function delivery(total) {
  return new Promise((resolve, reject) => {
    resolve(`Product already delivery, product total price ${total}`);
  });
}

async function processOrder(product_price, quentity) {
  try {
    const price = await addtocard(product_price);
    const total = await totalPrice(quentity, price);
    const feedback = await delivery(total);
    console.log("price:", price, "total:", total, "feedback:", feedback);
  } catch (error) {
    console.log(error);
  }
}
processOrder(100, 3);
