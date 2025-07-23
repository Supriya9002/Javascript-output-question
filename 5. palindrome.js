function checkPalindram(a) {
  for (let i = 0; i < (a.length - 1) / 2; i++) {
    if (a[i] !== a[a.length - 1 - i]) {
      return "Not Palindram";
    }
  }

  return "Palindram";
}

a = "madam";
console.log(checkPalindram(a));
