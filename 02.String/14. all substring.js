const substring = (str) => {
  for (let i = 0; i < str.length; i++) {
    let sub = "";
    for (let j = i; j < str.length; j++) {
      sub += str[i];
      console.log(sub);
    }
  }
};

substring("abc");
