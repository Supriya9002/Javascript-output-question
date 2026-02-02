// "aabbbcc" → "a2b3c2"

function StringCompression(str) {
  let obj = {};
  let compress = "";
  for (let s of str) {
    obj[s] = (obj[s] || 0) + 1;
  }
  //   console.log(obj);
  for (let key in obj) {
    // console.log(key);
    compress = compress + key + obj[key];
  }
  console.log("compress", compress);
}

StringCompression("aabbbcc");

let obj = "aabbbcc";

//imp object can not be itreate like string, array, hare use in for itreted
