class Node {
  constructor(element, next = null, prev = null) {
    this.element = element
    this.next = next
    this.prev = prev
  }
  toString(cb) {
    return cb ? cb(this.element) : `${this.element}`
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null // 头节点
    this.tail = null // 尾节点
    this.length = 0
  }
  append(element) {
    const node = new Node(element)
    let current, previous
    if (this.head === null) {
      this.head = node
      this.tail = node
    } else {
      current = this.head
      while (current) {
        previous = current
        current = current.next
      }
      node.next = current
      node.prev = previous
      current.prev = node
      previous.next = node
    }
    this.length++
  }
  find(item) {
    let current = this.head
    while (current.element != item) {
      current = current.next
    }
    return current
  }
  insert(element, item) {
    const node = new Node(element)
    let current = this.find(item)
    current.next.prev = node
    node.next = current.next
    node.prev = current
    current.next = node
    this.length++
  }
  remove(item) {
  }
  size() {
    return this.length
  }
}
