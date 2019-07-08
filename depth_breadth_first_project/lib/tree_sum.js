function treeSum(root) {
    if(!root) return 0;
    let sum = 0;
    const nodeQueue = [root];

    while(nodeQueue.length){
        const node = nodeQueue.shift();
        sum += node.val;

        if(node.left) nodeQueue.push(node.left);
        if(node.right) nodeQueue.push(node.right);
    }
    return sum;
}


module.exports = {
    treeSum
};