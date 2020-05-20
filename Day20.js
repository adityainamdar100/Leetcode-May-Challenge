/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
let ele = -1;
let cnt = 0;
function dfs(root,k) {
    if(!root)
        return;
    dfs(root.left,k);
    cnt += 1;
    if(cnt === k)
        ele = root.val;
    dfs(root.right,k);
}
var kthSmallest = function(root, k) {
    ele = -1;
    cnt = 0;
    dfs(root,k);
    return ele;
};
