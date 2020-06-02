class Node {
  constructor(element, next = null) {
    this.element = element
    this.next = next
  }
  toString(cb) {
    return cb ? cb(this.element) : `${this.element}`
  }
}
class LinkedList {
  constructor() {
    this.head = null //头节点
    this.tail = null //尾节点
    this.length = 0
  }
  append(element) {
    const node = new Node(element)
    if (this.head === null) {
      this.head = node
      this.tail = node
      return this
    }
    this.tail.next = node
    this.tail = node
    return this
  }
}
