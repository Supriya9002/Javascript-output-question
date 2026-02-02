function reverseWords(str) {
  let result = "";
  let word = "";

  // Traverse from end
  for (let s of str) {
    if (s !== " ") {
      word += s;
    } else {
      result = word + " " + result;
      word = "";
    }
  }
  //   console.log(result);

  // Add the first word
  result = word + " " + result;
  return result;
}

console.log(reverseWords("welcome to earth"));
