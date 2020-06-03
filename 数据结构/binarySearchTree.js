class Node {
  constructor(key, left, right) {
    this.key = key
    this.left = left
    this.right = right
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null // 初始化根节点
    this.count = 0 // 记录二叉搜索的节点数量
  }
  insert(key) {
    const node = new Node(key)
    function insertNode(root, node) {
      if (node.key < root.key) {
        if (root.left) {
          insertNode(root.left, node)
        } else {
          root.left = node
        }
      } else {
        if (root.right) {
          insertNode(root.right, node)
        } else {
          root.right = node
        }
      }
    }
    if (this.root) {
      insertNode(this.root, node)
    } else {
      this.root = node
    }
  }
  // 先序遍历
  preOrderTraverse(cb) {
    function preOrderTraverseNode(node, cb) {
      if (node) {
        cb(node.key) // 访问节点本身
        preOrderTraverseNode(node.left, cb) // 访问左侧节点
        preOrderTraverseNode(node.right, cb) // 访问右侧节点
      }
    }
    preOrderTraverseNode(this.root, cb)
  }
  // 中序遍历
  inOrderTraverse(cb) {
    function inOrderTraverseNode(node, cb) {
      if (node) {
        inOrderTraverseNode(node.left, cb) // 访问左侧节点
        cb(node.key) // 访问节点本身
        inOrderTraverseNode(node.right, cb) // 访问右侧节点
      }
    }
    inOrderTraverseNode(this.root, cb)
  }
  // 后序遍历
  postOrderTraverse(cb) {
    function postOrderTraverseNode(node, cb) {
      if (node) {
        postOrderTraverseNode(node.left, cb) // 访问左侧节点
        postOrderTraverseNode(node.right, cb) // 访问右侧节点
        cb(node.key) // 访问节点本身
      }
    }
    postOrderTraverseNode(this.root, cb)
  }
  minNode(node) {
    node = node ? node : this.root
    while (node && node.left) {
      node = node.left
    }
    return node
  }
  maxNode(node) {
    node = node ? node : this.root
    while (node && node.right) {
      node = node.right
    }
    return node
  }
  removeNode(key) {
    const getRemoveNode = (node, key) => {
      if (node) {
        if (node.key > key) {
          node.left = getRemoveNode(node.left, key)
          return node
        } else if (node.key < key) {
          node.right = getRemoveNode(node.right, key)
          return node
        } else {
          if (!node.left && !node.right) {
            return node
          } else if (!node.left) {
            node = node.right
            return node
          } else if (!node.right) {
            node = node.left
            return node
          } else {
            let rightMin = this.minNode(node.right)
            node.key = rightMin.key
            node.right = getRemoveNode(node.right, rightMin.key)
            return node
          }
        }
      } else {
        return null
      }
    }
    return getRemoveNode(this.root, key)
  }
  destory() {
    function destoryNode(node) {
      if (node) {
        destoryNode(node.left)
        destoryNode(node.right)
        node = null
        return node
      }
    }
    destoryNode(this.root)
  }
  print() {
    return JSON.stringify(this.root)
  }
}
const tree = new BinarySearchTree()
tree.insert(11)
tree.insert(7)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(15)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)

// 11 7 5 3 9 8 10 15 13 12 14 20 18 25
// tree.preOrderTraverse(function(item){
//   console.log(item)
// })
// 3 5 7 8 9 10 11 12 13 14 15 18 20 25
// tree.inOrderTraverse(function (item) {
//   console.log(item)
// })
// 3 5 8 10 9 7 12 14 13 18 25 20 15 11
// tree.postOrderTraverse(function (item) {
//   console.log(item)
// })
// console.log(tree.print())

tree.removeNode(7)
console.log(tree.print())
