//"banana" → Output: { b: 1, a: 3, n: 2 }

const countLetter = (str) => {
    const obj = {}
    for(let i = 0; i<str.length; i++){
        let present = str[i] in obj;
        if(!present){
            obj[str[i]] = 1
        }else{
            obj[str[i]] +=1
        }
    }
    console.log(obj)
    
};

countLetter("banana")

