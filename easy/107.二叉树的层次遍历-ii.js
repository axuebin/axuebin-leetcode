/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
 * @return {number[][]}
 */

var levelOrderBottom = function(root) {
    if (!root) {
        return [];
    }
    var result = [];
    var search = function(root, level) {
        if (root) {
            if (result.length < level) {
            result.unshift([]);
            }
            var arr = result[result.length - level];
            arr.push(root.val);
            search(root.left, level + 1);
            search(root.right, level + 1)
        } else {
            return;
        }
    };
    search(root, 1);
    return result;
};


