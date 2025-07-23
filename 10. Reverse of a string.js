const findReverse = (sentence) => {
  var revers = "";
  const word_array = sentence.split(" ");
  console.log(word_array);
  for (let i = word_array.length - 1; i >= 0; i--) {
    revers += word_array[i];
    // Add space only if it's not the last word
    if (i !== 0) {
      revers += " ";
    }
  }
  console.log(revers);
};

findReverse("Hello Iam Saikrishna Ui Developer");
