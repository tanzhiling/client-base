/**
 * 给定一个函数，输入目标数值和进制基数，输出对应的进制数（最大为16进制）
 * */

// baseConverter(10, 2) ==> 1010
// baseConverter(30, 16) ==> 1E
const Stack = require('../stack')
function baseConverter(num, base) {
  const stack = new Stack()
  let rem = null // 余数
  let result = []
  const digits = '0123456789ABCDEF' // 十六进制处理
  while (num > 0) {
    rem = num % base
    num = Math.floor(num / base)
    stack.push(rem)
  }
  while (!stack.isEmpty()) {
    result.push(digits[stack.pop()])
  }
  return result.join('')
}

console.log(baseConverter(10, 16))
