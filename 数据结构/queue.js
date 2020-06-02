class Queue {
  constructor() {
    this.items = []
  }
  enqueue(item) {
    return this.items.push(item)
  }
  dequeue() {
    return this.items.shift()
  }
  head() {
    return this.items[0]
  }
  tail() {
    return this.items[this.items.length - 1]
  }
  isEmpty() {
    return !this.items.length
  }
  size() {
    return this.items.length
  }
  clear() {
    this.items = []
  }
}
module.exports = Queue