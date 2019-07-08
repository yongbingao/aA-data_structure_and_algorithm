function treeHeight(root) {
    if(root === null) return -1;
    let height = 0;

    const left = root.left ? treeHeight(root.left)+1 : 0;
    const right = root.right ? treeHeight(root.right)+1 : 0;

    return height + Math.max(left, right);
}


module.exports = {
    treeHeight
};