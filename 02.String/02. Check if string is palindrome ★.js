const checkPalindram = (str)=>{
    for(let i=0; i<str.length; i++){
        if(str[i] != str[str.length-1-i]){
            return false
        }
    }
    return true
}

console.log(checkPalindram("aba"))

// approch 2
function checkPalindram2(str){
    let i=0, j=str.length-1;
    while(i<=j){
        if(str[i]!==str[j]){
            return false
        }
        i++,j--;
    }
    return true;
}
console.log(checkPalindram2("abv"))