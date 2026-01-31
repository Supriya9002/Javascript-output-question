function reverseWords(str) {
  let result = "";
  let word = "";

  // Traverse from end
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== " ") {
      word = str[i] + word;
    } else {
      result = word + " ";
      word = "";
    }
  }
  //   console.log(result);

  // Add the first word
  result += word;
  return result;
}

console.log(reverseWords("welcome to earth"));
console.log("1" + "1");
