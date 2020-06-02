/**
 * 斐波那契数列
 * 要求： 使用队列计算斐波那契数列的第n项
 * 分析： 斐波那契数列的前两项固定为1，后面的项为前两项之和，依次向后，这便是斐波那契数列。
 */
const Queue = require('../queue')
function Fibonacci(n) {
  const queue = new Queue()
  queue.enqueue(1)
  queue.enqueue(1)
  let index = 0
  while (n > index + 2) {
    index += 1
    const nextQueueValue = queue.dequeue() + queue.head()
    queue.enqueue(nextQueueValue)
  }
  return queue.tail()
}
/**
 * 斐波那契数列 
 * 要求： 使用队列计算斐波那契数列的第n项 并返回原有数列
 * 分析： 斐波那契数列的前两项固定为1，后面的项为前两项之和，依次向后，这便是斐波那契数列。
 */
function Fibonacci(n) {
  const queue = new Queue()
  const result = new Queue()
  queue.enqueue(1)
  queue.enqueue(1)
  result.enqueue(1)
  result.enqueue(1)
  let index = 0
  while (n > index + 2) {
    index += 1
    const nextQueueValue = queue.dequeue() + queue.head()
    result.enqueue(nextQueueValue)
    queue.enqueue(nextQueueValue)
  }
  console.log(JSON.stringify(result))
  return queue.tail()
}
console.log(Fibonacci(10))
