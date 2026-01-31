const str1 = ["Supriya", "Salaj", "Roni"];
const str2 = ["one", "tow", "three"];

const str = [...str1, ...str2];

for (let s of str) {
  console.log(s.substring(0, 2));
}

[...str1, ...str2].map((s) => console.log(s.substring(0, 2)));
