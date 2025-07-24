const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Task completed!");
  } else {
    reject("Task failed!");
  }
});

myPromise
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("Done!"));
