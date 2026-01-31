//Callback Hell
// loginUser("Ram", (user) => {
//   getData(user, (data) => {
//     processData(data, (result) => {
//       console.log(result);
//     });
//   });
// });

function loginUser(username) {
  return new Promise((resolve, reject) => {
    resolve("loginUser fn resolve");
  });
}
function getData(user) {
  return new Promise((resolve, reject) => {
    resolve("getData fn resolve");
  });
}
function processData(data) {
  return new Promise((resolve, reject) => {
    resolve("processData fn resolve");
  });
}

loginUser("Suman")
  .then(getData)
  .then(processData)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
