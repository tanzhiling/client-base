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
        cb(node.key) // 先访问节点本身
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
        cb(node.key) // 先访问节点本身
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
        cb(node.key) // 先访问节点本身
      }
    }
    postOrderTraverseNode(this.root, cb)
  }
  print() {
    return this.root
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
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)

tree.preOrderTraverse(function(item){
  console.log(item)
})
tree.inOrderTraverse(function (item) {
  console.log(item)
})
tree.postOrderTraverse(function (item) {
  console.log(item)
})
// console.log(tree.print())
