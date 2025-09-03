const user1 = {
  name: "Supriya",
};
const user2 = {
  name: "Anima",
};

function solution(...arg) {
  console.log(arg);
  console.log(`${this.name} ${arg[0]},  ${arg[1]}?`);
}

// call
solution.call(user1, "how are you", "are you sure");
//apply
solution.apply(user2, ["how are you", "are you sure"]);
// bind
const bindFutureUse = solution.bind(user1, "I am from the bind");
// it can use in future
bindFutureUse()
