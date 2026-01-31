let str1 = "anima";
let str2 = "mniaa";

function checkAnagrams(str1, str2) {
  let obj = {};
  if (str1.length !== str2.length) {
    return false;
  }
  for (let s of str1) {
    obj[s] = (obj[s] || 0) + 1;
  }
  console.log(obj)
  for (let s of str2) {
    if (!obj[s]) {
      return false;
    }
  }
  return true;
}

console.log(checkAnagrams(str1, str2));
