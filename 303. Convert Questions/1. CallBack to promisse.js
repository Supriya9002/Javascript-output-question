// CallBack
function getData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

// Callback to Promise

function getData1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data Recived");
    }, 1000);
  });
}
getData1()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
