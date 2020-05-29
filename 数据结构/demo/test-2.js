/**
 * 逆波兰表达式，也叫后缀表达式，它将复杂表达式转换为可以依靠简单的操作得到计算结果的表达式，
 * 例如 (a+b)*(c+d)转换为 a b+c d+*
 * ["a","b","+","c","d","+","*"] ==> (a+b)*(c+d)
 * ["4", "13", "5", "-", "+"] ==> (4+(13 - 5)) = 12
 * ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"] ==> ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
 * 分析 以符号为触发节点，一旦遇到符号，就将符号前两个元素按照该符号运算，并将新的结果入栈，直到栈内仅一个元素
 * */
const Stack = require('../stack')
function isSign(sign) {
  return ['+', '-', '*', '/'].includes(sign)
}
function ReversePolishNotation(arr) {
  const stack = new Stack()
  for (let i = 0, len = arr.length; i < len; i++) {
    const target = arr[i]
    if (isSign(target)) {
      const last_one = stack.pop()
      const last_two = stack.pop()
      const new_target =eval(`${last_two}${target}${last_one}`)
      stack.push(new_target)
    } else {
      stack.push(target)
    }
  }
  return stack.peek()
}
console.log(ReversePolishNotation(["4", "13", "5", "-", "+"]))