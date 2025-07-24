function getUniqueArr(array) {
  let unique = [];
  let seen = {};
  for (let i = 0; i < array.length; i++) {
    if (!seen[array[i].name]) {
      unique.push(array[i]);
      seen[array[i].name] = true;
    }
  }
  console.log(unique);
}

let arr = [
  { name: "sai" },
  { name: "Nang" },
  { name: "sai" },
  { name: "Nang" },
  { name: "111111" },
];

getUniqueArr(arr);

//  Write logic to get unique objects from below array ?
// I/P: [{name: "sai"},{name:"Nang"},{name: "sai"},{name:"Nang"},{name:
// "111111"}];
// O/P: [{name: "sai"},{name:"Nang"}{name: "111111"}
