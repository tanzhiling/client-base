class Stack {
  constructor() {
    this.items = []
  }
  // 入栈
  push(item) {
    return this.items.push(item)
  }
  // 出栈
  pop() {
    return this.items.pop()
  }
  // 末位
  peek() {
    return this.items[this.items.length - 1]
  }
  // 是否为空栈
  isEmpty() {
    return !this.items.length
  }
  // 栈内元素个数
  size() {
    return this.items.length
  }
  // 清空栈
  clear() {
    this.items = []
  }
}
module.exports = Stack
