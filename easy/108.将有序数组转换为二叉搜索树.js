/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (nums.length === 0) {
        return null;
    }
    if (nums.length === 1) {
        return new TreeNode(nums[0]);
    }
    return generate(nums, 0, nums.length - 1);
};

var generate = function(nums, start, end) {
    if (start > end) {
        return null;
    }
    const midIndex = start + parseInt((end - start) / 2);
    const mid = nums[midIndex];
    const root = new TreeNode(mid);
    root.left = generate(nums, start, midIndex - 1);
    root.right = generate(nums, midIndex + 1, end);
    return root;
}

