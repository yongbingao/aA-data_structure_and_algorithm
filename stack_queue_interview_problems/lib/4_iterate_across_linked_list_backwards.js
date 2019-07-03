// ============================================================================
// Interview Problem: Constant Time Stack Max
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Iterate over a Singly Linked List of primitives backwards. When finished, 
// return a string representing the original linked list's values backwards 
// in the following format:
//
//                             'A -> B -> C -> D' 
//
// ------------
// Constraints:
// ------------
//
// (1) Your function must be iterative, not recursive.
// (2) Your function must consume O(n) space.
// (3) Employee either a Stack, Queue, or some combination of the two in your
//     solution. (Implement any data structures you need, as you need them.)
//
//
// -----------
// Let's code!
// -----------

function iterateAcrossLinkedListBackwards(linkedList) {
    // TODO: Implement the iterateAcrossLinkedListBackwards function here

    if(linkedList.head === null) return "";
    else if(linkedList.head === linkedList.tail) return linkedList.head.value.toString();
    class Node{
        constructor(val){
            this.value = val;
            this.next = null;
        }
    }

    class Stack{
        constructor(){
            this.top = null;
            this.bottom = null;
            this.length = 0;
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
                this.top = this.top.next;
            }

            this.length--;
            return top.value;
        }

        size(){
            return this.length;
        }
    }

    let currentNode = linkedList.head;
    const stack = new Stack();

    while(currentNode !== null){
        stack.push(currentNode.value);
        currentNode = currentNode.next;
    }

    let result = "".concat(stack.pop());
    while(stack.length){
        result = result.concat(" -> ", stack.pop());
    }
    return result;
}

exports.iterateAcrossLinkedListBackwards = iterateAcrossLinkedListBackwards;
