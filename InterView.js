// arr = [
//   [4, 5],
//   [2, 3, 4],
//   [5, 6, 7]
// ];

// let duplIArr = [];
// let k=0;
// // console.log(arr.length)
// for(let i = 0; i<arr.length; i++){
//     let c = arr[i]
//     // console.log(c.length)
//     for(let j = 0; j<c.length; j++){
//         // duplIArr[k] = c[j];
//         duplIArr.push(c[j])
//         k++;
//     }
// }

// console.log(duplIArr)

// const obj = {
//     constractor(name, age){
//         name = this.name,
//         age = this.age,
//     }
// }

// spard operator
// const arr1 = [1, 2];
// const arr2 = [...arr1, 4, 5];
// console.log(arr2);

function person(){
    this.name = "Suuuu"
}

person.prototype.age = 20;
let std = new person()
console.log(std.age)