function depthFirstSearch(root, targetVal) {
    // if(root === null) return null;
    // if(root.val === targetVal) return root;
    
    // const leftNode = depthFirstSearch(root.left, targetVal);
    // if(leftNode) return leftNode;
    // const rightNode = depthFirstSearch(root.right, targetVal);
    // if(rightNode) return rightNode;

    // return null;

    const nodeStack = [root];

    while(nodeStack.length){
        const node = nodeStack.pop();

        if(node.val === targetVal) return node;

        if(node.right) nodeStack.push(node.right);
        if(node.left) nodeStack.push(node.left);
    }
    return null;
}


module.exports = {
    depthFirstSearch
};