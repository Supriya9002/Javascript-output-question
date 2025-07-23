const findLongestWord = (sentence) => {
  const word_array = sentence.split(" ");
  let longestWord = "";
  console.log(word_array);
  for (let i = 0; i < word_array.length; i++) {
    // console.log(word_array[i].length);
    if (word_array[i].length > longestWord.length) {
      longestWord = word_array[i];
    }
  }
  console.log(longestWord);
};

findLongestWord("Hi Iam Saikrishna Iam a UI Developer");
