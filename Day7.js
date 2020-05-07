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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    let tree = [], queue = [];
    tree.push(root.val);
    queue.push(root);
    while(queue.length>0) {
        if(queue[0]===null) {
            queue.push(null);
            queue.push(null);
            tree.push(0);
            tree.push(0);
            if(tree.length>=18000)
                break;
        } else {
        if(queue[0].left!=null) {
            // console.log(queue[0].left.val);
            queue.push(queue[0].left);
            tree.push(queue[0].left.val);
        } else {
            queue.push(null);
            tree.push(0);
        }
        if(queue[0].right!=null) {
            queue.push(queue[0].right);
            tree.push(queue[0].right.val);
        } else {
            queue.push(null);
            tree.push(0);
        } }
        queue.shift();
    }
    let x1 = tree.indexOf(x);
    let range = 0;
    for(let i=0;i<=20;i++) {
        if(x1+1>=Math.pow(2,i) && x1+1<Math.pow(2,i+1))
        {
            range = i;
            break;
        }
    }
    let y1 = tree.indexOf(y);
    if(y1+1>=Math.pow(2,range) && y1+1<Math.pow(2,range+1)) {
        if(x1%2==1) {
            if(y1===x1+1)
                return false;
        }
        else if(x1%2==0 && y1===x1-1) {
            return false;
        }
        return true;
    } else 
        return false;
};
