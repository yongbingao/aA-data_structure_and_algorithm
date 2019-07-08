class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
   constructor(){
       this.root = null;
   }

   insert(val, root = this.root){
       if(root === null) this.root = new TreeNode(val)
       else if(root.val > val){
           if(root.left === null) root.left = new TreeNode(val);
           else this.insert(val, root.left);
       } else {
           if(root.right === null) root.right = new TreeNode(val);
           else this.insert(val, root.right);
       }
   }

   searchRecur(val, root = this.root){
       if(root === null) return false;

       if(val > root.val){
           return this.searchRecur(val, root.right);
       } else if(val < root.val){
           return this.searchRecur(val, root.left);
       } else {
           return true;
       }
   }

   searchIter(val, root = this.root){
       let currentNode = root;
       
       while(currentNode !== null){
           if(currentNode.val === val) return true;
           else if(currentNode.val < val) currentNode = currentNode.right;
           else currentNode = currentNode.left;
       }

       return false;
   }
}

module.exports = {
    TreeNode,
    BST
};