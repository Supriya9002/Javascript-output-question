const reverseStr = (str) => {
  str = str.split("");
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    [str[i], str[str.length - 1 - i]] = [str[str.length - 1 - i], str[i]];
  }
  return str.join("");
};
console.log(reverseStr("Supriya"));

// approch 2

function reverseStr2(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  console.log(newString);
}
reverseStr2("Supriya");
