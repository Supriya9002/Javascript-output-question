const a = [2, 8, 4, 5, 9, 2, 8, 9];

const afterDuplicate = [];

for (var i = 0; i < a.length; i++) {
  if (afterDuplicate.indexOf(a[i]) === -1) {
    afterDuplicate.push(a[i]);
  }
}
console.log(afterDuplicate);
