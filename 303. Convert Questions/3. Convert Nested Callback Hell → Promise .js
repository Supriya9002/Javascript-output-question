//Callback Hell
loginUser("Ram", (user) => {
  getData(user, (data) => {
    processData(data, (result) => {
      console.log(result);
    });
  });
});

//Promise
function loginUser(username) {
  return new Promise((resolve, reject) => {
    resolve(`Username is ${username}`);
  });
}
function getData(user) {
  return new Promise((resolve, reject) => {
    resolve(`user is ${user}`);
  });
}
function processData(result) {
  return new Promise((resolve, reject) => {
    resolve(`result is ${result}`);
    console.log("Supriya");
  });
}

loginUser("Supriya")
  .then(getData)
  .then(processData)
  .then(console.log)
  .catch((err) => {
    console.log(err);
  });
