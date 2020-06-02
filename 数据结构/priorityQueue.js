class PriorityQueue {
  constructor() {
    this.items = []
  }
  enqueue(element, priority) {
    const queue = { element, priority }
    if (this.isEmpty()) {
      this.items.push(queue)
    } else {
      const current = this.items.findIndex((item) => item.priority > priority)
      if (current > -1) {
        this.items.splice(current, 0, queue)
      } else {
        this.items.push(queue)
      }
    }
  }
  dequeue() {
    return this.items.shift()
  }
  front() {
    return this.items[0]
  }
  clear() {
    this.items = []
  }
  isEmpty() {
    return !this.items.length
  }
  size() {
    return this.items.length
  }
}
