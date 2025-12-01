// callback
function fetchData(callback) {
  setTimeout(() => callback("done"), 1000);
}

// async await
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done");
    }, 1000);
  });
}

async function test() {
  const result = await fetchData();
  console.log(result);
}
test();
