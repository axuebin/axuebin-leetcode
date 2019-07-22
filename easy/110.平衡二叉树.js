/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function deep(root) {
    if (root === null) {
        return 0;
    }
    const leftDeep = 1 + deep(root.left);
    const rightDeep = 1 + deep(root.right);
    return leftDeep > rightDeep ? leftDeep : rightDeep;
}

var isBalanced = function(root) {
    if (!root) {
        return true;
    }
    const leftDeep = deep(root.left);
    const rightDeep = deep(root.right);
    const diff = Math.abs(leftDeep - rightDeep);

    return diff <= 1 && isBalanced(root.left) && isBalanced(root.right);

};

