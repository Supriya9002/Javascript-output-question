const p = new Promise((resolve, reject) => {
  resolve("done");
});

p.then((res) => console.log("resolve", res)).catch((err) =>
  console.log("reject", err)
);
