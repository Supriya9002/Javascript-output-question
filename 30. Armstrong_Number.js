function ArmStrongNumber(n) {
  let num = n;
  const NumberLength = String(n).length;
  let mul = 1;
  let sum = 0;
  while (num > 0) {
    const r = num % 10;
    num = Math.floor(num / 10);
    mul = 1;
    for (let j = 0; j < NumberLength; j++) {
      mul = mul * r;
    }
    sum = sum + mul;
  }
  if (n === sum) {
    console.log("arm");
  } else {
    console.log("not arm");
  }
}

ArmStrongNumber(153);
