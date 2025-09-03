const reverseArrayInPlace = (arr) => {
    let i=0;
    let j= arr.length -1;
    while(j>i){
        let temp = arr[i]
        arr[i]=arr[j]
        arr[j]=temp;
        i++;
        j--;
    }
    return arr;
}

const arr = [3, 7, 1, 9, 2];
console.log(reverseArrayInPlace(arr));

const arr10 = [3, 7, 1, 9, 2];
console.log(arr10.reverse()); // in build function