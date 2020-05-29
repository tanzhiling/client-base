/**
 * 实现min方法
 * */
const Stack = require('../stack')

class MinStack {
  constructor() {
    this.dataStack = new Stack()
    this.minStack = new Stack()
  }
  push(item) {
    this.dataStack.push(item)
    if (this.minStack.isEmpty() || this.minStack.peek() > item) {
      this.minStack.push(item)
    } else {
      this.minStack.push(this.minStack.peek())
    }
  }
  pop() {
    let last = this.dataStack.pop()
    last === this.minStack.peek() ? this.minStack.pop() : ''
    return last
  }
  min() {
    return this.minStack.peek()
  }
}
const data = new MinStack()
data.push(3)
data.push(8)
data.push(4)
data.push(2)
data.pop()
console.log(data.min())
