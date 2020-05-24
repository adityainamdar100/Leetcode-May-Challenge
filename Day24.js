/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
function create(temp,parent) {
    if(temp.val<parent.val && parent.left!==null) {
        create(temp,parent.left);
    }
    else if(temp.val<parent.val && parent.left===null) {
        parent.left = temp;
        return;
    }else if(temp.val>parent.val && parent.right!==null) {
        create(temp,parent.right);
    }
    else if(temp.val>parent.val && parent.right===null) {
        parent.right = temp;
        return;
    }
}

var bstFromPreorder = function(preorder) {
    let root = new TreeNode(preorder[0],null,null);
    for(let i=1;i<preorder.length;i++) {
        let temp = new TreeNode(preorder[i],null,null);
        create(temp,root);
    }
    return root;
};
