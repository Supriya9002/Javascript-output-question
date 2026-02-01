let str = "abccbaak";

function countFrequency(str) {
  let obj = {};
  for (let s of str) {
    if (s in obj) {
      obj[s] += 1;
    } else {
      obj[s] = 1;
    }
  }
  console.log(obj);
}
countFrequency(str);
