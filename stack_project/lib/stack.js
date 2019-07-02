// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
        this.push = this.push.bind(this);
        this.pop = this.pop.bind(this);
        this.size = this.size.bind(this);
    }

    push(val){
        const newNode = new Node(val);

        if(this.top === null){
            this.top = newNode;
            this.bottom = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }

        return ++this.length;
    }

    pop(){
        if(this.top === null) return null;

        const top = this.top;

        if(this.top === this.bottom){
            this.top = null;
            this.bottom = null;
        } else {
            this.top = top.next;
        }

        this.length--;
        return top.value;
    }

    size(){
        return this.length;
    }
}

exports.Node = Node;
exports.Stack = Stack;
