// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');


function buildTree(preorder, inorder) {
    // brute force solution: break inputs down into sub-arrays and do recursion with sub-arrays
    // if (preorder.length === 0) return null;

    // const root = new TreeNode(preorder[0]);

    // const rootIndex = inorder.indexof(root.val);
    // const leftInorder = inorder.slice(0, rootIndex);
    // const rightInorder = inorder.slice(rootIndex + 1, inorder.length);
    // const leftPreorder = preorder.slice(1, leftInorder.length + 1);
    // const rightPreorder = preorder.slice(leftInorder.length + 1 + 1, preorder.length);

    // root.left = buildTree(leftPreorder, leftInorder);
    // root.right = buildTree(rightPreorder, rightInorder);

    // return root;

    // solution with pointers: reduces space required and no need to break down inputs into subarrays
    const recFunc = (p1, p2, i1, i2) => {
        if (p1 > p2 || i1 > i2) return null;

        const root = new TreeNode(preorder[p1]);

        const rootIndex = inorder.indexOf(root.val);
        const length = rootIndex - i1;

        root.left = recFunc(p1 + 1, p1 + length, i1, rootIndex);
        root.right = recFunc(p1 + length + 1, p2, rootIndex + 1, i2);

        return root;
    }

    return recFunc(0, preorder.length - 1, 0, inorder.length - 1);
}
