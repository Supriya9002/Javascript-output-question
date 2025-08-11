const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Task completed!");
  } else {
    reject("Task failed!");
  }
});

// myPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("Done!"));

  // if i do async and await

  const myPromise2 = async ()=>{
    try{
      const result = await myPromise;
      console.log(result)
    }catch(err){
      console.log(err)
    }finally{
      console.log("Done")
    }
  }
  myPromise2()