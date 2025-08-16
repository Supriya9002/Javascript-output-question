// Given a string, write a javascript function to count the occurrences of each character in the string.

function countCharacters(str) {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    let present = str[i] in result;
    if (present) {
      // result.str[i] += 1; // is wrong because JavaScript thinks you are looking for a property named str inside result. But result has no property str.
      result[str[i]] += 1; // ✅ Correct
    } else {
      result[str[i]] = 1;
    }
  }
  return result;
}

const result = countCharacters("helaalo");
console.log(result);
// Output: { h: 1, e: 1, l: 2, a: 2, o: 1 }

// Hints
const hints = { h: 1, e: 1, l: 2, a: 2, o: 1 };
console.log("hints", hints.a, hints["a"]);
