let str = "[{()}]"; //"[{)()}]"

function validParenthesis(str) {
  let obj = { "]": "[", "}": "{", ")": "(" };
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "[" || str[i] == "{" || str[i] == "(") {
      stack.push(str[i]);
    } else {
      if (stack[stack.length - 1] == obj[str[i]]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length == 0;
}
console.log(validParenthesis(str));
// Logic
// make a object { "]": [, "}": {, ")":( }
// take a stack and run while loop whever found stating parenthisis push in stack
// whenever found closing parenthisis that time check , stack top element === object[current string]
//if not retun false
// if true stack pop(), and run untill stack finished
