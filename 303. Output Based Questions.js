let a = 100;
let x = { 
  a:1,
  b: () => console.log(this.a) 
};
x.b();
