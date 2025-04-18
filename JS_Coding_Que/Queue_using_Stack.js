/* 
In JavaScript, we could use array to work as both a Stack or a queue.

const arr = [1, 2, 3, 4]
arr.push(5) // now array is [1, 2, 3, 4, 5]
arr.pop() // 5, now the array is [1, 2, 3, 4]
Above code is a Stack, while below is a Queue

const arr = [1, 2, 3, 4]
arr.push(5) // now the array is [1, 2, 3, 4, 5]
arr.shift() // 1, now the array is [2, 3, 4, 5]
now suppose you have a stack, which has only follow interface:
*/

// you can use this Class which is bundled together with your code

class Stack {
  push(element) {} // add element to stack }
  peek() {} // get the top element }
  pop() {} // remove the top element}
  size() {} // count of element }
}

/* Array is disabled in your code */

// you need to complete the following Class

/* 1st Way */
class Queue {
  stack1;
  stack2;
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  enqueue(element) {
    for (let i = 0; i < this.stack1.size(); i++) {
      this.stack2.push(this.stack1.pop());
    }

    this.stack1.push(element);

    for (let i = 0; i < this.stack2.size(); i++) {
      this.stack1.push(this.stack2.pop());
    }
  }
  peek() {
    return this.stack1.peek();
  }
  size() {
    return this.stack1.size();
  }
  dequeue() {
    return this.stack1.pop();
  }
}

/* 2nd Way */

/* you can use this Class which is bundled together with your code

class Stack {
  push(element) { // add element to stack }
  peek() { // get the top element }
  pop() { // remove the top element}
  size() { // count of element }
}
*/

/* Array is disabled in your code */

// you need to complete the following Class
class Queue1 {
  stack;
  constructor() {
    this.stack = new Stack();
  }

  reverseQueue() {
    const newStack = new Stack();
    while (this.stack.peek()) {
      let item = this.stack.pop();
      newStack.push(item);
    }

    return newStack;
  }

  converse(newStack) {
    while (newStack.peek()) {
      let item = newStack.pop();
      this.stack.push(item);
    }
  }

  enqueue(element) {
    // add new element to the rare
    this.stack.push(element);
  }
  peek() {
    // get the head element
    // return this.stack
    const newStack = this.reverseQueue();
    const result = newStack.peek();
    this.converse(newStack);
    return result;
  }
  size() {
    // return count of element
    return this.stack.size();
  }
  dequeue() {
    const newStack = this.reverseQueue();
    const result = newStack.pop();
    this.converse(newStack);
    return result;
    // remove the head element
  }
}
