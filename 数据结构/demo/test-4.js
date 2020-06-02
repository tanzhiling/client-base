/**
 * 约瑟夫环
 * 要求： 有一个数组 a[100]存放0~99；要求每隔两个数删掉一个数，到末尾时循环至开头继续进行，求最后一个被删掉的数
 * 分析： 按数组创建队列，依次判断元素是否满足为指定位置的数，如果不是则 enqueue到尾部，否则忽略，当仅有一个元素时便输出
 */
const Queue = require('../queue')
const arr_100 = Array.from({ length: 100 }, (v, i) => i + 1)

function JosephusRing(list) {
  const queue = new Queue()
  list.forEach((item) => queue.enqueue(item))
  let index = 0
  while (queue.size() !== 1) {
    const item = queue.dequeue()
    index += 1
    if (index % 3 !== 0) {
      queue.enqueue(item)
    }
  }
  return queue.tail()
}
console.log(JosephusRing(arr_100))
