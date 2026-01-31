function checkConsonentAndVowel(str) {
  let obj = "aeiouAEIOU";
  let vow = 0,
    con = 0;
  for (let s of str) {
    if (obj.includes(s)) {
      vow++;
    } else {
      con++;
    }
  }
  return { vow: vow, con: con };
}
let str = "aknecnje";
console.log(checkConsonentAndVowel(str));
