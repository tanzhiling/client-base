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
    this.length = 0
  }
  append(element) {
    const node = new Node(element)
    let current
    if (this.head === null) {
      this.head = node
    } else {
      current = this.head
      while (current.next) {
        current = current.next // 找到最后一项
      }
      current.next = node
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
    node.next = current.next
    current.next = node
    this.length++
  }
  findPrev(item) {
    let current = this.head
    while (current.next && current.next.element !== item) {
      current = current.next
    }
    return current
  }
  remove(item) {
    const prev = this.findPrev(item)
    if (prev.next) {
      prev.next = prev.next.next
      this.length--
    }
  }
  edit(item, element) {
    const current = this.find(item)
    current.element = element
  }
  print() {
    let current = this.head
    let result = []
    while (current.next) {
      result.push(current.element)
      current = current.next
    }
    return result
  }
  size() {
    return this.length
  }
}

let names = new LinkedList()
names.append('a')
names.append('b')
names.append('d')
names.insert('c', 'b')
console.log(names.size())
