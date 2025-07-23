function findSmallestWord(sentence) {
  const word_array = sentence.split(" ");
//   console.log(word_array);
  let smallest = word_array[0];
  for (let i = 0; i < word_array.length; i++) {
    if (word_array[i].length < smallest.length) {
      smallest = word_array[i];
    }
  }
  console.log(smallest);
}

const sentence = "Find the smallest word";
findSmallestWord(sentence);
