function sumofNumberString(str) {
  let number = 0,
    sumofdigit = 0,
    sumofnumber = 0;
  for (let s of str) {
    if (s >= 0 && s <= 9) {
      sumofdigit += Number(s);
      number += s;
    } else {
      if (number) {
        // console.log(number)
        sumofnumber += Number(number);
        number = "";
      }
    }
  }
  sumofnumber += Number(number);
  return { sumofdigit, sumofnumber };
}
console.log(sumofNumberString("a23d1c2"));
