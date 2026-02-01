function removeDuplicate(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (!newStr.includes(str[i])) {
      newStr += str[i];
    }
  }
  return newStr;
}

let str = "aabbc";
console.log(removeDuplicate(str));
