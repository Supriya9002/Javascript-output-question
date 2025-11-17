// Input: [3, 1, 5, 2, 4] → Output: 4



const secondLeargest = (arr)=>{
    let unique = [...new Set(arr)]
    let newArr = unique.sort((a, b)=>a-b);
    console.log(newArr)
    console.log(newArr[newArr.length-2])
}

secondLeargest([3, 1, 5, 2, 4, 4, 5])