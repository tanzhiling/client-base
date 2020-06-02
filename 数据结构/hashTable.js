class HashTable {
  constructor() {
    this.table = {}
  }
  loseloseHashCode(key) {
    let hash = 0
    for (let code of key) {
      hash += code.charCodeAt()
    }
    return hash % 37
  }
  put(key, value) {
    const target = this.loseloseHashCode(key)
    this.table[target] = value
  }
  get(key) {
    return this.table[this.loseloseHashCode(key)]
  }
  remove(key) {
    this.table[this.loseloseHashCode(key)] = undefined
  }
  list() {
    return this.table
  }
}

const hash = new HashTable()
hash.put('a', 'a')
hash.put('b', 'b')
