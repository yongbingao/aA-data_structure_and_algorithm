// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        const newNode = new Node(val);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if(this.tail === null) return;

        const tail = this.tail;
        let current = this.head;
        if(this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else{
            while(current.next !== null){
                if(current.next === tail) break; 
                current = current.next;
            }
            this.tail = current;
            current.next = null;
        }

        this.length--;
        return tail;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        const newNode = new Node(val);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        } else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if(this.head === null) return;

        const head = this.head;
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
        } else{
            this.head = this.head.next;
        }

        this.length--;
        return head;
    }

    // TODO: Implement the contains method here
    contains(target) {
        if(this.length === 0) return false;

        let current = this.head;
        while(current){
            if(current.value === target) return true;
            current = current.next;
        }

        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if(index >= this.length) return null;

        let current = this.head;
        for(let i = 1; i <= index; i++){
            current = current.next;
        }
        return current;
    }

    // TODO: Implement the set method here
    set(index, val) {
        if(index >= this.length) return false;

        let current = this.head;
        for(let i = 1; i <= index; i++){
            current = current.next;
        }
        current.value = val;
        return true;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if(index >= this.length) return false;

        let current = this.head;
        const newNode = new Node(val);
        for(let i = 2; i <= index; i++){
            current = current.next;
        }

        newNode.next = current.next;
        current.next = newNode;
        this.length++;
        return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
        if(index >= this.length) return;

        let current = this.head;
        for(let i = 2; i <= index; i++){
            current = current.next;
        }
        const removeNode = current.next;
        current.next = removeNode.next;
        this.length--;
        return removeNode;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
