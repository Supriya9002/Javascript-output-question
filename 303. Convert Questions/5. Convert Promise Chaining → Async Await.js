// Promise Chaining
doTask1()
  .then((res) => doTask2(res))
  .then((res) => doTask3(res))
  .then((final) => console.log(final))
  .catch((err) => console.log(err));

  
// Async/Await
async function run() {
  try {
    const res = await doTask1();
    const res1 = await doTask2(res);
    const final = await doTask3(res1);
    console.log(final);
  } catch (err) {
    console.log(err);
  }
}
run();
