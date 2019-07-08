function breadthFirstArray(root) {
    const nodeQueue = [root];
    const result = [];
    let i = 0;
    while(i < nodeQueue.length){
        const node = nodeQueue[i];
        result.push(node.val);
        
        if(node.left) nodeQueue.push(node.left);
        if(node.right) nodeQueue.push(node.right);

        i++;
    }
    return result;
}

module.exports = {
    breadthFirstArray
};