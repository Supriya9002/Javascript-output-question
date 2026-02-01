function onlyDigits(str) {
    for(let i=0; i<str.length; i++){
        if(str[i]>=0 && str[i]<=9){
            continue;
        }else{
            return false;
        }
    }
    return  true;
}
console.log(onlyDigits("12345"));
console.log(onlyDigits("12a3"));

// "12345" → true
// "12a3" → false
