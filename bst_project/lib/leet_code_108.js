// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/


function sortedArrayToBST(nums) {
    // solution with recursion and pointers, avoids iteration from array slicing
    const func = (left, right) => {
        if (left > right) return null;
        const mid = left + Math.floor((right - left + 1) / 2);
        const root = new TreeNode(nums[mid]);

        root.left = func(left, mid - 1);
        root.right = func(mid + 1, right);

        return root
    }

    return func(0, nums.length - 1);

    // recursion solution, with array slicing
    // if(nums.length === 0) return null;

    // const mid = Math.floor(nums.length / 2);
    // const root = new TreeNode(nums[mid]);

    // root.left = sortedArrayToBST(nums.slice(0, mid));
    // root.right = sortedArrayToBST(nums.slice(mid+1, nums.length));

    // return root;

}