arr = [1, 2, 3, 4, 5, 2, 3, 4, 8, 9];

// map
const multiple = arr.map((ele) => {
  return ele * ele;
});
console.log(multiple);

// filter
const greterfive = arr.filter((ele) => {
  return ele > 50;
});
console.log(greterfive);

const users = {
  alice: 17,
  bob: 22,
  charlie: 19,
  diana: 16,
};

const adults = Object.values(users).filter((user) => {
  return user > 18;
});
console.log("Adults", adults);

// reduce
