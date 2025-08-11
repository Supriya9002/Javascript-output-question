// const margeString = (str1, str2) => {
//   const minLength = Math.min(str1.length, str2.length);
//   console.log(minLength);
//   let result = "";
//   let i = 0;
//   for (i = 0; i < minLength; i++) {
//     result += str1[i];
//     result += str2[i];
//   }

//   while (i < str1.length) {
//     result += str1[i];
//     i++;
//   }

//   while (i < str2.length) {
//     result += str2[i];
//     i++;
//   }
//   console.log(result)
// };

// let str1 = "SUPRIYA";
// let str2 = "HALDAR";

// margeString(str1, str2);


// alternative

const margeString = (str1, str2) => {
  const minLength = Math.min(str1.length, str2.length);
  let result = "";

  for (let i = 0; i < minLength; i++) {
    result += str1[i] + str2[i];
  }

  result += str1.slice(minLength);
  result += str2.slice(minLength);

  console.log(result);
};

margeString("SUPRIYA", "HALDAR");
