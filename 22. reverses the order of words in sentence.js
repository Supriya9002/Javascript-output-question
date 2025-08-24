// const reverseWords = (str) => {
//   let result = "";
//   let start, end;
//   let j = 0;
//   start = end = str.length - 1;
//   for (let i = str.length - 1; i >= 0; i--) {
//     if(str[i]===" "){
//       end = start;
//       start = i+1;
//       while(start<end){
//         result[j] = str[start]
//         j++, start++;
//       }
//     }
//   }
//   console.log("result",result);
// };
// // Example usage
// reverseWords("ChatGPT is awesome");
// //"awesome is ChatGPT"


// Another Solution
const reverseWords = (sampleString) => {
  let reversedSentence = "";
  let word = "";
  for (let i = 0; i < sampleString.length; i++) {
    if (sampleString[i] !== " ") {
      word += sampleString[i];
      // console.log("word", word);
    } else {
      reversedSentence = word + " " + reversedSentence;
      console.log("reversedSentence", reversedSentence);
      word = "";
    }
  }
  reversedSentence = word + " " + reversedSentence;
  console.log(reversedSentence.trim());
};
// Example usage
reverseWords("ChatGPT is awesome");
// "awesome is ChatGPT"


// // Another Solution 
// const reverseWords = (str) => {
//   let result = "";
//   let end = str.length;

//   for (let i = str.length - 1; i >= 0; i--) {
//     if (str[i] === " ") {
//       result += str.substring(i + 1, end) + " ";
//       end = i;
//     }
//   }

//   // Add the first word (since loop ends before it)
//   result += str.substring(0, end);

//   console.log(result);
// };

// // Example usage
// reverseWords("ChatGPT is awesome"); // "awesome is ChatGPT"
