// function sumOfDigit(str) {
//   let sumOfnumber = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] >= 0 && str[i] <= 9) {
//       sumOfnumber += Number(str[i]);
//     }
//   }
//   console.log(sumOfnumber);
// }

// sumOfDigit("aas1fg23k1");

function sumofNumberString(str) {
  let sum = 0;
  let sumofDigit = 0;
  let sumofNumber = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "0" && str[i] <= "9") {
      sumofNumber += str[i];
      sumofDigit += Number(str[i]);
    } else {
      if (sumofNumber !== "") {
        sum = Number(sumofNumber) + sum;
        sumofNumber = "";
      }
    }
  }
  if (sumofNumber !== "") {
    sum = Number(sumofNumber) + sum;
  }
  console.log({ sumofDigit, sum });
}
sumofNumberString("a23d1c2");
