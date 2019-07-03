// ============================================================================
// Interview Problem: StackQueue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push 
//   - Pop 
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size
//
// -----------
// Let's code!
// -----------

class Node {
    // TODO: Implement the Node class!
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Stack {
    // TODO: Implement the Stack class!
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(node){
        // const newNode = new Node(val);
        if(this.top === null){
            this.top = node;
            this.bottom = node;
        } else {
            node.next = this.top;
            this.top = node;
        }

        return ++this.length;
    }

    pop() {
        if(this.top === null) return null;

        const top = this.top;
        if(this.top === this.bottom){
            this.top = null;
            this.bottom = null;
        } else {
            this.top = this.top.next;
        }

        this.length--;
        return top;
    }

    size(){
        return this.length;
    }
}
class StackQueue {
    // TODO: Implement the StackQueue class!
    constructor(){
        this.inStack = new Stack();
        this.outStack = new Stack();
        this.front = null;
        this.back = null;
        this.length = 0;
    }

    enqueue(val){
        const newNode = new Node(val);

        if(this.front === null) {
            this.inStack.push(newNode);
            this.front = this.inStack.bottom;
            this.back = this.inStack.top;
        }
        else if(this.length === 1){
            this.front.next = newNode;
            this.inStack.push(newNode);
            this.back = this.inStack.top;
        }
        else{
            this.inStack.push(newNode);
            this.back = this.inStack.top;
        }
        return ++this.length;
    }

    dequeue(){
        let first;
        if(this.outStack.top !== null){
            first = this.outStack.pop();
            this.front = this.outStack.top || this.inStack.bottom;
            this.back = this.inStack.top;
        } else{
            while(this.inStack.top !== null){
                this.outStack.push(this.inStack.pop());
            }
            first = this.outStack.pop();
            this.front = this.outStack.top;
            this.back = this.inStack.top;
        }

        if (first) this.length--;
        return first;
    }

    size(){
        return this.length;
    }
};

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
