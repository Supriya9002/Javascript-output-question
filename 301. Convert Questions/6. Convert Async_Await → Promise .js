// async await
async function test() {
  const user = await getUser();
  const age = await getAge(user);
  console.log(age);
}

// Promise

getUser()
  .then((user) => {
    getAge(user);
  })
  .then((age) => {
    console.log(age);
  })
  .catch((err) => {
    console.log(err);
  });
