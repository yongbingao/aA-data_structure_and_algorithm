// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/


function isBalanced(root) {
    if (root === null) return true;

    const caclTree = (node) => {
        if (node === null) return -1;

        const left = caclTree(node.left) + 1;
        const right = caclTree(node.right) + 1;

        return Math.max(left, right);
    }

    const leftSide = caclTree(root.left);
    const rightSide = caclTree(root.right);
    if (Math.abs(leftSide - rightSide) > 1) return false;

    return isBalanced(root.left) && isBalanced(root.right);
}